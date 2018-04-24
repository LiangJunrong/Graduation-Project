<template>
  <div class="MktIndex">
    <!-- 首屏图片 -->
    <el-card class="market">
      <img src="/static/goods-image/market.jpg" class="market-image" />
    </el-card>
    <!-- 二手市场操作按钮 -->
    <div class="action">
      <router-link to="/AddNewGoods">
        <el-button type="primary" round icon="el-icon-plus">卖货</el-button>
      </router-link>
      <router-link to="/MyCollection">
        <el-button type="primary" round icon="el-icon-star-on">收藏</el-button>
      </router-link>
      <router-link to="/MyGoods">
        <el-button type="primary" round icon="el-icon-goods">我的</el-button>
      </router-link>
    </div>
    <!-- 价格排序 -->
    <el-card class="box-card orderGoods">
      <el-button type="primary" @click="sortGoodsByTime()">刷新</el-button>
      <el-dropdown split-button type="primary">
        <span @click="sortGoodsByPrice">价格排序&nbsp;
          <i class="sort-down" v-bind:class="{'sort-up':!sortFlag}">↓</i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="sortGoodsByPrice">All</span>
          </el-dropdown-item>
          <el-dropdown-item v-for="(price,index) in priceFilter" :key="price.id">
            <span @click="setPriceFilter(index)">{{price.startPrice}} - {{price.endPrice}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-card>
    <!-- 商品列表 -->
    <el-row :gutter="10">
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in goodsList" :key="item.id">
        <el-card class="hover">
          <img v-lazy="'/static/goods-image/'+item.goodsImage" v-bind:alt="item.goodsName" class="image">
          <div style="padding: 14px;">
            <p>商品名：
              <span class="text-primary">{{item.goodsName}}</span>
            </p>
            <p>商品描述：
              <span class="text-orange" v-for="(text,limit) in item.goodsDescription" :key="text.id" v-if="limit<6">{{text}}</span>......
            </p>
            <p>商品价格：
              <span class="price">￥ {{item.goodsPrice}}</span>
            </p>
            <div>
              <router-link :to="{path:'ContactsDetail', query:{'userId':item.goodsCreaterId}}">
                <el-button type="primary" size="small">￥咨询</el-button>
              </router-link>
              <el-badge :value="item.goodsCollectioners.length">
                <el-button type="primary" class="el-icon-star-off" size="small" @click="addCollection(item._id)">收藏</el-button>
              </el-badge>
              <router-link :to="{path:'GoodDetail', query:{'goodsId':item._id}}">
                <el-button type="primary" size="small" icon="el-icon-search">查看</el-button>
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 下拉加载 -->
      <!-- 
        1 v-infinite-scroll：滚动的时候加载的方法
        2 infinite-scroll-disabled：是否需要禁用该方法。busy是true，则该方法失效
        3 infinite-scroll-distance：往下拉多长距离的时候，网页会加载
       -->
      <div class="scroll" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <img v-show="loading" src="/static/loading-svg/loading-spinning-bubbles.svg" />
        <p>{{loadingText}}</p>
      </div>
    </el-row>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        //商品数据存储位置
        goodsList: [],
        //商品加载限制
        page: 1,
        pageSize: 4,

        //busy:true表明该下拉加载插件关闭
        busy: true,
        loading: false,
        loadingText: '',

        // 价格排序
        priceFilter: [{
            startPrice: '0.00',
            endPrice: '100.00'
          },
          {
            startPrice: '100.00',
            endPrice: '500.00'
          },
          {
            startPrice: '500.00',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000.00',
            endPrice: '5000.00'
          }
        ],
        priceChecked: 'all',
        // 价格排序顺序：1为正，2为倒
        sortFlag: true,
        sortDefault: 1,

        //用户信息
        userInfo: []
      }
    },
    mounted: function () {
      this.getGoodsList();
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      getGoodsList(flag) {
        //设置当前活动标题为市场
        this.$store.commit("updateNavHeaderActiveIndex", "/MktIndex");
        //要传递给后台的参数
        var param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag ? -1 : 1,
          sortDefault: this.sortDefault,
          priceLevel: this.priceChecked
        };

        //加载动画和文字
        this.loading = true;
        this.loadingText = '正在努力加载...';

        axios.get("/goods", {
          params: param
        }).then((result) => {
          let res = result.data.result;
          if (flag) { //如果传的参数是对的，那就拼接goodsList
            this.goodsList = this.goodsList.concat(res.list);
            if (res.count == 0) { //判断：如果传回来的条数没了，我们就关掉加载了，同时文字显示已经没有更多了
              this.busy = true;
              this.loading = false;
              this.loadingText = '已经没有更多了哦~';
            } else { //判断：如果还有，那就继续传送数据
              this.busy = false;
            }
          } else { //如果没传参数，那就直接获取全部列表，同时关掉插件
            this.goodsList = res.list;
            this.busy = false;
          }
        });
      },
      sortGoodsByPrice() {
        this.sortFlag = !this.sortFlag;
        this.page = 1;
        this.sortDefault = 0;
        this.getGoodsList();
      },
      sortGoodsByTime() {
        this.$router.go(0);
      },
      loadMore() {
        this.busy = true;
        setTimeout(() => {
          //页面累加
          this.page++;
          //调用加载，同时传参，告诉getGoodsList有小弟要过去了
          this.getGoodsList(true);
        }, 500);
      },
      addCollection(goodsId) {
        axios.post("/goods/addCollection", {
          goodsId: goodsId
        }).then((res) => {
          //注：这里可能是因为没有let res，所以返回的是200状态码
          if (res.data.result == "collection-error") {
            this.$message({
              message: '可能重复收藏了哦~',
              type: 'warning',
              duration: 1000
            });
          } else if (res.status == 200) {
            //此处不知道为什么，点击收藏后商品展示的数量缩小了
            //this.page -= 1;
            // this.getGoodsList();
            this.$message({
              message: '收藏成功',
              type: 'success',
              duration: 1000
            });
          } else {
            this.$message.error('抱歉，收藏失败~');
          }
        });
      },
      setPriceFilter(index) {
        this.priceChecked = index;
        this.page = 1;
        this.getGoodsList();
      },
    }
  };

</script>
<style scoped>
  .action {
    margin: 20px 0px;
  }

  .market-image {
    width: 100%;
    display: block;
    height: 100px;
  }

  .image {
    width: 100%;
    display: block;
    height: 300px;
  }

  .hover {
    margin-top: 10px;
  }

  .hover:hover {
    border-left: 2px solid #ee7a2c;
    border-top: 1px solid #ee7a2c;
    color: #ee7a2c;
    transition: all .3s ease-out;
    padding-left: 5px;
  }

  .scroll {
    clear: both;
    text-align: center;
  }

  .current {
    background: rgb(0, 255, 128);
    color: white;
  }

  .item {
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .checked {
    background: #ee7a2c;
    color: white;
    border: 1px solid #ee7a2c;
  }

  .sort-down {
    position: relative;
    display: inline-block;
    border: none;
    line-height: 50%;
    transition: all .3s ease-out;
  }

  .sort-up {
    transform: rotate(-180deg);
    transition: all .3s ease-out;
  }

  .scroll {
    padding-top: 10px;
  }

  .text-orange {
    color: #ee7a2c;
  }

</style>

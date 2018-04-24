<template>
  <el-row>
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/MktIndex' }">二手市场</el-breadcrumb-item>
        <el-breadcrumb-item>我的收藏</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <!-- 商品列表 -->
    <el-row :gutter="10">
      <!-- 如果收藏品为0 -->
      <div class="notCollection text-center" v-show="hiddenCollection">
        <p>你还没有收藏商品哦~</p>
        <router-link to="/MktIndex">
          <el-button type="primary" size="small" icon="el-icon-star-on">去收藏</el-button>
        </router-link>
      </div>
      <el-col v-show="showCollection" :xs="24" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in collectionList" :key="item.id">
        <el-card class="hover">
          <img v-lazy="'/static/goods-image/'+item.goodsImage" v-bind:alt="item.goodsName" class="image">
          <div>
            <p>卖家：
              <router-link class="text-primary" :to="{path:'ContactsDetail', query:{'userId':item.goodsCreaterId}}">
                {{item.goodsCreaterName}}
              </router-link>
            </p>
            <p>发布时间：
              <span class="time">{{item.goodsCreatetime}}</span>
            </p>
            <p>商品名：
              <router-link class="text-primary" :to="{path:'GoodDetail', query:{'goodsId':item._id}}">
                {{item.goodsName}}
              </router-link>
            </p>
            <p>
              商品描述：
              <span v-for="(text,limit) in item.goodsDescription" :key="text.id" v-if="limit<8">{{text}}</span>......
            </p>
            <p>商品价格：
              <span class="price">￥ {{item.goodsPrice}}</span>
            </p>
            <div>
              <router-link :to="{path:'GoodDetail', query:{'goodsId':item._id}}">
                <el-button type="primary" size="small" icon="el-icon-search">查看</el-button>
              </router-link>
              <router-link class="text-primary" :to="{path:'ContactsDetail', query:{'userId':item.goodsCreaterId}}">
                <el-button type="primary" size="small">￥ 私聊</el-button>
              </router-link>
              <el-button type="primary" size="small" class="el-icon-star-on" @click="disLike(item._id)">
                已收藏
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  import axios from 'axios'
  export default {
    data() {
      return {
        collectionList: [],
        showCollection: false,
        hiddenCollection: true,
      }
    },
    mounted: function () {
      this.getCollectionList();
    },
    components: {
      NavBreadcrumb
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      getCollectionList() {
        axios.get("/goods/myCollection").then((response) => {
          this.$store.commit("updateNavHeaderActiveIndex", "/MktIndex");
          let res = response.data.result.userCollection;
          if (res.length >= 1) {
            this.showCollection = true;
            this.hiddenCollection = false;
          }
          this.collectionList = res;
        })
      },
      disLike(goodsId) {
        axios.post("/goods/dislikeCollection", {
          goodsId: goodsId
        }).then((response) => {
          let res = response.data.result;
          if (res == 'success') {
            this.$message({
              message: '取消收藏成功',
              type: 'success',
              duration: 1000
            });
            this.getCollectionList();
          };
        });
      }
    },
  };

</script>
<style scoped>
  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    height: 300px;
  }

  .checked {
    background: #ee7a2c;
    color: white;
    border: 1px solid #ee7a2c;
  }

  .hover:hover {
    border-left: 2px solid #ee7a2c;
    border-top: 1px solid #ee7a2c;
    color: #ee7a2c;
    transition: all .3s ease-out;
    padding-left: 5px;
  }

  .notCollection {
    margin-top: 30px;
  }

  .text-primary {
    text-decoration: none;
  }

</style>

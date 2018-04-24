<template>
  <el-row>
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/MktIndex' }">二手市场</el-breadcrumb-item>
        <el-breadcrumb-item>我发表的商品</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>

    <!-- 如果收藏品为0 -->
    <div class="notGoods text-center" v-show="hiddenGoods">
      <p>你还没有出售商品哦~</p>
      <router-link to="/AddNewGoods">
        <el-button type="primary" size="small" icon="el-icon-plus">去出售</el-button>
      </router-link>
    </div>
    <!-- 商品列表 -->
    <el-row :gutter="10">
      <el-col v-show="showGoods" :xs="24" :sm="24" :md="6" :lg="6" :xl="6" v-for="myGoods in myGoodsList" :key="myGoods.id">
        <el-card class="hover">
          <img v-lazy="'/static/goods-image/'+myGoods.goodsImage" v-bind:alt="myGoods.goodsName" class="image">
          <div style="padding: 14px;">
            <p>商品编号：
              <span class="text-success">{{myGoods._id}}</span>
            </p>
            <p>商品名：
              <router-link class="text-primary" :to="{path:'GoodDetail', query:{'goodsId':myGoods._id}}">
                {{myGoods.goodsName}}
              </router-link>
            </p>
            <p>
              商品描述：
              <span v-for="(text,limit) in myGoods.goodsDescription" :key="text.id" v-if="limit<8">{{text}}</span>......
            </p>
            <p>商品价格：
              <span class="price">￥ {{myGoods.goodsPrice}}</span>
            </p>
            <div>
              <p>发布时间：
                <span class="time">{{myGoods.goodsCreatetime}}</span>
              </p>
              <router-link :to="{path:'GoodDetail', query:{'goodsId':myGoods._id}}">
                <el-button type="primary" size="small" icon="el-icon-search">查看</el-button>
              </router-link>
              <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteMyGoods(myGoods._id)">删除</el-button>
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
        myGoodsList: '',
        hiddenGoods: true,
        showGoods: false,
      }
    },
    mounted: function () {
      this.getMyGoodsList();
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
      getMyGoodsList() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MktIndex");
        axios.get("/goods/getMyGoodsList").then((response) => {
          if (response.data.result.length >= 1) {
            this.hiddenGoods = false;
            this.showGoods = true;
          }
          this.myGoodsList = response.data.result;
        })
      },
      deleteMyGoods(goodsId) {
        axios.post("/goods/deleteMyGoods", {
          goodsId: goodsId
        }).then((response) => {
          this.$message({
            message: '删除商品成功！',
            type: 'success',
            duration: 1000
          });
          this.getMyGoodsList();
        })
      }
    }
  };

</script>
<style scoped>
  .image {
    width: 100%;
    display: block;
    height: 300px;
  }

  .notGoods {
    margin-top: 30px;
  }

  .hover {
    margin-top: 10px;
  }

  .hover:hover {
    border-left: 2px solid #ee7a2c;
    border-top: 1px solid #ee7a2c;
    color: #ee7a2c;
    transition: all .3s ease-out;
    padding-left: 10px;
  }

  .text-primary {
    text-decoration: none;
  }

</style>

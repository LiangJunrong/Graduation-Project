<template>
  <el-row>
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/MktIndex' }">二手市场</el-breadcrumb-item>
        <el-breadcrumb-item>商品详细</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <!-- 商品详情 -->
    <el-row>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <el-card>
          <img :src="'/static/goods-image/' + goodsDetail.goodsImage" class="image">
          <p>商品：
            <span class="text-primary">{{goodsDetail.goodsName}}</span>
          </p>
          <p>价格：
            <span class="price">￥{{goodsDetail.goodsPrice}}</span>
          </p>
          <p>商家：
            <span class="text-primary">{{goodsDetail.goodsCreaterName}}</span>
          </p>
          <p>时间：
            <span class="time">{{goodsDetail.goodsCreatetime}}</span>
          </p>
          <p>描述：
            <span class="text-warning">{{goodsDetail.goodsDescription}}
            </span>
          </p>
          <router-link :to="{path:'ContactsDetail', query:{'userId':goodsDetail.goodsCreaterId}}">
            <el-button type="primary" size="small" class="button">￥购买</el-button>
          </router-link>
          <el-badge :value="goodsCollectionerLength">
            <el-button type="primary" class="el-icon-star-off" size="small" @click="addCollection(goodsDetail._id)">收藏</el-button>
          </el-badge>
        </el-card>
      </el-col>
    </el-row>
    <!-- 评论商品 -->
    <el-card class="add-comment">
      <el-button type="primary open-dialog" @click="dialogFormVisible = true">你想说什么？</el-button>
      <el-dialog custom-class="create-comment" width="360px" :visible.sync="dialogFormVisible">
        <el-input type="textarea" placeholder="要留下什么爪迹呢？" :rows="5" v-model="commentText" @keyup.enter.native="CreateComment()"></el-input>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createComment()">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
    <hr>
    <!-- 评论区 -->
    <div class="comment">
      <p class="text-indent1">目前评论：
        <span v-text="commentLength" class="text-primary"></span>&nbsp;&nbsp;条</p>
      <el-card class="box-card" v-for="comment in goodsComments" :key="comment.id">

        <div class="clearfix">
          <p>用户：
            <span class="text-primary">{{comment.commentatorName}}</span>&nbsp;&nbsp;
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="see-user text-primary">
                  <router-link :to="{path:'ContactsDetail', query:{'userId':comment.commentatorId}}">
                    <el-button type="primary" size="small">
                      查看用户
                    </el-button>
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button v-if="userName == comment.commentatorName" type="danger" size="small" icon="el-icon-delete" @click="deletComment(comment._id)">
                    删 除
                  </el-button>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </p>
          <p>时间：
            <span class="time">{{comment.commentCreatetime}}</span>
          </p>
          <p>评论内容：
            <span class="text-success">{{comment.commentText}}</span>

          </p>
        </div>
      </el-card>
    </div>
  </el-row>
</template>
<script>
  import axios from 'axios'
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  export default {
    data() {
      return {
        currentDate: new Date(),
        goodsDetail: [],
        goodsId: '',
        dialogFormVisible: false,
        commentText: '',
        commentators: [],
        commentLength: '',
        goodsCollectionerLength: '',
        goodsComments: [],
        userName: ''
      };
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    mounted() {
      this.getGoodsDetail();
    },
    methods: {
      //获取商品详细信息
      getGoodsDetail() {
        this.userName = this.getCookies("userName");
        this.$store.commit("updateNavHeaderActiveIndex", "/MktIndex");
        this.goodsId = this.$route.query.goodsId;
        var param = {
          goodsId: this.goodsId
        };
        axios.get("/goods/getGoodsDetail", {
          params: param
        }).then((response) => {
          this.goodsDetail = response.data.result;
          this.commentLength = this.goodsDetail.goodsComments.length;
          this.goodsComments = this.goodsDetail.goodsComments.reverse();
          this.goodsCollectionerLength = this.goodsDetail.goodsCollectioners.length;
        })
      },
      //获取中文cookies
      getCookies(cookiename) {
        var value = document.cookie.match(new RegExp("(^| )" + cookiename + "=([^;]*)(;|$)"));
        return null != value ? decodeURIComponent(value[2]) : null;
      },
      //添加收藏
      addCollection(goodsId) {
        axios.post("/goods/addCollection", {
          goodsId: goodsId
        }).then((res) => {
          if (res.status == 200) {
            this.getGoodsDetail();
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
      // 创建评论
      createComment() {
        this.dialogFormVisible = false;
        axios.post("/goods/addGoodsComment", {
          commentText: this.commentText,
          goodsId: this.goodsDetail._id
        }).then((response) => {
          this.getGoodsDetail();
          this.commentText = '';
          this.$message({
            message: '发表评论成功！',
            type: 'success',
            duration: 1000
          });
        })
      },
      //删除评论
      deletComment(commentatorId) {
        axios.post("goods/deleteGoodsComment", {
          goodsId: this.$route.query.goodsId,
          commentatorId: commentatorId
        }).then((response) => {
          if (response.data.result == 'success') {
            this.getGoodsDetail();
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            });
          } else {
            this.getGoodsDetail();
            this.$message({
              message: '删除失败',
              type: 'success',
              duration: 1000
            });
          }
        })
      }
    },
    components: {
      NavBreadcrumb
    },
  }

</script>
<style scoped>
  .open-dialog {
    margin-top: 5px;
    margin-left: 5px;
  }

  .image {
    float: right;
    margin-top: 18px;
    width: 120px;
    height: 120px;
    border: 1px solid #ccc;
  }

  .text-indent1 span {
    font-size: 1.5em;
  }

  .see-user a {
    text-decoration: none;
  }

</style>

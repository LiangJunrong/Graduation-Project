<template>
  <el-row>
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{path:'OrgDetail', query:{'orgId':this.orgId}}">返回华懒</el-breadcrumb-item>
        <el-breadcrumb-item>{{topicComment.topicTitle}}</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <!-- 懒语详情 -->
    <el-row>
      <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">&nbsp;</el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card class="box-card">
          <div>
            <p>
              <router-link :to="{path:'ContactsDetail', query:{'userId':topicComment.topicCreaterId}}">
                <span class="text-primary">{{topicComment.topicCreaterName}}</span>
              </router-link>
              ：
              <span class="text-warning">{{topicComment.topicTitle}}</span>
            </p>
            <p>懒语：
              <span class="text-warning">{{topicComment.topicContent}}</span>
            </p>
            <p>时间：
              <span class="time">{{topicComment.topicCreatetime}}</span>
            </p>
            <p>点赞：
              <span v-if="isLiker">目前还没人点赞哦~</span>
              <el-tag v-for="user in topicComment.topicLike" :key="user.id">
                <router-link :to="{path:'ContactsDetail', query:{'userId':user.userId}}">
                  <span class="text-primary">{{user.userName}}</span>
                </router-link>
              </el-tag>
            </p>
            <el-badge :value="this.topicLike" class="item">
              <el-button size="small" type="primary" @click="addTopicLike(topicComment._id)">^_^</el-button>
            </el-badge>
            <!-- 评论商品 -->
            <el-button type="primary open-dialog" size="small" @click="dialogFormVisible = true">你想说什么？</el-button>
            <el-dialog custom-class="create-comment" width="360px" :visible.sync="dialogFormVisible">
              <el-input type="textarea" placeholder="要留下什么爪迹呢？" :rows="5" v-model="commentText" @keyup.enter.native="CreateComment()"></el-input>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="CreateComment()">确 定</el-button>
              </div>
            </el-dialog>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <img src="/static/organization-image/topicComment.jpg" alt="话题评论" class="img-responsive">
      </el-col>
    </el-row>
    <hr>
    <h3 class="text-indent1">评论
      <span v-text="topicCommentLength" class="text-primary"></span> 条</h3>
    <el-card v-for="(topicComment,index) in sortTopicComment" :key="topicComment.value">
      <h5>{{index+1}}楼
        <span>
          <span v-if="index+1 == 1">(发
            <el-button type="text" @click="dialogFormVisible = true">评论</el-button>，抢沙发)</span>
        </span>
      </h5>
      <p>懒人：
        <router-link :to="{path:'ContactsDetail', query:{'userId':topicComment.commentatorId}}">
          <span class="text-primary">{{topicComment.commentatorName}}</span>
        </router-link>
      </p>
      <p>时间：
        <span class="time">{{topicComment.commentCreatetime}}</span>
      </p>
      <p>懒回复：
        <span class="text-warning">{{topicComment.commentText}}</span>
      </p>
    </el-card>
  </el-row>
</template>
<script>
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  import axios from 'axios';
  export default {
    data() {
      return {
        orgId: '',
        topicId: '',
        commentText: '',
        topicComment: [],
        sortTopicComment: [],
        topicLike: '',
        topicCommentLength: '',
        dialogFormVisible: false,
        form: {
          name: '',
        },
        isLiker: false
      }
    },
    components: {
      NavBreadcrumb
    },
    mounted() {
      this.getTopicComment();
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      getTopicComment() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        this.orgId = this.$route.query.orgId;
        this.topicId = this.$route.query.topicId;
        var param = {
          orgId: this.orgId,
          topicId: this.topicId
        }
        axios.get("/clubs/getTopicComment", {
          params: param
        }).then((response) => {
          this.topicComment = response.data.result;
          this.sortTopicComment = this.topicComment.topicComment.reverse();
          this.topicLike = this.topicComment.topicLike.length;
          if (!this.topicLike) {
            this.isLiker = true;
          }
          this.topicCommentLength = this.topicComment.topicComment.length;
        })
      },
      //给话题点赞
      addTopicLike(topicId) {
        this.topicId = topicId;
        axios.post("/clubs/addTopicLike", {
          orgId: this.$route.query.orgId,
          topicId: topicId
        }).then((response) => {
          if (response.data.status == 0) {
            this.$message({
              message: '点过赞了哦~',
              type: 'warning',
              center: true
            });
          } else {
            this.getTopicComment();
            this.$message({
              message: '点赞成功~',
              type: 'success',
              center: true
            });
          }
        })
      },
      CreateComment() {
        this.dialogFormVisible = false;
        //传递商品ID和文本框内容
        axios.post("/clubs/addTopicComment", {
          commentText: this.commentText,
          topicId: this.topicComment._id
        }).then((response) => {
          this.$message({
            message: '发表评论成功！',
            type: 'success',
            duration: 1000
          });
          this.getTopicComment();
          this.commentText = '';
        })
      },
    }
  }

</script>

<template>
  <el-row>
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/OrgIndex' }">华懒广场</el-breadcrumb-item>
        <el-breadcrumb-item>{{orgDetail.clubName}}</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <!-- 华懒详情 -->
    <el-row>
      <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">&nbsp;</el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="text-warning">{{orgDetail.clubName}}</span>
            <router-link :to="{path:'MemberList', query:{'orgId':orgId}}">
              <el-button type="text" style="float: right; padding: 3px 0">成员列表</el-button>
            </router-link>
          </div>
          <div>
            <p class="text-indent1">公告：
              <span>{{orgDetail.clubDescription}}</span>
            </p>
            <p class="text-indent1">群主：
              <router-link :to="{path:'ContactsDetail', query:{'userId':orgDetail.clubCreaterId}}">
                <span class="text-primary">{{orgDetail.clubCreaterName}}</span>
              </router-link>
            </p>
            <p class="text-indent1">该华懒已经有
              <span>{{this.clubMenbers}}</span> 人参与.
              <el-tag class="tag" type="success" v-show="!isJoin">已关注&nbsp;&nbsp;&nbsp;&nbsp;</el-tag>
            </p>
            <p class="text-indent1" v-show="isJoin">
              <span>关注后才可以发表懒语哦~</span>
              <el-button type="text" @click="joinOrg()">关注</el-button>
            </p>
            <p class="text-indent1">
              参与各个华懒，贡献你的力量，让信息共享，让大家获得足不出户的便利吧！
            </p>
            <p class="text-indent1">
              <router-link to="/AddTopic">
                <el-button type="primary">
                  发起懒语
                </el-button>
              </router-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <img src="/static/organization-image/orgDetail.jpg" alt="华懒详情" class="image">
      </el-col>
    </el-row>
    <!-- 华懒懒语 -->
    <el-tabs type="border-card">
      <el-tab-pane label="华懒懒语">
        <!-- 无话题信息展示 -->
        <el-card v-if="!isTopics">
          <p>亲，还没话题</p>
          <p>赶紧抢占这个社区的沙发吧！</p>
          <router-link to="/AddTopic">
            <el-button type="primary">Let's Go!</el-button>
          </router-link>
        </el-card>
        <el-card v-if="isTopics" class="box-card" v-for="topic in sortOrgDetail" :key="topic.value">
          <p>懒题：
            <span class="text-warning">{{topic.topicTitle}}</span>
          </p>
          <p>懒人：
            <router-link :to="{path:'ContactsDetail', query:{'userId':topic.topicCreaterId}}">
              <span class="text-primary">{{topic.topicCreaterName}}</span>
            </router-link>
          </p>
          <p>时间：
            <span class="time">{{topic.topicCreatetime}}</span>
          </p>
          <p>懒语：
            <span class="text-warning">{{topic.topicContent}}</span>
          </p>
          <p>
            <el-badge :value="topic.topicLike.length" class="item">
              <el-button type="primary" size="small" @click="addTopicLike(topic._id)">^_^</el-button>
            </el-badge>
            <router-link :to="{path:'TopicComment', query:{'orgId':orgId,'topicId':topic._id}}">
              <el-badge :value="topic.topicComment.length" class="item">
                <el-button type="primary" size="small" icon="el-icon-edit-outline">评论</el-button>
              </el-badge>
            </router-link>
          </p>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>
<script>
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  import axios from "axios";
  export default {
    data() {
      return {
        orgId: '',
        topicId: '',
        orgDetail: [],
        sortOrgDetail: [],
        clubMenbers: '',
        isJoin: true,
        isTopics: true,
      }
    },
    components: {
      NavBreadcrumb
    },
    mounted() {
      this.getOrgDetail();
      this.userIsJoin();
    },
    methods: {
      //获取该华懒详情
      getOrgDetail() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        this.orgId = this.$route.query.orgId;
        var param = {
          orgId: this.orgId
        }
        axios.get("/clubs/getOrgDetail", {
          params: param
        }).then((response) => {
          this.orgDetail = response.data.result;
          this.sortOrgDetail = this.orgDetail.clubTopics.reverse();
          this.clubMenbers = this.orgDetail.clubMenbers.length;
          if (this.orgDetail.clubTopics.length == '0') {
            this.isTopics = false;
          } else {
            this.isTopics = true;
          }
        })
      },
      //加入该华懒
      joinOrg() {
        axios.post("/clubs/joinOrg", {
          orgId: this.$route.query.orgId
        }).then((response) => {
          this.isJoin = false;
          this.$message({
            message: '关注成功~',
            type: 'success'
          })
          this.getOrgDetail();
          this.userIsJoin();
        })
      },
      //判断用户是否已加入该华懒
      userIsJoin() {
        let param = {
          orgId: this.$route.query.orgId
        }
        axios.get("/clubs/isJoin", {
          params: param
        }).then((response) => {
          if (response.data.stauts == 1) {
            this.isJoin = false;
            this.getOrgDetail()
          } else {
            this.isJoin = true;
            this.getOrgDetail()
          }
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
            this.getOrgDetail();
            this.$message({
              message: '点赞成功~',
              type: 'success',
              center: true
            });
          }
        })
      }
    }
  }

</script>
<style scoped>
  .image {
    width: 100%;
  }

  .tag {
    margin-left: 1em;
  }

  .text-left {
    margin-left: 1em;
  }

</style>

<template>
  <el-row>
    <!-- 二手市场操作按钮 -->
    <el-card class="box-card organization-nav">
      <el-button-group>
        <router-link to="/AddTopic">
          <el-button type="primary" icon="el-icon-plus">发懒语</el-button>
        </router-link>
        <router-link to="/OrgIndex">
          <el-button type="primary">华懒广场</el-button>
        </router-link>
        <router-link to="/ContactsIndex">
          <el-badge :value="unreadMessages" class="item">
            <el-button type="primary">我的消息</el-button>
          </el-badge>
        </router-link>
      </el-button-group>
    </el-card>
    <!-- 其他按钮 -->
    <el-card class="box-card action">
      <router-link to="/ToDoList">
        <el-button type="primary">记事便签</el-button>
      </router-link>
      <router-link to="/GameIndex">
        <el-button type="primary">小小游戏</el-button>
      </router-link>
    </el-card>
    <!-- 无组织信息展示 -->
    <el-card v-if="!isClubs">
      <p>亲，还没组织吗？</p>
      <p>跟我去看看有没有啥有趣的组织适合你吧！</p>
      <router-link to="/OrgIndex">
        <el-button type="primary">
          Let's Go!
        </el-button>
      </router-link>
    </el-card>
    <!-- 未参加社团信息展示 -->
    <el-tabs type="border-card" class="organizationStyle" v-if="isClubs">
      <el-tab-pane v-for="userClub in userClubsInfoSort" :key="userClub.clubName" :label="userClub.clubName">
        <!-- 社团无话题展示 -->
        <el-card class="isNone" v-if="!userClub.clubTopics.length">
          <p>亲，该社团还没有话题哦~</p>
          <p>赶紧去看看发表懒语到这社区吧！</p>
        </el-card>

        <router-link :to="{path:'OrgDetail', query:{'orgId':userClub._id}}">
          <el-button type="primary" class="go-index">前往
            <span>{{userClub.clubName}}</span>
          </el-button>
        </router-link>
        <!-- 有社团的时候 -->
        <el-card class="box-card" v-if='userClub.clubTopics.length' v-for="clubTopics in userClub.clubTopics" :key="clubTopics.value">
          <p>
            懒人：
            <router-link :to="{path:'ContactsDetail', query:{'userId':clubTopics.topicCreaterId}}">
              <span class="text-primary">{{clubTopics.topicCreaterName}}</span>
            </router-link>
          </p>
          <p>时间：
            <span class="time">{{clubTopics.topicCreatetime}}</span>
          </p>

          <p>懒语：
            <span class="text-warning">{{clubTopics.topicContent}}</span>
          </p>
          <p>
            <el-badge :value="clubTopics.topicLike.length" class="item">
              <el-button size="small" type="primary" @click="addTopicLike(userClub._id, clubTopics._id)">^_^</el-button>
            </el-badge>
            <router-link :to="{path:'TopicComment', query:{'orgId':userClub._id,'topicId':clubTopics._id}}">
              <el-badge :value="clubTopics.topicComment.length" class="item">
                <el-button size="small" type="primary" icon="el-icon-edit-outline">评论</el-button>
              </el-badge>
            </router-link>
          </p>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        userInfo: [],
        userClubs: [],
        userClubsInfo: [],
        topicId: '',
        orgId: '',
        unreadMessages: '',
        isClubs: false,
        userClubsInfoSort:[],
      }
    },
    mounted() {
      this.getUserInfo();
      this.getAllUnreadMessages();
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      async getUserInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        let response = await axios.get('/users');
        this.userInfo = response.data.result;
        this.userClubs = this.userInfo.userClubs;
        if (this.userClubs.length == '0') {
          this.isClubs = false;
        } else {
          this.isClubs = true;
        }
        for (let i = 0; i < this.userClubs.length; i++) {
          let params = {
            orgId: this.userClubs[i]._id
          }
          let response = await axios.get('/clubs/getOrgDetail',{params});
          response.data.result.clubTopics.map((value,index) => {
            return Object.assign(value,{num:index})
          })
          let result = Object.assign({},response.data.result);
          this.$set(this.userClubsInfo, i, result);
        }
      },
      addTopicLike(orgId, topicId) {
        this.orgId = orgId;
        this.topicId = topicId;
        axios.post("/clubs/addTopicLike", {
          orgId: orgId,
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
      },
      getAllUnreadMessages() {
        axios.get("/users/getAllUnreadMessages").then((response) => {
          this.unreadMessages = response.data.result;
        })
      }
    },
    watch:{
      userClubsInfo:{
        handler(newVal){
          let arr = [];
          if(newVal.length === 3 && !this.userClubsInfoSort.length){
            arr = [...newVal];
            arr.forEach((value,index) => {
              value.clubTopics.length ? value.clubTopics.reverse() : [];
            })
            this.userClubsInfoSort = [...arr];
          } 
          else {
            this.userClubsInfoSort = [...newVal];
          }
        },
        deep:true
      }
    }
  }

</script>
<style>
  .organizationStyle {
    margin-top: 15px;
  }

  .go-index {
    margin-bottom: 15px;
  }

  .like {
    background: #409EFF;
    color: #fff;
  }

  .like:hover,
  .like:focus {
    background: #409EFF;
    color: #fff;
  }

  .dislike {
    background: rgb(243, 200, 6);
    color: rgb(255, 5, 5);
  }

  .dislike:hover,
  .dislike:focus {
    background: rgb(243, 200, 6);
    color: rgb(255, 5, 5);
  }
  .isNone {
    margin-bottom: 10px;
  }

</style>

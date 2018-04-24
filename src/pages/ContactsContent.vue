<template>
  <el-row>
    <el-row>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">&nbsp;</el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-button type="text" icon="el-icon-back" @click="goback()"></el-button>&nbsp;&nbsp;
            <span>{{userInfo.userName}}</span>
            <router-link :to="{path:'ContactsDetail', query:{'userId':userInfo._id}}">
              <el-button style="float: right" type="text">个人信息</el-button>
            </router-link>
          </div>
          <!-- 回复按钮 -->
          <div class="reply text-center">
            <el-button type="primary" size="medium" @click="dialogFormVisible = true" class="add-comment">吐&nbsp;&nbsp;槽</el-button>
            <el-dialog width="360px" title="私聊小伙伴" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="准备哔哔">
                  <el-input type="textarea" :rows="4" placeholder="你想表达什么吖？" v-model="form.content" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="reply()">确 定</el-button>
              </div>
            </el-dialog>
          </div>
          <!-- 回复内容 -->
          <div>
            <div class="text-center" v-if="!isChatContent">
              <p>你们还没有开始聊天哦~</p>
              <p>点下面按钮开始畅聊吧！</p>
            </div>
            <div class="discuss" v-if="isChatContent" v-for="chatContent in sortContactContent" :key="chatContent.value">
              <p class="text-center">-<span class="time">{{chatContent.createtime}}</span>-</p>
              <p>
                <router-link :to="{path:'ContactsDetail', query:{'userId':chatContent.createrId}}">
                  <span class="username">{{chatContent.createrName}}</span>：&nbsp;
                </router-link>
              </p>
              <p class="text-indent1">
                <span>{{chatContent.content}}</span>
              </p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <img src="/static/organization-image/contactsContent.jpg" alt="聊天内容" class="img-responsive">
      </el-col>
    </el-row>

  </el-row>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        userInfo: [],
        userContact: [],
        sortContactContent: [],
        userName: '',
        chatInfo: [],
        dialogFormVisible: false,
        form: {
          content: '',
        },
        isChatContent: false
      }
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    mounted() {
      this.getUserInfo();
      this.getChatInfo();
    },
    methods: {
      //获取用户信息
      getUserInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        let param = {
          userId: this.$route.query.userId
        };
        axios.get("/users/getUserInfo", {
          params: param
        }).then((response) => {
          this.userInfo = response.data.result;
          this.userName = this.userInfo.userName;
        })
      },
      //获取聊天信息
      getChatInfo() {
        let param = {
          userId: this.$route.query.userId
        }
        axios.get("/users/getChatInfo", {
          params: param
        }).then((response) => {
          this.userContact = response.data.result;
          this.sortContactContent = this.userContact.chatContent.reverse();
          if(this.userContact.chatContent.length > 0){
            this.isChatContent = true;
          } else {
            this.isChatContent = false;
          }
          this.getUserInfo();
        })
      },
      //回复
      reply() {
        this.dialogFormVisible = false
        axios.post("/users/reply", {
          content: this.form.content,
          userId: this.$route.query.userId,
          userName: this.userName
        }).then((response) => {
          this.$message({
            message: '私聊小伙伴成功~',
            type: 'success',
            duration: 500
          });
          this.form.content = '';
          this.getChatInfo();
        })
      },
      //后退
      goback() {
        this.$router.go(-1);
      }
    }
  }

</script>
<style scoped>
  .username {
    color: #409EFF;
  }

  .reply {
    border-bottom: 1px solid #ccc;
    padding-bottom: 13px;
  }

  .text-content {
    border-bottom: 1px solid #ccc;
  }
</style>

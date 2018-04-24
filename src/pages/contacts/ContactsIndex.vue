<template>
  <el-row>
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/MyOrgIndex' }">我的华懒</el-breadcrumb-item>
        <el-breadcrumb-item>我的信息</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <el-row>
      <el-col :xs="24" :sm="5" :md="5" :lg="5" :xl="5">&nbsp;</el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span v-if="!isUnread">你没有未读消息哦~</span>
            <span v-if="isUnread">你有
              <span class="text-info"> {{unreadMessages}} </span>条未读信息哦~</span>
          </div>
          <div class="contacts-list">
            <p>通讯列表：</p>
            <p v-for="contactsInfo in contactsInfos" :key="contactsInfo.value">
              &nbsp;&nbsp;&nbsp;&nbsp;<router-link :to="{path:'ContactsContent', query:{'userId':contactsInfo.userId}}">
                <el-badge :value="contactsInfo.unreadMessages">
                  <el-button type="text" @click="newsIsRead(contactsInfo.userId)">
                    {{contactsInfo.userName}}
                  </el-button>
                </el-badge>
              </router-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <img src="/static/organization-image/menberList.jpg" alt="联系人主页" class="img-responsive">
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
  import axios from 'axios';
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  export default {
    data() {
      return {
        contactsInfos: [],
        unreadMessages: '',
        isUnread: false
      }
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
    mounted() {
      this.getContactsInfo();
      this.getAllUnreadMessages();
    },
    methods: {
      getContactsInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        axios.get("/users/getContactsInfo").then((response) => {
          this.contactsInfos = response.data.result;
          //console.log(this.contactsInfo);
        })
      },
      getAllUnreadMessages() {
        axios.get("/users/getAllUnreadMessages").then((response) => {
          this.unreadMessages = response.data.result;
          if (this.unreadMessages != '0') {
            this.isUnread = true;
          } else {
            this.isUnread = false;
          }
        })
      },
      newsIsRead(userId) {
        axios.post("/users/newsIsRead", {
          userId: userId
        }).then((response) => {
          console.log(response.data.result);
        })
      }
    }
  }

</script>
<style scoped>
  .contacts-list a {
    text-decoration: none;
  }

  .text-info {
    color: #409EFF;
    font-size: 1.2em;
  }

</style>

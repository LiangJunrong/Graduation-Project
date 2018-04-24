<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9">
      &nbsp;
    </el-col>
    <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="4em" class="demo-ruleForm">
        <h3 class="text-center">请登录</h3>
        <p class="text-center">登录了才能做其他事哦~</p>
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" :plain="true">登录</el-button>
          <span v-if="isUserOrisPassword" class="text-danger">* 用户名或者密码错了哦~</span>
        </el-form-item>
        <el-form-item class="qqlink" v-show="isUserOrisPassword">
          <span class="text-danger">忘记账密？</span>&nbsp;&nbsp;
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1741020489&site=qq&menu=yes">→ 勾搭开发者</a>
        </el-form-item>
        <el-form-item>
          还没账号？&nbsp;&nbsp;
          <router-link to="/Register">
            <el-button type="text">→ 前往注册</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
  import axios from "axios"
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        isUserOrisPassword: false,
        ruleForm: {
          name: '',
          pass: '',
        },
        rules: {
          name: [{
              required: true,
              message: '请输入昵称',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 7,
              message: '长度在 2 到 7 个字符',
              trigger: 'blur'
            }
          ],
          pass: [{
            required: true,
            validator: validatePass,
            trigger: 'blur'
          }],
        }
      };
    },
    mounted() {
      this.getLoginInfo();
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      //给导航加活跃状态
      getLoginInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/UserIndex");
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post("/users/login", {
              name: this.ruleForm.name,
              pass: this.ruleForm.pass
            }).then((response) => {
              let res = response.data.result;
              if (res == "userName or userPassword error") {
                this.isUserOrisPassword = true;
                this.$message.error('用户名或者密码错了哦~');
              } else {
                //存数据到sessionstorage，导航守卫的时候用到
                sessionStorage.setItem("userName", res.userName);
                sessionStorage.setItem("userId", res._id);

                this.$message({
                  message: '欢迎回来华懒！',
                  type: 'success',
                  duration: 1000
                });

                //跳转的时候把导航组件的activeIndex改为首页
                this.$store.commit("updateNavHeaderActiveIndex", "/");
                //跳转到首页
                this.$router.push({
                  name: 'Index'
                });
              }
            });
          } else {
            return false;
          }
        });
      }
    }
  }

</script>
<style scoped>
  .demo-ruleForm {
    padding-right: 10px;
  }

  .qqlink a {
    text-decoration: none;
    color: #409EFF;
  }

  .text-danger {
    color: red;
  }
</style>

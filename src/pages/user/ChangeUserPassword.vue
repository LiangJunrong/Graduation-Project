<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <h3 class="text-center">修改密码</h3>
        <el-form-item label="原密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPass">
          <el-input type="password" v-model="ruleForm.newPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkNewPass">
          <el-input type="password" v-model="ruleForm.checkNewPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" :plain="true">确认修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkNewPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          newPass: '',
          checkNewPass: '',
        },
        rules: {
          pass: [{
            required: true,
            trigger: 'blur',
            message: '请输入原密码'
          }],
          newPass: [{
            required: true,
            validator: validatePass,
            trigger: 'blur'
          }],
          checkNewPass: [{
            required: true,
            validator: validatePass2,
            trigger: 'blur'
          }],
        }
      };
    },
    mounted() {
      this.getPassword();
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post("/users/changeUserPassword", {
              userPassword: this.ruleForm.newPass,
              userCheckNewPass: this.ruleForm.checkNewPass
            }).then((response) => {
              if (response.data.result == "success") {
                this.$message({
                  message: '成功修改密码',
                  type: 'success'
                })
                this.$router.push({
                  name: 'UserIndex'
                });
              } else {
                this.$message({
                  message: '修改密码失败',
                  type: 'warning'
                })
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getPassword() {
        this.$store.commit("updateNavHeaderActiveIndex", "/UserIndex");
        axios.get('/users').then((response) => {
          this.ruleForm.pass = response.data.result.userPassword;
        })
      }
    }
  }

</script>

<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="6em" class="demo-ruleForm">
        <h3 class="text-center">欢迎注册华懒~</h3>
        <el-form-item label="中文昵称" prop="name">
          <el-input v-model="ruleForm.name" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))"></el-input>
        </el-form-item>
        <el-form-item label="检测昵称">
          <el-button type="primary" round @click="checkUser()">检测</el-button>
          <span v-if="isUser">&nbsp;&nbsp;{{checkUserResult}}</span>
        </el-form-item>
        <el-form-item label="您的密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="所住楼区" prop="hostelArea">
          <el-select v-model="ruleForm.hostelArea" placeholder="请选择宿舍区">
            <el-option-group v-for="hostelsOne in hostels" :key="hostelsOne.id" :label="hostelsOne.hostelSex">
              <el-option v-for="hostelsTwo in hostelsOne.hostelArea" :key="hostelsTwo.id" :label="hostelsTwo.hostelName" :value="hostelsTwo.hostelName">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="宿舍房号" prop="hostelAddress">
          <el-input v-model="ruleForm.hostelAddress" placeholder="R413"></el-input>
        </el-form-item>
        <el-form-item label="您的性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="您的Q Q" prop="qq">
          <el-input v-model="ruleForm.qq" onkeyup="this.value=this.value.replace(/[^\d]/g,'')" onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" :plain="true">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <el-form-item>
          已有账号？&nbsp;&nbsp;
          <router-link to="/Login">
            <el-button type="text">→ 前往登录</el-button>
          </router-link>
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
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        hostels: [],
        isUser: '',
        checkUserResult: '',
        ruleForm: {
          name: '',
          pass: '',
          checkPass: '',
          hostelArea: '',
          hostelAddress: '',
          sex: '男',
          qq: ''
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
          checkPass: [{
            required: true,
            validator: validatePass2,
            trigger: 'blur'
          }],
          hostelArea: [{
            required: true,
            message: '请选择所住宿舍楼',
            trigger: 'change'
          }]
        }
      };
    },
    mounted() {
      this.getHostels();
      this.getRegisterHtml();
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      //设置导航活跃位置
      getRegisterHtml() {
        this.$store.commit("updateNavHeaderActiveIndex", "/UserIndex");
      },
      //提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //在user表登记用户
            axios.post("/users/register", {
              name: this.ruleForm.name,
              pass: this.ruleForm.pass,
              checkPass: this.ruleForm.checkPass,
              hostelArea: this.ruleForm.hostelArea,
              hostelAddress: this.ruleForm.hostelAddress,
              sex: this.ruleForm.sex,
              qq: this.ruleForm.qq
            }).then((response) => {
              if (response.data.result == "user-error") {
                this.$alert('该昵称被前面小伙伴注册了哦~', '注册失败~', {
                  confirmButtonText: '好吧',
                  center: true,
                  callback: action => {
                    this.$message({
                      type: 'primary',
                      message: '谢谢支持~',
                      center: true
                    });
                  }
                });
                return false;
              } else if (response.data.result == "password-error") {
                this.$alert('两个密码不一致!你要我存哪个密码呢~~~', '注册失败~', {
                  confirmButtonText: '收到',
                  center: true,
                  callback: action => {
                    this.$message({
                      type: 'primary',
                      message: '谢谢支持~',
                      center: true
                    });
                  }
                });
                return false;
              } else if (response.data.result == "error") {
                this.$alert('哇！你提交了个空表给我~致敬程序猿~', '注册失败~', {
                  confirmButtonText: '收到',
                  center: true,
                  callback: action => {
                    this.$message({
                      type: 'primary',
                      message: '谢谢支持~',
                      center: true
                    });
                  }
                });
                return false;
              } else {
                //在hostels表登记用户
                axios.post("/hostels/register", {
                  name: this.ruleForm.name,
                  hostelArea: this.ruleForm.hostelArea
                }).then((response) => {
                  this.$message({
                    message: '恭喜你，注册成功！',
                    type: 'success'
                  });
                  this.$router.push({
                    name: 'Login'
                  });
                });
              }
            });
          } else {
            return false;
          }
        });
      },
      //检测用户
      checkUser() {
        axios.post("/users/checkUser", {
          userName: this.ruleForm.name
        }).then((response) => {
          this.checkUserResult = response.data.result;
          if (this.checkUserResult) {
            this.isUser = true;
          }
        })
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //获取宿舍信息
      getHostels() {
        axios.get("/hostels").then((response) => {
          this.hostels = response.data.result;
        });
      }
    }
  }

</script>
<style>


</style>

<template>
  <el-row>
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/MyOrgIndex' }">我的华懒</el-breadcrumb-item>
        <el-breadcrumb-item>发起话题</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <el-row>
      <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
        &nbsp;
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            <h3 class="text-center text-primary">
              有趣的话题？
            </h3>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="6em" class="demo-ruleForm">
            <el-form-item label="发懒语到" prop="resource">
              <el-select v-model="ruleForm.organization" clearable placeholder="请选择">
                <el-option v-for="item in userClubs" :key="item.value" :label="item.clubName" :value="item.clubName">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="话题" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="description">
              <el-input type="textarea" v-model="ruleForm.description" @keyup.enter.native="submitForm('ruleForm')" :rows="3"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <img src="/static/organization-image/addTopic.jpg" alt="添加懒语" class="image">
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
        userClubs: [],
        ruleForm: {
          name: '',
          description: '',
          organization: '',
        },
        rules: {
          name: [{
              required: true,
              message: '请输入标题',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 7,
              message: '长度在 2 到 7 个字符',
              trigger: 'blur'
            }
          ],
          description: [{
              required: true,
              message: '请填写内容',
              trigger: 'blur'
            },
            {
              min: 7,
              max: 49,
              message: '长度在 7 到 49 个字符',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    components: {
      NavBreadcrumb
    },
    mounted() {
      this.getMyOrg();
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
            axios.post("/clubs/addTopic", {
              clubName: this.ruleForm.organization,
              topicTitle: this.ruleForm.name,
              topicContent: this.ruleForm.description
            }).then((response) => {
              this.$message({
                message: '发表懒语成功~',
                type: 'success'
              })
              window.history.go(-1);
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getMyOrg() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        axios.get("/users/getMyOrg").then((response) => {
          this.userClubs = response.data.result;
        })
      }
    }
  }

</script>
<style scoped>
  .image {
    width: 100%;
  }

</style>

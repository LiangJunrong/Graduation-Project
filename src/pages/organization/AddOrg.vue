<template>
  <el-row>
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/OrgIndex' }">华懒广场</el-breadcrumb-item>
        <el-breadcrumb-item>发起华懒</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <!-- 发起华懒表单 -->
    <el-row>
      <el-col :xs="24" :sm="5" :md="5" :lg="5" :xl="5">
        &nbsp;
      </el-col>
      <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
        <el-card>
          <div slot="header">
            <h3 class="text-center text-primary">进击的华懒</h3>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="6em" class="demo-ruleForm">
            <el-form-item label="华懒名称" prop="name">
              <el-input v-model="ruleForm.name" placeholder="限制2-6个字哦~"></el-input>
            </el-form-item>
            <el-form-item label="华懒描述" prop="description">
              <el-input type="textarea" v-model="ruleForm.description" placeholder="千言万语，细说你发起华懒的心思~" :rows=4></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">发起华懒</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
        <img src="/static/organization-image/addOrg.jpg" alt="进击的华懒" class="image">
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  import axios from 'axios'
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          description: ''
        },
        rules: {
          name: [{
              required: true,
              message: '请输入华懒名称',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 6,
              message: '名字限制2-6个字哦~',
              trigger: 'blur'
            }
          ],
          description: [{
              required: true,
              message: '简单的描述能吸引别人加入哦~',
              trigger: 'blur'
            },
            {
              min: 7,
              max: 49,
              message: '描述限7-49个字哦~',
              trigger: 'blur'
            }
          ]
        }
      };
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
      this.getAddOrg();
    },
    methods: {
      getAddOrg() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post("/clubs/addOrg", {
              clubName: this.ruleForm.name,
              clubDescription: this.ruleForm.description
            }).then((response) => {
              this.$message({
                message: '发起华懒成功~',
                type: 'success'
              })
              this.$router.push({
                name: 'OrgIndex'
              });
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>
<style scoped>
  .demo-ruleForm {
    padding-top: 30px;
  }

  .image {
    width: 100%;
  }

</style>

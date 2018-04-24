<template>
  <el-row>
    <!-- 面包屑导航 -->
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/MktIndex' }">二手市场</el-breadcrumb-item>
        <el-breadcrumb-item>发表商品</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <!-- 新增表单 -->
    <el-row :gutter="10">
      <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2">
        &nbsp;
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card>
          <div slot="header" class="text-center text-primary">
            <i class="el-icon-edit"></i> 转手又是一餐饭...</div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="6em">
            <el-form-item label="商品名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price">
              <el-input v-model="ruleForm.price" onkeyup="this.value=this.value.replace(/[^\d]/g,'')" onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "></el-input>
            </el-form-item>
            <el-form-item label="商品描述" prop="description">
              <el-input type="textarea" v-model="ruleForm.description"></el-input>
            </el-form-item>
            <el-form-item label="商品图片" prop="picture">
              <!-- :list-type：上传样式  action:请求的上传接口  :before-upload：请求前的图片格式和大小限制  :limit：图片个数限制  ：on-exeec：文件个数或定义超限行为  :onError：上传失败的回调  :onSuccess：上传成功的回调    :auto-upload：自动上传设置 -->
              <el-upload action="http://localhost:3000/goods/getFile" list-type="picture-card" enctype="multipart/form-data" :before-upload="beforePictureUpload">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">确定出售</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9">
        <el-card>
          <img class="img-responsive" src="/static/goods-image/addgood.jpg" alt="新增商品">
        </el-card>
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
          price: '',
          description: '',
        },
        rules: {
          name: [{
              required: true,
              message: '商品名称不能为空哦~',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 10,
              message: '名字限制2-10个字哦~',
              trigger: 'blur'
            }
          ],
          price: [{
              required: true,
              message: '没价格可不成哦~',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 10,
              message: '价格别太离谱哦~',
              trigger: 'blur'
            }
          ],
          description: [{
              required: true,
              message: '简单的描述能吸引客人哦~',
              trigger: 'blur'
            },
            {
              min: 7,
              max: 49,
              message: '描述限制为7~49噢！',
              trigger: 'blur'
            }
          ]
        }
      };
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    components: {
      NavBreadcrumb
    },
    mounted() {
      this.getAddNewGoodsInfo();
    },
    methods: {
      //给导航加活跃状态
      getAddNewGoodsInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MktIndex");
      },
      //上传文件前的限制
      beforePictureUpload(files) {
        const isJPG = files.type === 'image/jpeg';
        const isPNG = files.type === 'image/png';
        const isGIF = files.type === 'image/gif';
        const isLt5M = files.size / 1024 / 1024 < 5;
        if (!isJPG && !isPNG && !isGIF) {
          this.$message.error('上传的图片只能是 JPG/PNG/GIF 格式哦~');
        }
        if (!isLt5M) {
          this.$message.error('上传的图片大小不能超过 5MB 哦~');
        }
        return isJPG && isPNG && isGIF && isLt5M;
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post("goods/addNewGoods", {
              goodsName: this.ruleForm.name,
              goodsDescription: this.ruleForm.description,
              goodsPrice: this.ruleForm.price
            }).then((response) => {
              this.$message({
                message: '成功发表商品~',
                type: 'success'
              });
              this.$router.push({
                name: 'MktIndex'
              });
            })
          } else {
            return false;
          }
        });
      }
    }
  }

</script>
<style scoped>


</style>

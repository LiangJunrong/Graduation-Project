<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
      <el-card>
        <el-form label-width="80px" class="demo-ruleForm">
          <h3 class="text-center">修改个人信息</h3>
          <el-form-item label="昵称" prop="name">
            <el-input v-model="userInfo.userName"></el-input>
          </el-form-item>
          <el-form-item label="楼区" prop="region">
            <el-select v-model="userInfo.userHostelArea" placeholder="请选择宿舍区">
              <el-option-group v-for="hostelSex in hostels" :key="hostelSex.id" :label="hostelSex.hostelSex">
                <el-option v-for="hostelArea in hostelSex.hostelArea" :key="hostelArea.id" :label="hostelArea.hostelName" :value="hostelArea.hostelName">
                </el-option>
              </el-option-group>
            </el-select>
          </el-form-item>
          <el-form-item label="宿舍号" prop="room">
            <el-input v-model="userInfo.userHostelAddress"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="userInfo.userSex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="QQ" prop="phone">
            <el-input v-model="userInfo.userQQ"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('userInfo')" :plain="true">确认修改</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        userInfo: [],
        hostels: [],
      };
    },
    mounted() {
      this.getUserInfo();
      this.getDormitorys();
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      submitForm(formName) {
        axios.post("/users/changeUserInfo", {
          userName: this.userInfo.userName,
          userHostelArea: this.userInfo.userHostelArea,
          userHostelAddress: this.userInfo.userHostelAddress,
          userSex: this.userInfo.userSex,
          userQQ: this.userInfo.userQQ
        }).then((response) => {
          let res = response.data.result;
          this.$message({
            message: '修改个人信息成功！',
            type: 'success'
          })
          this.$router.push({
            name: 'UserIndex'
          });
        })
      },
      getUserInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/UserIndex");
        axios.get('/users').then((response) => {
          this.userInfo = response.data.result;
        })
      },
      getDormitorys() {
        axios.get('/hostels').then((response) => {
          this.hostels = response.data.result;
        })
      }
    }
  }

</script>

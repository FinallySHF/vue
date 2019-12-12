<template>
  <!--<div class="hello" style="background:url(/static/img/login_bg.png) no-repeat;background-size:100%;">-->
  <div class="hello" style="background:url(static/img/login_bg.png) no-repeat;background-size:100%;height: 100%">
    <div style="position: absolute;top: 20%;text-align: center;width: 100%;">
      <!--<img src="/assets/logo2.png" style="position: relative;top: -17px;">-->
    </div>
    <div class="formArea">
      <el-row id="loginForm">
        <el-row
          style="border-bottom: 1px solid #bbb;line-height: 50px;padding-left: 20px;font-size: 22px;color: #333;margin-bottom: 30px;">
          用户登录
        </el-row>
        <el-form ref="loginForm" :rules="loginRules" :model="loginForm" label-width="60px"
                 style="width: 90%;margin: 0 auto;">
          <el-form-item prop="userName">
            <i class="fa fa-user-circle-o" style="left: -50px;"></i>
            <el-input v-model="loginForm.userName" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <i class="el-icon-eleme"
               style="border: 2px solid #116eec;border-radius: 18px;box-sizing: border-box;left: -50px;"></i>
            <el-input :type="passWordVisible" v-model="loginForm.passWord" placeholder="密码"></el-input>
            <i class="fa fa-eye"
               style="position: absolute;top: 8px;right: 3px;color: #a9aaa9;cursor: pointer;font-size: 24px;"
               @click="changePwVisible"></i>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row style="padding: 0 20px;">
        <el-button type="primary" @click="handleLogin" style="width: 100%;background: #116eec;">登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      loginRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
      loginForm: {
        userName: '',
        passWord: '',
      },
      passWordVisible: 'passWord',
      passWordVisibleBtn: 'fa fa-eye',
    };
  },
  mounted() {
    const url = new URL(window.location.href);
    const userName = url.searchParams.get('userName');
    if (userName != null) {
      this.loginForm.userName = userName;
      this.handleLoginOutSys();
    }
    if (top.location !== self.location) {
      top.window.location.href = 'view/login/login.html';
    } else {
      this.showFlag = true;
    }
  },
  methods: {

    changePwVisible() {
      if (this.passWordVisible === 'passWord') {
        this.passWordVisible = 'input';
        this.passWordVisibleBtn = 'fa fa-eye-slash';
      } else {
        this.passWordVisible = 'passWord';
        this.passWordVisibleBtn = 'fa fa-eye';
      }
    },
    handleLogin() {
      const that = this;
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const param = {
            userName: that.loginForm.userName,
            userPassWord: that.loginForm.passWord,
          };
        }
      });
    },
    handleLoginOutSys() {
      const that = this;

      const param = {
        userName: this.loginForm.userName,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body{
    width: 100%;
    height: 100%;
  }


  .hello .formArea {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 60%;
    margin-top: -150px;
    left: 50%;
    margin-left: -200px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px #a6ded2;
    background: #fff;
  }

  .fa {
    position: absolute;
    font-size: 36px;
    color: #116eec;
    top: 3px;
    /*left: -50px;*/
    width: 40px;
    text-align: center;
  }

  .el-input input {
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
</style>

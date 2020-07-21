<template>
  <div class="login">
    <vue-particles
      color="#FFFFFF"
      :particleOpacity="0.5"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#FFFFFF"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="180"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
      style="height:100%"
    >
    </vue-particles>
    <!-- 登陆表单区域 -->
    <el-card class="login-card">
      <el-form label-width="0"
               ref="loginFormRef"
               :rules="LoginRules"
               :model="LoginForm"
               class="login-form">
        <h3 class="title">管理员登录</h3>

        <el-form-item class="username"
                      prop="username">
          <!-- 用户名 -->
          <el-input @keyup.native.enter="login"
                    v-model="LoginForm.username"
                    prefix-icon="el-icon-user-solid"
                    placeholder="用户名"></el-input>
        </el-form-item>

        <el-form-item class="password"
                      prop="password">
          <!-- 密码 -->
          <el-input @keyup.native.enter="login"
                    v-model.trim="LoginForm.password"
                    prefix-icon="el-icon-lock"
                    type="password"
                    placeholder="密码"
                   ></el-input>
          <div style="height:15px">&nbsp;<el-tag v-show="bigChar"
                    style="margin-left:20px">大写锁定已打开</el-tag>
          </div>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary"
                     @click="login()">登录</el-button>
          <el-button type="info"
                     @click="resetLoginForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
 
<script>
//导入网络请求
import { loginReq } from 'network/admin/login'

export default {
  name: 'Login',
  data () {
    let checkUsername = (rule, value, callback) => {
      const regUsername = /^[a-zA-Z][\w]{2,9}$/
      if (regUsername.test(value)) return callback()
      callback(new Error('请输入合法的用户名'))
    }

    let checkPassword = (rule, value, callback) => {
      const regPsw = /^[\w.]{6,15}$/
      if (regPsw.test(value)) return callback()
      callback(new Error('请输入合法的登录密码'))
    }

    return {
      //登陆表单的数据绑定对象
      LoginForm: {
        username: 'test',
        password: '123456'
      },
      //表单验证规则
      LoginRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            validator: checkUsername,
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入登录密码',
            trigger: 'blur'
          },
          {
            validator: checkPassword,
            trigger: 'blur'
          }
        ],
      },
      firstTochar: false,
      bigChar: false
    }
  },
  methods: {
    //点击按钮,重置表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {

      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return this.$message.error('请输入格式正确的用户名和密码')

        const res = await loginReq(this.LoginForm)
        if (!res) return

        this.$message.success('登录成功')
        // 保存token
        sessionStorage.setItem('token', res.data.token)
        // 跳转到main
        this.$router.push('/')

      })

    },
    loginKeyDown (event) {
      const _that = this;
      //是否输入过字母键，且判断是否按键为caps lock
      if (_that.firstTochar) {
        if (event.keyCode === 20) {
          _that.bigChar = !_that.bigChar;
          return;
        }
      }
      //未输入过字母键，或按键不是caps lock，判断每次最后输入的字符的大小写
      var e = event || window.event;
      var keyvalue = e.keyCode ? e.keyCode : e.which;
      var shifKey = e.shiftKey ? e.shiftKey : ((keyvalue == 16) ? true : false);
      if (typeof (_that.loginFrom.password) === 'undefined') {
        return;
      }
      var strlen = _that.loginFrom.password.length;
      var password = _that.loginFrom.password;

      if (strlen) {
        var uniCode = password.charCodeAt(strlen - 1);
        if (keyvalue >= 65 && keyvalue <= 90) {
          //如果是字母键                    
          _that.firstTochar = true;
          if (((uniCode >= 65 && uniCode <= 90) && !shifKey) || ((uniCode >= 97 && uniCode <= 122) && shifKey)) {
            _that.bigChar = true;
          } else {
            _that.bigChar = false;
          }
        }
      }
    },
  }
}

</script>
 
<style  scoped>
.title {
  font-size: 30px;
  width: 100%;
  text-align: center;
}
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/img/login/login.jpg") no-repeat 0 0;
  background-size: cover;
}
.login-card {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 30px;
  transform: translate(-50%, -50%);
  width: 25%;
  height: 30%;
  min-width: 400px;
  min-height: 230px;
  background: rgba(0, 0, 0, 0.199);
}
.btns {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 5;
}
.login-form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
}
.username,
.password {
  margin-bottom: 30px;
}
</style>
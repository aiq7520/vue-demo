<template>
  <div>
    <el-form :rules="rules" :model="user" ref="userForm">
      <el-form-item label="名字" prop="name">
        <el-input
          v-model="user.name"
          placeholder="请输入姓名"
          minlength="3"
          maxlength="17"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="user.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="出生年月" prop="birthday">
        <el-date-picker v-model="user.birthday" type="date" placeholder="出生年月" align="left"></el-date-picker>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio v-model="user.sex" label="男">男</el-radio>
        <el-radio v-model="user.sex" label="女">女</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('userForm')">提交</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserInput',
  data () {
    return {
      user: {
        name: '',
        age: '',
        sex: '男'
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 17, message: '长度在 3 到 17 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { type: 'number', message: '年龄必须为数字值' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 17, message: '长度在 6 到 17 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    if (this.$route.params.user) {
      this.user = this.$route.params.user
      console.log(this.$route.params.user)
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http
            .post('http://localhost:8081/users/', this.user)
            .then(response => {
              this.user = response.data
              this.$notify({
                title: '成功',
                message: '提交成功',
                type: 'success'
              })
            })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

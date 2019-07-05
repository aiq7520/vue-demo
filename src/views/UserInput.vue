<template>
  <div>
<el-form :rules="rules" :model="user" ref="userForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="名字" prop="name" >
    <el-input v-model="user.name"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model="user.age"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="onSubmit('userForm')">立即创建</el-button>
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
        age: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 17, message: '长度在 3 到 17 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请选择活动区域', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.user)
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

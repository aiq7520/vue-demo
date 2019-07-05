 <template>
 <div>
    <el-button type="primary" size ="small" @click="createUser" plain>新建</el-button>
    <el-button  type="danger"  size ="small" plain>删除</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" ></el-table-column>
      <el-table-column prop="age" label="年龄" ></el-table-column>
      <el-table-column prop="password" label="密码" ></el-table-column>
      <el-table-column prop="birthday" label="出生年月" ></el-table-column>
      <el-table-column prop="sex" label="性别" ></el-table-column>
    </el-table>
 </div>
  </template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.$http.get('http://localhost:8081/users/list').then(response => {
      // this.tableData = response.data
      console.log(response.data)
    })
  },
  methods: {
    createUser () {
      this.$router.push({ name: 'user-input' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

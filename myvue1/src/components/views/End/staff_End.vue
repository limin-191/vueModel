<template>
  <div>

    <div style="margin-top: 20px;">
      <el-input placeholder="请输入姓名" v-model="ryFactor.uName" clearable size="small" style="width:23%">
      </el-input>

      <el-input placeholder="请输入账号" v-model="ryFactor.uAcc" clearable size="small" style="width:23%;">
      </el-input>

      <el-select v-model="ryFactor.ryRole" slot="prepend" size="small" placeholder="请选择角色">
        <el-option label="请选择角色" value="0" selected></el-option>
        <el-option label="系统管理员" value="1"></el-option>
        <el-option label="房源发布员" value="2"></el-option>
        <el-option label="资质审核员" value="3"></el-option>
      </el-select>

      <el-select v-model="ryFactor.ryStatus" slot="prepend" size="small" placeholder="请选择状态">
        <el-option label="请选择状态" value="0" selected></el-option>
        <el-option label="启用" value="1"></el-option>
        <el-option label="禁用" value="2"></el-option>
        <el-option label="已删除" value="3"></el-option>
      </el-select>

      <el-button size="small" type="success" @click="ryEnquiry()" style="width: 85px;">查询</el-button>
      <el-button type="warning" size="small" @click="dialogFormVisible = true" style="width: 85px;">添加</el-button>
    </div>



    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;margin-top: 20px" :row-class-name="tableRowClassName">
      <el-table-column label="序号" prop="staffId" width="100%">
      </el-table-column>
      <el-table-column label="姓名" prop="staffName" width="100%">
      </el-table-column>
      </el-table-column>
      <el-table-column label="角色" prop="roleId" width="220px">
      </el-table-column>
      <el-table-column label="账号" prop="staffAcc" width="220px">
      </el-table-column>
      <el-table-column label="状态" prop="msgState" width="100%">
      </el-table-column>

      <!-- align="right" -->
      <el-table-column label="操作" style="width:20%;">
        <template slot-scope="scope" fixed="right">
          <!-- fixed="right"右侧按钮固定 -->
          <el-button size="mini" type="success" @click="handleModify(scope.$index, scope.row)">修改</el-button>
         <!-- <span v-if="msgState !='已删除'"> -->
            
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <!-- </span> -->
          <el-button size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)">修改密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="toal" :page-size="pageSize">
    </el-pagination>

    <!-- 添加弹窗 -->
    <el-dialog title="添加信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">

          <el-input v-model="form.name" autocomplete="off"></el-input>

        </el-form-item>

        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="form.role" placeholder="请选择角色" style="width:100%">
            <el-option label="请选择角色" value="0" selected></el-option>
            <el-option label="系统管理员" value="1"></el-option>
            <el-option label="房源发布员" value="2"></el-option>
            <el-option label="资质审核员" value="3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="账号" :label-width="formLabelWidth">

          <el-input v-model="form.acc" autocomplete="off"></el-input>

        </el-form-item>

        <el-form-item label="密码" :label-width="formLabelWidth">

          <el-input v-model="form.pwd" autocomplete="off"></el-input>

        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ryadd">确 定</el-button>
      </div>
    </el-dialog>


    <!-- 修改弹窗 -->
    <el-dialog title="修改信息" :visible.sync="dialogmodifyVisible">
      <el-form :model="modify">
        <el-form-item label="姓名" :label-width="formLabelWidth">

          <el-input v-model="modify.name" autocomplete="off"></el-input>

        </el-form-item>

        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="modify.role" placeholder="请选择角色" style="width:100%">
            <el-option label="请选择角色" value="0" selected></el-option>
            <el-option label="系统管理员" value="1"></el-option>
            <el-option label="房源发布员" value="2"></el-option>
            <el-option label="资质审核员" value="3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="账号" :label-width="formLabelWidth">

          <el-input v-model="modify.acc" autocomplete="off"></el-input>

        </el-form-item>

        <el-form-item label="密码" :label-width="formLabelWidth">

          <el-input v-model="modify.pwd" autocomplete="off"></el-input>

        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogmodifyVisible = false">取 消</el-button>
        <el-button type="primary" @click="rymodify">确 定</el-button>
      </div>
    </el-dialog>



  </div>
</template>处理中心
我的工作台


<script>
  export default {
    data() {
      return {
        // 多条件查询条件绑定
        ryFactor: {
          uName: '',
          uAcc: '',
          ryRole: '0',
          ryStatus: '0',
        },
        pageSize: 4, //每行条数
        toal: 20, //总数
        tableData: [], //查询表格承接数组（用于显示表格）

        search: '',

        dialogFormVisible: false, //添加弹窗显示状态
        // 添加绑定数据
        form: {
          name: '',
          role: '0',
          acc: '',
          pwd: '',
        },
        formLabelWidth: '120px',

        dialogmodifyVisible: false, //修改弹窗显示状态

        modify: {
          name: '',
          role: '',
          acc: '',
          pwd: '',
        },

        modifyId: 0,
      }
    },

    methods: {
      /* 人员查询 */
      ryEnquiry() {
        var that = this;
        var data = new URLSearchParams(); //建立URLSearchParams容器
        data.append("staffName", this.ryFactor.uName);
        data.append("staffAcc", this.ryFactor.uAcc);
        data.append("roleId", this.ryFactor.ryRole);
        data.append("msgState", this.ryFactor.ryStatus);
        this.$axios.post("admin/seStaff", data)

          .then((res) => {

            if (res.data != null) {
              that.tableData = res.data;

              for (var i = 0; i < that.tableData.length; i++) {

                if (that.tableData[i].roleId === 1) {
                  that.tableData[i].roleId = "系统管理员"
                } else if (that.tableData[i].roleId === 2) {
                  that.tableData[i].roleId = "房源发布员"
                } else if (that.tableData[i].roleId === 3) {
                  that.tableData[i].roleId = "资质审核员"
                };

                if (that.tableData[i].msgState === 1) {
                  console.log(that.tableData[i].msgState)
                  that.tableData[i].msgState = "启用"
                } else if (that.tableData[i].msgState === 2) {
                  that.tableData[i].msgState = "禁用"
                } else if (that.tableData[i].msgState === 3) {
                  that.tableData[i].msgState = "已删除"
                };
              };

              this.$message({
                message: '查询成功!',
                type: 'success'
              });

            } else {
              that.$message({
                message: '查询失败！',
                type: 'warning'
              });

            }
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            this.$message.error("服务器有误!稍后联系管理员！");
          });
      },

      // 人员添加
      ryadd() {
        var that = this;
        var data = new URLSearchParams();
        data.append("name", this.form.name);
        data.append("role", this.form.role);
        data.append("acc", this.form.acc);
        data.append("pwd", this.form.pwd);
        this.$axios.post("admin/addStaff", data)


          .then((res) => {
            if (res.data > 0) {
              that.$message({
                message: '添加成功！',
                type: 'success'
              });
              this.dialogFormVisible = false
             this.ryEnquiry();
            } else {
              that.$message({
                message: '添加失败！',
                type: 'warning'
              });
            };
          })
          .catch((err) => {
            this.$message.error("服务器有误!稍后联系管理员！");
          });
      },

      //修改显示
      handleModify(index, row) {
        this.dialogmodifyVisible = true;
        console.log(index, row);
        this.modify.name = row.staffName;
        this.modify.role = row.roleId;
        this.modify.acc = row.staffAcc;
        this.modify.pwd = row.staffPwd;
        this.modifyId = row.staffId;
      },

      //修改
      rymodify() {

        this.$confirm('此操作将修改, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  var that = this;
                   var data = new URLSearchParams();
                   data.append("id", this.modifyId);
                   data.append("name", this.modify.name);
                  if (this.modify.role=="系统管理员") {
                    data.append("role",1);
                  } else if (this.modify.role=="房源发布员") {
                     data.append("role",2);
                  } else if (this.modify.role=="资质审核员") {
                     data.append("role",3);
                  };

                  if (this.modify.role==1) {
                    data.append("role",1);
                  } else if (this.modify.role==2) {
                     data.append("role",2);
                  } else if (this.modify.role==3) {
                     data.append("role",3);
                  };

                   data.append("acc", this.modify.acc);
                   data.append("pwd", this.modify.pwd);
                   this.$axios.post("admin/upStaff", data)

                     .then((res) => {
                       if (res.data > 0) {
                         that.$message({
                           message: '修改成功！',
                           type: 'success'
                         });
                         that.dialogmodifyVisible = false
                         this.ryEnquiry();
                       } else {
                         that.$message({
                           message: '修改失败！',
                           type: 'warning'
                         });
                       };
                     })
                     .catch((err) => {
                       this.$message.error("服务器有误!稍后联系管理员！");
                     });
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消修改'
                  });
                });
      },


      // 删除
      handleDelete(index, row) {
         console.log(index, row);

                 this.$confirm('此操作删除, 是否继续?', '提示', {
                   confirmButtonText: '确定',
                   cancelButtonText: '取消',
                   type: 'warning',
                 }).then(() => {

                   this.modifyId = row.staffId;
                   var that = this;
                   var data = new URLSearchParams();
                   data.append("id", this.modifyId);
                   data.append("state", this.msgState);
                   this.$axios.post("admin/deStaff", data)

                     .then((res) => {
                       if (res.data > 0) {
                         that.$message({
                           message: '删除成功！',
                           type: 'success'
                         });
                         this.ryEnquiry();  //刷新页面
                       } else {
                         that.$message({
                           message: '删除失败！',
                           type: 'warning'
                         });
                       };
                     })
                     .catch((err) => {
                       this.$message.error("服务器有误!稍后联系管理员！");
                     });
                 }).catch(() => {
                   this.$message({
                     type: 'info',
                     message: '已取消删除'
                   });
                 });
      },


      //表格中背景渲染（调用）方法
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex % 2 === 0) {
          return 'warning-row';
        } else {
          return 'success-row';
        }
      }
    },

    // mounted:{
    //   this.ryEnquiry();
    // },

    watch: {

    }
  }
</script>

<style>
  .el-table .warning-row {
    background: greenyellow;
  }

  .el-table .success-row {
    background: gray;
  }
</style>

<template>
	<div>
		<el-container>
		    <el-form v-model="myform" class="demo-form-inline"
		      style="width: 50%; height: 500; border: 1px solid silver; margin: 0 auto;">
		      <h1>后 台 登 录</h1>
		      <el-form-item label="用户名:" style="margin-top: 30px; margin-left: 30px;">
		        <el-input style="width: 300px;  " v-model="myform.uname" placeholder="用户名不为空"></el-input>
		      </el-form-item>
		      <el-form-item label="密  码" style="margin-top: 30px; margin-left: 30px;">
		        <el-input style="width: 300px; " v-model="myform.upwd" placeholder="密码不能小于6位"></el-input>
		      </el-form-item>
		      <el-form-item>
		        <el-button type="primary" @click="onSubmit">登 录</el-button>
		        <el-button type="success">取 消</el-button>
		      </el-form-item>
		    </el-form>

		  </el-container>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				myform: {
				  uname:'jx2201',
				  upwd: '123'
				},
			}
		},
		methods:{
      onSubmit: function() {
          console.log(this.$data.myform.uname)

          this.$http({
              url: 'admin/doLogin',
              method: 'post',
              headers: {
                "Content-Type": "multipart/form-data"
              },
              data: {
                acc: this.$data.myform.uname,
                uPwd: this.$data.myform.upwd

              },
            })
            .then(function(response) {

              if (response.data != null) {
                // this.$message({
                //   message: '登入成功！',
                //   type: 'success'
                // });
                alert("登入成功!")
                // this.$router.push({ path: "/homeEnd"});
              } else {
                // this.$message({
                //   message: '登入失败！',
                //   type: 'warning'
                // });
                alert("登入失败!")
              }
              console.log(response);
            })
          // .catch(function(err) {
          //   console.log(err);
          //   this.$message.error("服务器有误!稍后联系管理员！");
          // });


          // //验证 admin 123  --backmanage  , 否则提示失败
          // //console.log(this.formInline.user)
          // if (this.myform.uname != null && this.myform.upwd != null) {
          // //跳转
          // alert(this.$route.history);
          // // ? router对象。。。

          // this.$router.replace("/backManage")
          // 重定向
          // push ： 跳到某一个路径下

          // }
        },

			instHome(){
				this.$router.push("/homeEnd")
			}
		},
	}
</script>

<style>
	@import url("../../../../static/css/Work2_2.css");
</style>

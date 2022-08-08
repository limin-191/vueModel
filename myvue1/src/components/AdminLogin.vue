<template>
	<el-container  >

		<el-form  v-model="myform"  class="demo-form-inline"
		style="width: 50%; height: 500; border: 1px solid red; margin: 0 auto;">
		<h1>后  台  登  录</h1>
		    <el-form-item label="用户名:" style="margin-top: 30px; margin-left: 30px;">
		      <el-input style="width: 300px;  " v-model="myform.uname"   placeholder="用户名不为空"></el-input>
		    </el-form-item>
		     <el-form-item label="密  码" style="margin-top: 30px; margin-left: 30px;">
		       <el-input  style="width: 300px; " v-model="myform.upwd"  placeholder="密码不能小于6位"></el-input>
		     </el-form-item>
		    <el-form-item>
		      <el-button type="primary" @click="onSubmit">登 录</el-button>
			   <el-button type="success" >取 消</el-button>
		    </el-form-item>
		  </el-form>


	</el-container>
</template>

<script>
	export default{

		data(){
			return {
				myform:{
					uname:'admin',
					upwd:'123'
				},


			}
		},
		mounted () {
		    // this.$axios.get('./axios-json.json')
		    //   .then(response => (this.info = response.data.sites))
		    //   .catch(function (error) { // 请求失败处理
		    //     console.log(error);
		    //   });
		  },
		methods:{
			onSubmit:function(){
      // this.$axios.get('url',{params}).then(function(redata){   })

        console.log(11)
        console.log(this.$data.myform.uname);
        this.$axios({
          url:'admin/doLogin',
          method:'post',
          headers:{"Content-Type": "multipart/form-data"},
          data:{
            uname:this.$data.myform.uname,
            upwd:this.$data.myform.upwd
          }
        })
        .then(function(response){
          console.log(response.data)
        })

			//	console.log(this.$data.myform.uname);

				// //验证 admin 123  --backmanage  , 否则提示失败
				// //console.log(this.formInline.user)
				// if(this.myform.uname == 'admin' && this.myform.upwd=='123'){
				// 	//跳转
				// 	alert(this.$route.history);
				// 	// ? router对象。。。
				// 	//this.$router.push("/backManage")
				// 	this.$router.replace("/backManage")
				// 	// 重定向
				// 	 // push ： 跳到某一个路径下


				// }else{
				// 	alert('登录失败!')
				// }
			}
		}

	}
</script>

<style>
</style>

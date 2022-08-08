<template>
	<div>
		<div class="Bigframe" >
		    <div class="frame_1">
		        <div class="x-text">
		            <span >扫码登录</span>
		            <span style="margin-left: 75px">|</span>
		            <span style="margin-left: 75px">账号登录</span>
		        </div>
		        <div style="height:250px">
		
		            <input class="iuptxt" type="text" name="uName" placeholder="账号／邮箱／手机号">
		
		            <input style="margin-top: 8px" class="iuptxt" name="uPwd" type="text" placeholder="密码">
		
		            <!--<div class="o-text">-->
		                <!--<form action="<%=basePath%>backstagelogin" method="get">-->
		                    <!--<img alt="点击更换验证码"  class="yanz" src="<%=basePath%>servlet" id="img" @click="reloadImg()">-->
		                <!--</form>-->
		            <!--</div>-->
		
		            <div>
		                <input class="u-text" type="submit" v-model="deru" value="登录">
		            </div>
		
		            <div class="g-text">
		             <span style="margin-left: 32px" @click="userReg">
		                 用户注册
		             </span>
		                <span style="margin-left: 75px">|</span>
		                <span style="margin-left: 75px">忘记密码？</span>
		            </div>
		
		        </div>
		        <hr style="width: 360px ;margin-top: 55px">
		        <div class="i-tsxt">
		            <span style="color: black">京东每日服务时间详见</span>
		            <span style="margin-left: 5px ;color: blue">《京东购物须知》。</span>
		
		        </div>
		    </div>
		
		
		
		</div>
		
		
		
		
		<div class="tail">
		    <div>
		        <span>版权所有©2008-2021</span>&nbsp; &nbsp; &nbsp; &nbsp;
		        <span>中国阿里巴巴集团有限公司</span>
		    </div>
		
		    <div style="padding-top: 20px">
		        <span>京ICP备05020493号-4</span>&nbsp; &nbsp; &nbsp; &nbsp;
		        <span>|</span>&nbsp; &nbsp; &nbsp; &nbsp;
		        <span>ICP证：京B2-20202537</span>
		    </div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				uName:'',
				uPwd:'',
			};
		},
		methods:{
			userReg(){
				this.$router.push("/register") //跳转页面
			},
			deru(){
				
			},
		},
	}
</script>

<style>
	@import url("../../../static/css/Work2_2.css");
</style>
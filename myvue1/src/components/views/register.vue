<template>
	<div>
		<div class="Bigframe" >
		
		    <div class="frame_1">
		
		        <div class="x-text">
		            <span style="margin:0px 0 0 88px">京东商城用户注册</span>
		        </div>
		        <div style="height:250px">
		            <input class="iuptxt" type="text" name="acc" placeholder="账号">
		
		            <input style="margin-top: 8px" class="iuptxt" type="text" name="pwd" placeholder="密码">
		
		
		            <div class="o-text1">
		                <input class="iuptxt" type="text" name="Mailboxes" placeholder="邮箱">
		                <input style="margin-top: 8px" class="iuptxt" type="text" name="phone" placeholder="电话号码">
		                <input style="margin-top: 8px" class="iuptxt" type="text" name="uName" placeholder="用户姓名">
		                <input style="margin-top: 8px" class="iuptxt" type="text"  name="sName" placeholder="用户网名">
		            </div>
		
		
		
		            <div>
		                <input class="u-text1" type="submit" value="注册">
		            </div>
		
		
		            <div class="g-text">
		             <span style="margin-left: 32px" @click="userLogin"> 
		                 用户登入
		             </span>
		                <span style="margin-left: 75px">|</span>
		                <span style="margin-left: 75px">忘记密码？</span>
		            </div>
		
		        </div>
		        <hr style="width: 360px ;margin-top: 55px">
		        <div class="i-tsxt">
		            <span style="color: black">京东每日服务时间详见</span>
		            <span style="margin-left: 5px ;color: blue">《京东网上购物须知》。</span>
		
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
		methods:{
			userLogin(){
				this.$router.push("/login") //跳转页面
			}
		},
	}
</script>

<style>
	@import url("../../../static/css/Work2_2.css");
</style>
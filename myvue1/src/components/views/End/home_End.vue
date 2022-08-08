<template>
	<div>
		<el-col :span="24">
			<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
				background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-menu-item index="1">处理中心</el-menu-item>
				<el-submenu index="2">
					<template slot="title">我的工作台</template>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
					<el-menu-item index="2-3">选项3</el-menu-item>
					<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项1</el-menu-item>
						<el-menu-item index="2-4-2">选项2</el-menu-item>
						<el-menu-item index="2-4-3">选项3</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="3" disabled>消息中心</el-menu-item>
				<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
			</el-menu>
		</el-col>

		<el-col :span="24">

			<el-col :span="6">
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
					background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span>
								我的管理
							</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">

                <router-link to="/staffEnd">用户管理</router-link>
							</el-menu-item>
							<el-menu-item index="1-2">
								菜单管理
							</el-menu-item>
							<el-menu-item index="1-3">
								<router-link to="/roleMagEnd">角色管理</router-link>
							</el-menu-item>
							<el-menu-item index="1-4">
								<router-link to="/accessEnd">角色分配权限</router-link>
							</el-menu-item>
						</el-menu-item-group>

					</el-submenu>
				</el-menu>


			</el-col>

			<el-col :span="18">

				<router-view></router-view>
			</el-col>

		</el-col>
	</div>
</template>

<script>
  // import hearder from'../hearderView.vue'
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
    components:{
      // hearder
    },
	}
</script>

<style>
</style>

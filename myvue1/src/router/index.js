//配置路由相关信息
// 引入\vue包 \router包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2.vue应用router
Vue.use(VueRouter)

import login from '../components/views/login.vue'
// import home from '../components/home.vue'
import register from '../components/views/register.vue'


// 后端：
import loginEnd from '../components/views/End/login_End'   /* 后端登录界面 */
import homeEnd from '../components/views/End/home_End'         /* 后端主界面 */
import roleMagEnd from '../components/views/End/roleMag_End'         /* 后端角色管理界面 */
import accessEnd from '../components/views/End/access_End'         /* 后端权限管理界面 */
import staffEnd from '../components/views/End/staff_End'         /* 后端权限管理界面 */
const pats = [
	{
		path:'/',
		redirect:'/homeEnd'
	},
	{
		path: '/login',
		component: login
	},
	{
		path: '/register',
		component: register
	},


	// 后端（path：跳转界面路经。component:组件）
	{
		path: '/loginEnd',    /* 后端登录界面 */
		component: loginEnd
	},
	{
		path: '/homeEnd',       /* 后端主界面 */
		component: homeEnd,

		/* 嵌套router*/
		children:[
      {
      	path:'/staffEnd',    /* 后端权限管理 */
      	component:staffEnd,
      },
			{
				path:'/roleMagEnd',    /* 后端角色管理 */
				component:roleMagEnd,
				// props: true
			},
			{
				path:'/accessEnd',    /* 后端权限管理 */
				component:accessEnd,
			},
		],
	},
]

// 3.创建路由
const router = new VueRouter({
	routes:pats
})

// 4.封装给外部使用对象引用
export default router

<template>
  <!-- 页面头部内容 -->
  <div style="width: 100%; height: 100%">
    <!-- logo -->
    <div class="current_div" style="margin-left: 150px">
      <router-link to="/">
        <el-image
          class="logo"
          style="width: 100%; height: 100%"
          :src="url"
          :fit="fits"
        >
        </el-image>
      </router-link>
    </div>
    <!-- 城市定位 -->
    <div
      id="container"
      class="current_div"
      style="text-color: #fff; line-height: 60px"
    >
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-location" style="color: #ffd04b"></i>
          {{ cityName }}[城市选择]
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="厦门市">厦门市</el-dropdown-item>
          <el-dropdown-item command="泉州市">泉州市</el-dropdown-item>
          <el-dropdown-item command="漳州市">漳州市</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 导航 -->
    <div class="current_div" style="width: 450px; margin-left: 100px">
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <el-link :underline="false">首页</el-link>
        </el-menu-item>
        <el-menu-item index="2">
          <el-link :underline="false">职位</el-link>
        </el-menu-item>
        <el-menu-item index="3">
          <el-link :underline="false">公司</el-link>
        </el-menu-item>
        <el-menu-item index="4">
          <el-link :underline="false"
            >校园招聘<span class="tips-new">hot</span></el-link
          >
        </el-menu-item>
        <el-menu-item index="5">
          <el-link :underline="false"
            >课程<span class="tips-new">hot</span></el-link
          >
        </el-menu-item>
      </el-menu>
    </div>
    <!-- login区域 -->
    <!-- 未登入 -->
    <div v-show="notLogin" class="current_div" style="width: 350px">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">登入</el-menu-item>
        <el-menu-item index="2">注册</el-menu-item>
        <el-menu-item index="3">
          <el-link :underline="false">
            {{ frontversion }}
          </el-link>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 已登入 -->
    <div v-show="inLogin" class="current_div" style="width: 350px">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect3"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">头像</el-menu-item>
        <!-- <el-menu-item index="2">个人中心</el-menu-item> -->
        <el-submenu index="2">
          <template slot="title">个人中心</template>
          <el-menu-item index="2-1">基础信息</el-menu-item>
          <el-menu-item index="2-2">我的简历</el-menu-item>
          <el-menu-item index="2-3">求职反馈</el-menu-item>
          <el-menu-item index="2-4">收藏</el-menu-item>
          <el-menu-item index="2-5">退出</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <el-link :underline="false">
            {{ frontversion }}
          </el-link>
        </el-menu-item>
      </el-menu>
    </div>
    <el-button @click="tiaozhuan">聊天</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: "fill",
      url: "../",
      activeIndex1: "",
      activeIndex2: "",
      frontversion: "进入企业版",
      cityName: "厦门市",
      notLogin: true,
      inLogin: false,
    };
  },
  methods: {
    // 导航跳转
    handleSelect1(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1":
          this.$router.push("/");
          break;
        case "2":
          this.$router.push("/positionPage");
          break;
        case "3":
          this.$router.push("/companyPage");
          break;
        case "4":
          this.$router.push("/campusPage");
          break;
        case "5":
          this.$router.push("/curriculumPage");
          break;
      }
    },
    // 未登入跳转栏
    handleSelect2(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1":
          this.$router.push("/userLoginPage");
          break;
        case "2":
          this.$router.push("/userRegisterPage");
          break;
        case "3":
          this.$router.push("/companyLoginPage");
          // this.frontversion="进入用户版本";
          break;
      }
    },
    // 已登入跳转栏-个人中心
    handleSelect3(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "2-1": //个人基础信息
          this.$router.push("/userLoginPage");
          break;
        case "2-2": //用户简历
          this.$router.push("/userRegisterPage");
          break;
        case "2-3": //求职反馈
          this.$router.push("/companyLoginPage");
          break;
        case "2-4": //收藏
          this.$router.push("/companyLoginPage");
          break;
        case "2-5": //退出登入
          this.inLogin = false;
          this.notLogin = true;
          break;
      }
    },
    // 城市选择变更
    handleCommand(command) {
      // this.$message("click on item " + command);
      this.cityName = command;
    },
    tiaozhuan() {
      // this.notLogin = false;
      // this.inLogin = true;
      this.$router.push("/websocket");
    },
  },
};
</script>

<style>
.current_div {
  width: 150px;
  height: 100%;
  float: left;
}

/* header */
.el-dropdown-link {
  cursor: pointer;
  color: #e9eef3;
}
.el-icon-arrow-down {
  font-size: 12px;
}

/* 热门tips */
.tips-new {
  position: absolute;
  top: 7px;
  right: -21px;
  width: 29px;
  height: 18px;
  line-height: 16px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  background: #ff7452;
  border-radius: 9px;
  z-index: 1;
}
</style>
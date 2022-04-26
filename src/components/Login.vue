<template>
	<div id="Login">
		<form action="#" class="login-from">
			<h1>登录</h1>
			<!-- 用户名输入 -->
			<div class="txtb" :style="{'--width': widVar}">
				<el-input @focus="fo()" @blur="bl()" v-model="username" placeholder="用户名" clearable prefix-icon="el-icon-user-solid"></el-input>
				<br>
			</div>
			<!-- 密码输入 -->
			<div class="txtb" :style="{'--width': widVar}">
				<el-input  @focus="fo()" @blur="bl()" v-model="password" placeholder="密码" show-password prefix-icon="el-icon-key"></el-input>
				<br>
			</div>
			<!-- 提交 -->
			
			<input type="submit" class="logbtn" value="登录">
			<div class="bottom-text">
				<span>没有账号? <router-link to="/SignIn">注册</router-link></span>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        username: '',
			password: '',
			widVar: "0%",
	      }
	    },
		methods: {
			fo(){
				this.widVar='100%'
			},
			bl(){
				this.widVar='0%'
			}
		}
	  
	}
</script>

<style>
	@import "../assets/css/Login.css";
</style>
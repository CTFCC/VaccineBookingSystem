<template>
	<div>
		<form action="" class="sign-in-from">
			<h1>注册</h1>
			<!-- 新建用户名 -->
			<div class="txta" :style="{'--width': widVar}">
				<el-input  @focus="fo()" @blur="bl()" v-model="username" placeholder="设置用户名" clearable prefix-icon="el-icon-user-solid"></el-input>
				<br>
			</div>
			
			<!-- 新建密码 -->
			<div class="txta" :style="{'--width': widVar}">
				<el-input @focus="fo()" @blur="bl()" v-model="password" placeholder="设置登录密码" show-password prefix-icon="el-icon-lock"></el-input>
				<br>
			</div>
			
			<!-- 确认密码 -->
			<div class="txta" :style="{'--width': widVar}">
				<el-input @focus="fo()" @blur="bl()" v-model="surePassword" placeholder="再次输入登陆密码" show-password prefix-icon="el-icon-lock"></el-input>
				<br>
			</div>
			
			<!-- 联系电话 -->
			<div class="txta" :style="{'--width': widVar}">
				<el-input @focus="fo()" @blur="bl()" v-model="telephone" placeholder="请输入联系电话"  prefix-icon="el-icon-mobile-phone"></el-input>
				<br>
			</div>
			
			<!-- 电子邮箱 -->
			<div class="txta" :style="{'--width': widVar}">
				<el-input @focus="fo()" @blur="bl()" v-model="email" placeholder="请输入电子邮箱" prefix-icon="el-icon-message"></el-input>
				<br>
			</div>
			<div>
				<!-- 提交 -->
				<input type="submit" class="signbtn" value="提交">
				<input type="reset" class="signres" value="重置">
			</div>
			
			
			<div class="bottom-text">
				<span>已经有账号了？ <router-link to="/Login">登录</router-link></span>
			</div>
		</form>
	</div>
</template>

<script>

	export default {
	    data () {
	      return {
	        username: '',
			password: '',
			telephone: '',
			email: '',
			surePassword: '',
			widVar: "0%",
	      };
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
	@import "../assets/css/SignIn.css";
</style>
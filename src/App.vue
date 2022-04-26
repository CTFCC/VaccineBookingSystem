<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {}
	}
</script>

<style>
	@import './assets/css/background.css';
	#app {
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(#0AB0D5, #9E2CFD);
	}
</style>

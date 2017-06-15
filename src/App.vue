<template>
	<div class="App">
		<header>
			<a href="javascript:void(0)" class="location">上海市</a>
			<a href="/" class="login">登录</a>
		</header>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'hello world!'
			}
		}
	}
</script>

<style scoped>
	header{
		background: url('../static/img/logo.png') center center no-repeat #fff;
		background-size: 69px 21px;
		height: 44px;
		line-height: 44px;
		display: flex;
		justify-content: space-between;
	}
	.location{
		color:#666;
		font-size: 15px;
		width: 120px;
		background: url('../static/img/add.png') 11px center no-repeat;
		background-size: 16px 16px;
		text-indent: 30px;
	}
	.login{
		width: 49px;
		background: url('../static/img/login.png') center center no-repeat;
		background-size: 20px 20px;
		text-indent: -99999px;
	}
</style>
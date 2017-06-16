<template>
	<div class="App">
		<!-- 路由占位,将来所有组件都是替换这个位置来实现页面跳转
		这也是一个单页系统的实现 -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return {
			}
		},
		methods:{

		},
		created(){
			// console.log(this.$route)
		},
		watch:{
		}
	}
</script>

<style scoped>
</style>
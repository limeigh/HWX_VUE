<template>
	<div class="tmpl">
		<!-- 首页头部 -->
		<header>
			<a href="javascript:void(0)" class="location">上海市</a>
			<a href="/" class="login">登录</a>
		</header>
		<!-- 首页临时通知 -->
		<div class="notic" ref="notic">
			<a href="javascript:;">关于维修那些事，警惕高价陷阱!&nbsp;&nbsp;&gt;&gt;</a>
			<a href="javascript:;" class="close" @click="close">关闭</a>
		</div>
		<!-- 引用公用组件中的轮播图组件 -->
		<carouselFigure :imgLists="lists"></carouselFigure>
		<!-- 首页导航 -->
		<nav class="mt8 mb10 oh" style="height:80px">
			<div class="bgw navigation">
				<ul class="clearfix pt11 pb5">
					<li v-for="(item,index) in navLists" :key="index">
						<a :href="item.url"><img :src="item.img"><p>{{item.text}}</p></a>
					</li>
				</ul>
			</div>
		</nav>
		<!-- 热门维修模块 -->
		<div class="bgw plr5 hotFix" style="height:1000px">
			<article class="head pt7 pb5 tc">
				<p class="menuItem" v-bind:class="{ active: isActive1 }" @click="changeActive1">
					<a href="javascript:;">热门维修</a><span></span>
				</p>
				<p class="menuItem" v-bind:class="{ active: isActive2 }" @click="changeActive2">
					<a href="javascript:;">快捷下单</a><span></span>
				</p>
			</article>
			<article class="cont"></article>
			<article class="botm"></article>
		</div>
	</div>
</template>

<script>
	//导入公用的轮播图组件
	import CarouselFigure from '../common/CarouselFigure.vue'
	// 导入公用config
	import {config} from '../../commonJs/config.js'

	export default{
		data(){
			return {
				lists:[],
				navLists:[],
				isActive1:true,
				isActive2:false
			}
		},
		created(){
			this.lists=config.CarouselData
			this.navLists=config.navData
		},
		mounted(){
			this.$nextTick(function(){
				window.addEventListener('scroll',this.onScroll)
			})
		},
		components:{
			CarouselFigure
		},
		methods:{
			close(){
				this.$refs.notic.style.display='none'
			},
			changeActive1(){
				this.isActive1=true
				this.isActive2=false
			},
			changeActive2(){
				this.isActive2=true
				this.isActive1=false
			},
			onScroll(){
				
			}
		}
	}
</script>

<style scoped>
	header{
		background: url('../../../static/img/logo.png') center center no-repeat #fff;
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
		background: url('../../../static/img/add.png') 11px center no-repeat;
		background-size: 16px 16px;
		text-indent: 30px;
	}
	.login{
		width: 49px;
		background: url('../../../static/img/login.png') center center no-repeat;
		background-size: 20px 20px;
		text-indent: -99999px;
	}
	.notic{
		position: relative;
		background-color: #ffedc3;
		padding:0 32px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 13px;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.notic a{
		color: #614a44;
	}
	.notic .close{
		position: absolute;
		right: 0;
		top: 0;
		width: 32px;
		height: 30px;
		text-indent: -9999px;
		background: url('../../../static/img/close.png') center center no-repeat;
		background-size: 11px 11px;
	}
	.navigation{
		height: 95px;
		overflow-x:scroll;
		overflow-y: hidden;
	}
	.navigation ul{
		width: 111%;
	}
	.navigation ul li{
		width: 20%;
		float: left;
		text-align: center;
	}
	.navigation ul li a{
		color: #333;
		font-size: 12px;
		line-height: 22px;
	}
	.navigation ul li img{
		width: 40px;
		height: 40px;
		display: inline-block;
	}
	.menuItem{
		display: inline-block;
		height: 30px;
		line-height: 29px;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		width: 80px;
	}
	.menuItem a{
		color: #444;
	}
	.menuItem.active a{
		color: #ff5000; 
	}
	.menuItem.active span{
		display: block;
		height: 1px;
		width: 15px;
		background-color: #ff5000;
		margin:0 auto;
	}
</style>
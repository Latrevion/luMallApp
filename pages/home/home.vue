<template>
	<view class="home">
		<!-- 轮播图 -->
		<home-banner :banners='banners' @swiperItemClick='swiperItemClick'></home-banner>
		<!-- 推荐栏 -->
		<home-recommend :recommends='recommends' @itemClick='itemClick'></home-recommend>
		<!-- 热门栏组件 -->
		<home-popular></home-popular>
		<!-- 选项卡组件 -->
		<tab-control :titles="['流行','新款','精选']" @tabItemClick='tabItemClick'></tab-control>
	</view>
</template>

<script setup>

import {onLoad} from '@dcloudio/uni-app'
import {storeToRefs} from 'pinia'
import {useHomeStore} from '@/store/home.js'
import HomeBanner  from './cpns/home-banner.vue'
import HomeRecommend from './cpns/home-recommend.vue'
import HomePopular from './cpns/home-popular.vue'

const HomeStore = useHomeStore()
const {banners,recommends} = storeToRefs(HomeStore)

onLoad(()=>{
		HomeStore.fetchHomeMutilData()
})

function swiperItemClick (link) {  
	uni.navigateTo({
		url:'/pages/webview/webview?link='+link
	})
}

function itemClick(link){
	uni.navigateTo({
		url:'/pages/webview/webview?link='+link
	})
}

function tabItemClick(index){
	console.log(index);	
}
</script>

<style lang="scss">

</style>

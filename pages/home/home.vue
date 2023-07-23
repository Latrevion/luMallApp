<template>
	<view class="home">
		<!-- 轮播图 -->
		<home-banner :banners='banners' @swiperItemClick='swiperItemClick'></home-banner>
		<!-- 推荐栏 -->
		<home-recommend :recommends='recommends' @itemClick='itemClick'></home-recommend>
	</view>
</template>

<script setup>

import {onLoad} from '@dcloudio/uni-app'
import {storeToRefs} from 'pinia'
import {useHomeStore} from '@/store/home.js'
import HomeBanner  from './cpns/home-banner.vue'
import HomeRecommend from './cpns/home-recommend.vue'

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
</script>

<style lang="scss">

</style>

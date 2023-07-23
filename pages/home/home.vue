<template>
	<view class="home">
		<!-- 轮播图 -->
		<home-banner :banners='banners' @swiperItemClick='swiperItemClick'></home-banner>
	</view>
</template>

<script setup>

import {onLoad} from '@dcloudio/uni-app'
import {storeToRefs} from 'pinia'
import {useHomeStore} from '@/store/home.js'
import HomeBanner  from './cpns/home-banner.vue'

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
</script>

<style lang="scss">

</style>

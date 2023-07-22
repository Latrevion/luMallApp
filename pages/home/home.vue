<template>
	<view class="home">
		home
	</view>
</template>

<script setup>


import {onLoad} from '@dcloudio/uni-app'
import {getHomeMutiData} from '@/service/home.js'

onLoad(()=>{
	getHomeMutiData().then((res)=>{
		console.log('res',res.data.banner.list)
	})
})
</script>

<style lang="scss">

</style>

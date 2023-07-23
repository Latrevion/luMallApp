<template>
	<view class="home">
		{{banners}}
		<hr>
		{{recommends}}
	</view>
</template>

<script setup>

import {onLoad} from '@dcloudio/uni-app'
import {storeToRefs} from 'pinia'
import {useHomeStore} from '@/store/home.js'

const HomeStore = useHomeStore()
const {banners,recommends} = storeToRefs(HomeStore)

onLoad(()=>{
		HomeStore.fetchHomeMutilData()
})
</script>

<style lang="scss">

</style>

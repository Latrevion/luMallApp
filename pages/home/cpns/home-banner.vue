<template>
	<swiper class='banner' :indicator-dots="true" indicator-active-color="#ff8198" :autoplay="true" :interval="3000" :duration="1000">
	<template v-for="(item,index) in banners" :key='item'>
		<swiper-item @click="handlerClick(item)">
			<image class="image" :src='item.image' mode='widthFix'></image>
		</swiper-item>
	</template>
	</swiper>
</template>

<script setup>
	const props = defineProps({
		banners:{
			type:Array,
			default: ()=>[]
		}
	})
	const emit =defineEmits(['swiperItemClick'])
	
	function handlerClick(item){
		emit('swiperItemClick',item.link)
	}
	
</script>

<style lang='scss'>
	.banner{
		image{
			width:100%
		}
	}
	
</style>
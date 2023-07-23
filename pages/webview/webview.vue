<template>
	<web-view :src="link"></web-view>
</template>

<script setup>
//接受页面传过来的props的url
defineProps({
	link:{
		type:String,
		default:''
	}
})
</script>

<style lang="scss">

</style>
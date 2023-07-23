import {defineStore} from 'pinia'
import {getHomeMutiData} from '@/service/home.js'

export const  useHomeStore = defineStore('home',{
	state:()=>{
		return {
			banners:[],
			recommends:[]
		}
	},
	actions:{
		//获取轮播图和推荐栏的数据
		async fetchHomeMutilData(){
			const res = await getHomeMutiData()
			this.banners = res.data.banner.list || []
			this.recommends =res.data.recommend.list || []
		}
	}
})
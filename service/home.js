import LukeRequest from './index.js'
let url = '/home/multidata'


export const getHomeMutiData =()=>{
	return LukeRequest.get(url,{})
}
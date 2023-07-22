const TIME_OUT = 60000
const BASE_URL = 'http://123.207.32.32:7888/api/hy66'

class LukeRequest {
	request(url, method, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				method: method ,
				data: data,
				timeout: TIME_OUT,
				success: (res) => {
					resolve(res.data)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}

	get(url,method, data) {
		return this.request(url, 'GET', data)
	}

	post(url, data) {
		return this.request(url, "POST", data)
	}
}

export default new LukeRequest()
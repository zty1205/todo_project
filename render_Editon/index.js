const app = new Vue({
	el: "#app",
	data: {
		// return {
			username: '',
			message: '',
			list: []
		// }
	},
	methods: {
		handleSend() {
			let nowDate = new Date()
			if(this.username === ''){
				window.alert('请输入昵称');
				return;
			}
			if(this.message === ''){
				window.alert('请输入留言');
				return;
			}
			this.list.push({
				name: this.username,
				message: this.message
			})
			this.username = ''
			this.message = ''
		},
		handleReply(index){
			let name = this.list[index].name;
			this.message = '回复@' + name + ': '
			this.$refs.message.focus()
		}
	}
})
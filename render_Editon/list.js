Vue.component('list',{
	props: {
		list: {
			type: Array,
			default: function () {
				return [];
			}
		}	
	},
	render: function(h){
		const _this = this;
		let list = [];
		this.list.forEach(function(msg, index){
			let node = h('div',{
				attrs: {
					class: 'list-item'
				}
			},[
				h('span',msg.name + ': '),
				h('div',{
					attrs: {
						class: 'list-item'
					}
				},[
					h('p', msg.message),
					h('a',{
						attrs: {
							class: 'list-reply'
						},
						on:{
							click: function(){
								_this.handleReply(index)
							}
						}
					}, '回复')	
				])
			])
			list.push(node)
		})
		if(this.list.length){
			return h('div',{
				attrs: {
					class: 'list'
				}
			},list)
		}else {
			return h('div',{
				attrs: {
					class: 'list-nothing'
				}
			},'留言列表为空')
		}
	},
	methods: {
		handleReply: function(index){
			this.$emit('reply',index)
		}
	}
})
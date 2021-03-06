define(['backbone','channel'],function(Backbone,Channel){

	return Backbone.View.extend({
		el:'.input-area',
		events:{
			'click .submit' : 'submit',
			'keypress textarea':'submitOnEnter'
		},

		submit : function(){
			nwmsg = this.$el.find('textarea').val();
			console.log("nwmsg" + nwmsg);

			this.$el.find('textarea').val('');
			Channel.trigger('addMsg',nwmsg); // reciever messages.view
			//auto_scroll();
		},
		submitOnEnter:function(e){
			//console.log(e.keyCode);
			console.log("Enter key:" + e.keyCode);
			if(e.keyCode===13 && !e.shiftKey){
				this.submit();
			}
		}
	});
});
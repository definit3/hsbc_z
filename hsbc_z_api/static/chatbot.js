window.onload = function() {
	if(window.location.pathname=="/chat/renderiframe/")
	{
		$('body').append('<iframe id="allincall-chat-box" frameborder="0" style="display:none;"></iframe>');
		$('body').append('<img width=168 id="allincall-popup" src="/static/EasyChatApp/img/popup.png" style="position:fixed;cursor:pointer;right:20px;bottom:0;width:38;">');


		$('#allincall-popup').click(function(e) {
		  var current_src = $("#allincall-chat-box").attr("src");
		  if((typeof current_src === 'undefined') || (current_src == null)){
		    $("#allincall-chat-box").attr("src","/chat/index");
		  }
		  else{
		    $("#allincall-chat-box").slideDown("slow");
		  }
		  $('#allincall-popup').hide();
		  $("#allincall-chat-box").slideDown("slow");
		});
	}
}

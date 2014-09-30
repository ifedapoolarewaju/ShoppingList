var instagram ={
	base: "https://api.instagram.com/v1/media/popular?callback=?",
	//callback is required for jsonp request
	params:{client_id: '260db4131ac04a07bb7f0fd951bb4087'},
	start: function(){
		Instagram.fetchRecent();
	},
	loadItems:function(response)
	{
		console.log(response);
	},
	fetchRecent: function(){
		$.getJSON(Instagram.base, Instagram.params, Instagram.loadItems);
	}
}



$(document).ready(Instagram.start);
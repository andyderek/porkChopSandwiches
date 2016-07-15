window.onload = function(){
	// var myTag = document.createElement("my-tag");
	// myTag.addEventListener('onclick', function(e){
	// 	alert('You just Clicked me');
	// });
	for(var i = 0; i <= 10; i++){
		var myTag = document.createElement("my-tag" + i);
		// myTag.onclick = function(){alert("What Just Happened" + i)};
		myTag.innerHTML = "<button>" + i +"</button>";
		myTag.onclick = function(){};
		document.body.appendChild(myTag);
	}
	console.log(myTag)
	function count(number){
		alert(number)
	}

};

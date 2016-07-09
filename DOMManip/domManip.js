window.onload = function(){
	var myTag = document.createElement("my-tag");
	myTag.addEventListener('onclick', function(e){
		alert('You just Clicked me');
	});
	myTag.innerHTML = "Pork Chop Sandwiches";
	myTag.onclick = function(){alert("What Just Happened")};
	document.body.appendChild(myTag);
};

window.onload = function(){
	// var myTag = document.createElement("my-tag");
	// myTag.addEventListener('onclick', function(e){
	// 	alert('You just Clicked me');
	// });
	var numArr = [];
	for(var i = 1; i <= 10; i++){
		numArr.push(document.createElement("my-tag" + i));
	}

	for(var i = 0; i < numArr.length; i++){
		numArr[i].innerHTML = "<button>" + (i + 1) + "</button>";
		document.body.appendChild(numArr[i])
		numArr[i].onclick = function(){
			alert(this.innerText)
		}
	}

	console.log(numArr)

	// for(var i = 0; i < numArr.length; i++){
	// 	console.log(numArr[i].innerText)
	// 	numArr[i].onclick = function(){
	// 		alert(this.innerText)
	// 	};
	// }


	// console.log(document.body.childNodes)
	function count(number){
		alert(number)
	}

};

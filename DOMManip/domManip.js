window.onload = function(){

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



	var myTag = document.getElementsByTagName("p");
	// var target = p[1].innerHTML
	console.log(myTag[0].innerHTML)
	document.localStorage = {'chicken': 'tasty'};
};

function funky(){
	document.getElementById("dogpoop").innerHTML = 'hello foolio'
};

function anotherFunk(){
	var tagged = document.getElementsByTagName("my-tag1")
	alert(tagged[0].innerText)
	console.log(document.localStorage)
}


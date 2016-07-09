function timeOut(funk, time){
	var stamp = new Date().getTime();
	if(time){
		while((new Date().getTime()) - stamp !== time){
		}
	}
	funk();
}



console.clear();

var names = ["James" , "Jack" , "Smith" , "Abdul" , "Shady"]

for(var i=0; i<names.length;i++){
	if (names[i].startsWith("J") || names[i].startsWith("j")){
		console.log("Goodbye "+ names[i]);
	}
	else{
		console.log("Hello "+names[i])
	}
}
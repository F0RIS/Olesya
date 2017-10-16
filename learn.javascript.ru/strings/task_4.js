function ask(question, yes, no) {
	if(confirm(question)) yes()
		else no()
}
function showOk(){
	alert('ok')
}

function showCancel(){
	alert('no');
}

ask('are you agree?', showOk, showCancel);
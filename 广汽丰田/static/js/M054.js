var down = document.getElementById('down');
var up = document.getElementById('up');
var info5 = document.getElementById('info5');

down.onclick = function(){
	info5.style.display = 'block';
	up.style.display = 'block';
	down.style.display = 'none';
}
up.onclick = function(){
	info5.style.display = 'none';
	up.style.display = 'none';
	down.style.display = 'block';
}
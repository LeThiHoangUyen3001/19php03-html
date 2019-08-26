//bt ban co
for (var i = 1; i < 9; i++) {
	for (var j = 1; j < 9; j++) {
		if ((i + j) % 2 == 0) {
			document.write("<div class='white'></div>");
		}
		else {
			document.write("<div class='black'></div>");
		}
	}
	document.write('<br>');
}

//bt tim so lon nhat
document.write('<br>--------------<br>');
var a = prompt("so a", '');
var b = prompt("so b", '');
var c = prompt("so c", '');
document.write(a);
document.write('<br>');
document.write(b);
document.write('<br>');
document.write(c);
document.write('<br>');
function maxNumber(x, y, z) {
	var max = x;
	if(max < y) max = y;
	if(max < z) max = z;
	return max;
}                                     
 document.write('<br>');
 document.write('so lon nhat la ' + maxNumber(a, b, c));
 document.write('<br>');

 //bt in tam giac vuong
document.write('<br>--------------<br>');
var n = 10;
for (var i = 1; i <= n; i++) {
	for (var j = 1; j <= i; j++) {
		document.write('*  ');
	}
	document.write('<br>');
}

//bt in ra tam giac can
document.write('<br>--------------<br>');
var n = 10;
for (var i = 1; i <= n; i++) {
	for (var j = 1; j < n - i; j++) {
		document.write('&nbsp;&nbsp; ');
	}
	for (var j = 1; j <= 2 * i - 1; j++) {
		document.write(' *');
	}
	document.write('<br>');
}

//bt doc so thanh chu
document.write('<br>--------------<br>');
var x = prompt("so x", '');
document.write(x);
document.write('<br>');
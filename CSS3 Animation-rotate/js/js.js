var curIndex = 1;
var n = document.getElementById("next");
var p = document.getElementById("previous");

function next() {
	if (curIndex == 6) {
		return;
	}
	var curPage = document.getElementById('page'+curIndex);
	curPage.style.webkitTransform = "rotateX(-90deg)";
	curIndex++;
	var nextPage = document.getElementById('page'+curIndex);
	nextPage.style.webkitTransform = "rotateX(0deg)";
}


function previous() {
	if (curIndex == 1) {
		return;
	}
	var curPage = document.getElementById('page'+curIndex);
	curPage.style.webkitTransform = "rotateX(90deg)";
	curIndex--;
	var previousPage = document.getElementById('page'+curIndex);
	previousPage.style.webkitTransform = "rotateX(0deg)";
}

window.onload = function(){
	n.onmouseover = next;
	p.onmouseover = previous;
}

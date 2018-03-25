function peparePlaceholder(){
	if(!document.createElement)return false;
	if(!document.createTextNode)return false;
	if(!document.getElementById("imgList"))return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","");
	placeholder.setAttribute("class","center")
	placeholder.setAttribute("alt","a placeholder");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	description.setAttribute("class","center");
	var destxt = document.createTextNode("选择一张图片");
	description.appendChild(destxt);
    var imgList = document.getElementById("imgList");
    insertAfter(placeholder,imgList);
    insertAfter(description,placeholder);
}


function showPic(whichPic){
	if(!document.getElementById("placeholder")) peparePlaceholder();;
	var sourse = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",sourse);
	if(document.getElementById("description")){
	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	   }
	return true;
	}

function pepareShow(){
	if(!document.getElementsByTagName||!document.getElementById)return false;
	if(!document.getElementById("imgList"))return false;
	var list = document.getElementById("imgList");
	var alink = list.getElementsByTagName("a");
	for (var i = 0;i < alink.length;i++){
		alink[i].onclick = function(){
			return showPic(this)?false:true;
		}	
	}
}
function addLoadEvent(func){
	var oldLoad = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldLoad();
			func();
		}
	}
}
function insertAfter (newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}
	else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
//addLoadEvent(peparePlaceholder);
addLoadEvent(pepareShow);


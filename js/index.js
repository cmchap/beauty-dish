var dish = document.getElementById("dish");
var slider = document.getElementById("slider");
var output = document.getElementById("output");

var toggleAdvanced = document.getElementById("toggleAdvanced");


var advanced = document.getElementById("advanced");
var code = document.getElementById("code");
var code_output = document.getElementById("code_output");
var thumbnail = document.getElementById("thumbnail");
var submit = document.getElementById("submit");

updateColor(slider.value);
code_output.innerHTML = eval(code.value);
updateThumbnail()

slider.oninput = function(){
	updateColor(slider.value);
};

slider.ondblclick = function(){
	sliderReset();
};

toggleAdvanced.onclick = function() {
	advanced.classList.toggle("hidden");
	return false;
}

code.oninput = function(){
	code_output.innerHTML = eval(code.value);
	updateThumbnail()
};

code.onkeydown = function(e){
   if(e.keyCode == 13 && e.metaKey){
     submit.click();
   }
};

submit.onclick = function(){
	dish.style.backgroundColor = code_output.innerHTML;
	slider.value = (parseInt(slider.min) + parseInt(slider.max))/2;
	output.innerHTML = "N/A ";
}



function updateColor(value) {
	output.innerHTML = value;
	dish.style.backgroundColor = chroma.temperature(value);
	return;
}

function sliderReset() {
		slider.value = (parseInt(slider.min) + parseInt(slider.max))/2;
	updateColor(slider.value);
}

function updateThumbnail() {
	thumbnail.style.backgroundColor = code_output.innerHTML;
}
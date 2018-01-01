var listbox;
var onloadtest = true;
function onLoad(){
	
	var nbreloop = 2;
	var nbreloop2 = 3;
	listbox = document.getElementById('participantchoice');
	var plistbox = document.createElement("p");
	plistbox.id = "participantchoiceparagraph";
	plistbox.innerHTML = "Choisir le nombre de participants :";
	while(nbreloop <= 49){
		var addoption = document.createElement("option");
		addoption.id = "optionparticipant" + (nbreloop + 1);
		addoption.text = nbreloop + 1;
		addoption.value = nbreloop + 1;
		listbox.add(addoption);
		nbreloop++;
	}
	document.body.appendChild(plistbox);
	while(nbreloop2 <= 50){
		var optionparticipant = document.getElementById("optionparticipant" + nbreloop);
		nbreloop2++;		
	}
	onloadtest = false;
	listbox.addEventListener("change", onChangeListbox);
}
window.addEventListener("load", onLoad);




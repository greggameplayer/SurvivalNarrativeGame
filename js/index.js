function onChangeListbox(){
	var participantselectiondiv = document.getElementById('participantselection'), selectedValue = document.getElementById('participantchoice'), choice = selectedValue.selectedIndex, seekvalue = parseInt(selectedValue.options[choice].value), nbreloop = 1;
	while(nbreloop <= seekvalue){
		if(document.body.contains(document.getElementById("textdivparticipant" + nbreloop)) == false){
		var textdiv = document.createElement("div");
		textdiv.id = "textdivparticipant" + nbreloop, textdiv.className = "textdivgroup";
		participantselectiondiv.appendChild(textdiv);
		}
		var textdivid = document.getElementById("textdivparticipant" + nbreloop), textdividtest = document.body.contains(document.getElementById("textdivparticipant" + nbreloop)), testfield = document.body.contains(document.getElementById("perso" + nbreloop));
		if(testfield == true && textdividtest == true){
			textdivid.removeChild(document.getElementById("canvas" + nbreloop));
			textdivid.removeChild(document.getElementById("buttonfiledialog" + nbreloop));
			textdivid.removeChild(document.getElementById("separator" + nbreloop));
			textdivid.removeChild(document.getElementById("paragraphfiledialog" + nbreloop));
			textdivid.removeChild(document.getElementById("perso" + nbreloop));
			textdivid.removeChild(document.getElementById("perso" + nbreloop + "paragraph"));
			if(document.body.contains(document.getElementById("space" + nbreloop))){
			participantselectiondiv.removeChild(document.getElementById("space" + nbreloop));
			}
			participantselectiondiv.removeChild(document.getElementById("textdivparticipant" + nbreloop));
		}
		if(document.body.contains(document.getElementById("submitbutton")) == true){
			participantselectiondiv.removeChild(document.getElementById("submitbutton"));
		}
		if(document.body.contains(document.getElementById("textdivparticipant" + nbreloop)) == false){
		var textdiv2 = document.createElement("div");
		textdiv2.id = "textdivparticipant" + nbreloop, textdiv2.className = "textdivgroup";
		participantselectiondiv.appendChild(textdiv2);		
		textdivid = document.getElementById("textdivparticipant" + nbreloop);
		}
		var ptextfield = document.createElement("p"), separator = document.createElement("hr"), pfiledialog = document.createElement("p"), buttonfiledialog = document.createElement("button"), canvas = document.createElement("canvas"), space = document.createElement("div"), textfield = document.createElement("INPUT");
		separator.id = "separator" + nbreloop, separator.className = "separatorgroup";
		pfiledialog.id = "paragraphfiledialog" + nbreloop, pfiledialog.className = "paragraphfiledialoggroup", pfiledialog.innerHTML = "Choisissez une image de profil (64px X 64px) :";
		buttonfiledialog.id = "buttonfiledialog" + nbreloop, buttonfiledialog.className = "buttonfiledialoggroup", buttonfiledialog.innerHTML = "parcourir";
		canvas.id = "canvas" + nbreloop, canvas.className = "canvasgroup", canvas.height = "64", canvas.width = "64";
		space.id = "space" + nbreloop, space.className = "spacegroup";
		
		ptextfield.id = "perso" + nbreloop + "paragraph", ptextfield.className = "persoparagraphgroup", ptextfield.innerHTML = "Choisir le nom du personnage n°" + nbreloop + " :";
		textfield.id = "perso" + nbreloop, textfield.className = "persogroup", textfield.setAttribute('type','text');
		textdivid.appendChild(ptextfield), textdivid.appendChild(textfield), textdivid.appendChild(separator), textdivid.appendChild(pfiledialog), textdivid.appendChild(buttonfiledialog), textdivid.appendChild(canvas);
		if(nbreloop != seekvalue){
			participantselectiondiv.appendChild(space);
		}
		buttonfiledialog.addEventListener("click", function(){FileDialog(this.id);});
		nbreloop++;
		if(nbreloop > seekvalue){
			var nbreloop2 = 0;
			while((nbreloop + nbreloop2) <= 12){
		if(document.body.contains(document.getElementById("textdivparticipant" + (nbreloop + nbreloop2))) == true){
		var textdividtest2 = document.getElementById("textdivparticipant" + (nbreloop + nbreloop2)), testfieldnext = document.body.contains(document.getElementById("perso" + (nbreloop + nbreloop2)));	
		if(testfieldnext == true){
			textdividtest2.removeChild(document.getElementById("canvas" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("buttonfiledialog" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("separator" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("paragraphfiledialog" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("perso" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("perso" + (nbreloop + nbreloop2) + "paragraph"));
			if(document.body.contains(document.getElementById("space" + (nbreloop + nbreloop2)))){
			participantselectiondiv.removeChild(document.getElementById("space" + (nbreloop + nbreloop2 )));
			}
			participantselectiondiv.removeChild(document.getElementById("textdivparticipant" + (nbreloop + nbreloop2)));
		}

		}
		nbreloop2++;
			}
		var submitbutton = document.createElement("button");
		submitbutton.id = "submitbutton", submitbutton.innerHTML = "valider";
		participantselectiondiv.appendChild(submitbutton);
		submitbutton.addEventListener("click", function(){OnSubmitbuttonClick(seekvalue);});
		}
	}
	
	
}
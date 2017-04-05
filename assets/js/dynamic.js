/* getSelected is the start of the code and gets the information from the 
 * users selection then it goes through the switch statement, changes the picture
 * and then goes to the next select statements while bringing in its array.
 */
function getSelected(){
	var x = document.getElementsByTagName("SELECT")[0].selectedIndex;
	var brand = document.getElementsByTagName("OPTION")[x].getAttribute("value");
	
	switch(brand){
		case "none":
			nextLevel(brand, 0);
			addPic(brand);
			break;
		case "apple":
			goNextNow();
			addPic(brand);
			break;
		case "asus":
			goNextNow();
			addPic(brand);
			break;
		case "dell":
			goNextNow();
			addPic(brand);
			break;
		case "hp":
			goNextNow();
			addPic(brand);
			break;
	}
}

/* The addPic function is used to change the picture on the side.
 * This gets used a lot more as we get to the third select tag.
 * small animation is used to make it look dynamic.
 */
function addPic(thispic){
	var movPic = document.getElementsByTagName("IMG")[0];
		if(thispic === "none")
			document.getElementById("picbrand").src =  "";
		else{
			document.getElementById("picbrand").src =  "assets/images/" + thispic + ".png";
			var movIt = setInterval(picMove, 20);
			var place = 0;
			function picMove() {
				if (place == 20) {
					clearInterval(movIt);
				} else {
					place++; 
					movPic.style.right = place + 'px'; 
				}
			}
		}
			
}

/* nextLevel makes the second select tag while also cleaning up the
 * page when another choice is selected or no choice is selected.
 * This one also has a dynamic animation to it.
 */
function nextLevel(arrFirst, theInt){
	var thisLvl = document.getElementsByTagName("SELECT")[1]; // gets the second select tag to compare if there is one
	var thisSecondLvl = document.getElementsByTagName("SELECT")[2]; // gets the third select tag to compare also
	
	if(thisSecondLvl != null){ // if there is no third select tag clear it from the page
		clearNow();
	}
	
	if(arrFirst === "none"){ // if the value equals to none clear it so we know we're in the first level still
		clearFirst();
	}
	else{
		if(thisLvl != null){ // when there is no second select tag remove them 
			clear();
		}
		
		// lines 82-88 makes the h1 and select tags
		var all = arrFirst[theInt].getElementsByTagName("type").length;
		console.log(all);
		var select = document.createElement("SELECT");
		select.id = "second";
		var type = document.createElement("H1");
		var h1T = document.createTextNode("Now choose your preferred computer type");
		type.appendChild(h1T);
		document.body.appendChild(type);
	
		for(i = 0; i < all; i++){ // creates the options to choose from
			var option = document.createElement("OPTION");
			var t = document.createTextNode(arrFirst[theInt].getElementsByTagName("type")[i].childNodes[0].nodeValue);
			option.appendChild(t);
			select.appendChild(option);
		}
		select.appendChild(option); // add the option choices to the second select tag
		document.body.appendChild(select); // now add it to the page
		
		document.getElementsByTagName("SELECT")[1].onchange = getAnotherSelected; // give the second select tag an onchange event
		
		var id2 = setInterval(secMove, 20);
		var pos2 = 0;
		function secMove() { // ddddynamic animation
			var hMov2 = document.getElementsByTagName("H1")[1]; 
			var selMov2 = document.getElementsByTagName("SELECT")[1];
			if (pos2 == 20) {
				clearInterval(id2);
			} else {
				pos2++; 
				hMov2.style.left = pos2 + 'px'; 
				selMov2.style.left = pos2 + 'px';
			}
		}

	}
}

function getAnotherSelected(){
	var y = document.getElementsByTagName("SELECT")[0].selectedIndex;
	var origbrand = document.getElementsByTagName("OPTION")[y].getAttribute("value"); // last two lines get the value of the first select tag
	var thisLvl = document.getElementsByTagName("SELECT")[2]; // to compare
	var secondSelect = document.getElementsByTagName("SELECT")[1].selectedIndex; // gets the last choice the user made in the second select tag
	var newXMlDoc = loadXMLDoc();
	var pro = newXMlDoc.getElementsByTagName("product");
	
	if(origbrand === "none"){clearNow();} // remove the second h1 tag and the third select tag for the first select tag
	if(origbrand === "apple"){
		if(thisLvl != null){ // if there is no third select tag remove everything supposed to come after that
			clearPicNow(); // remove the pictures
			clearSecond(); // gets rid of the third select tag
			addPic(origbrand);
		}
		if(secondSelect === 1){ // will go to this or the other choices when selected. The next 80 lines are same as this
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[0].getElementsByTagName("tablet").length; i++){
				a[i] = pro[0].getElementsByTagName("tablet")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
		if(secondSelect === 2){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[0].getElementsByTagName("aio").length; i++){
				a[i] = pro[0].getElementsByTagName("aio")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
		if(secondSelect === 3){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[0].getElementsByTagName("laptop").length; i++){
				a[i] = pro[0].getElementsByTagName("laptop")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
	}
	
	if(origbrand === "asus"){
		if(thisLvl != null){
			clearPicNow();
			clearSecond();
			addPic(origbrand);
		}
		if(secondSelect === 1){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[1].getElementsByTagName("desktop").length; i++){
				a[i] = pro[1].getElementsByTagName("desktop")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
		if(secondSelect === 2){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[1].getElementsByTagName("tablet").length; i++){
				a[i] = pro[1].getElementsByTagName("tablet")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
		if(secondSelect === 3){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[1].getElementsByTagName("laptop").length; i++){
				a[i] = pro[1].getElementsByTagName("laptop")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
	}
	
	if(origbrand === "dell"){
		if(thisLvl != null){
			clearPicNow();
			clearSecond();
			addPic(origbrand);
		}
		if(secondSelect === 1){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[2].getElementsByTagName("desktop").length; i++){
				a[i] = pro[2].getElementsByTagName("desktop")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
		if(secondSelect === 2){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[2].getElementsByTagName("laptop").length; i++){
				a[i] = pro[2].getElementsByTagName("laptop")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
	}
	
	if(origbrand === "hp"){
		if(thisLvl != null){
			clearPicNow();
			clearSecond();
			addPic(origbrand);
		}
		if(secondSelect === 1){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[3].getElementsByTagName("desktop").length; i++){
				a[i] = pro[3].getElementsByTagName("desktop")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
		if(secondSelect === 2){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[3].getElementsByTagName("laptop").length; i++){
				a[i] = pro[3].getElementsByTagName("laptop")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
		if(secondSelect === 3){
			var a = []; // the array to pass to the next and last select tag
			
			for(var i = 0; i < pro[3].getElementsByTagName("printer").length; i++){
				a[i] = pro[3].getElementsByTagName("printer")[i].childNodes[0].nodeValue;
			}
			console.log(a);
			
			thirdSelect(a); // function to make the last select tag
		}
	}
	
	var id3 = setInterval(secMove, 20);
	var pos3 = 0;
	function secMove() { // dynamic animation
		var hMov3 = document.getElementsByTagName("H1")[2]; 
		var selMov3 = document.getElementsByTagName("SELECT")[2];
		if (pos3 == 20) {
			clearInterval(id3);
		} else {
			pos3++; 
			if(hMov3 != undefined && selMov3 != undefined){
				hMov3.style.left = pos3 + 'px';
				selMov3.style.left = pos3 + 'px';
			}
		}
	}
	
	
}

function thirdSelect(arrThird){ // creates the last select tag
	var all = arrThird.length;
	var select = document.createElement("SELECT");
	var type2 = document.createElement("H1");
	var h1T2 = document.createTextNode("Finally, choose the model you want");
	
	for(i = 0; i < all; i++){
		var option = document.createElement("OPTION");
		var t = document.createTextNode(arrThird[i]);
		option.appendChild(t);
		select.appendChild(option);
	}
	type2.appendChild(h1T2)
	document.body.appendChild(type2);
	select.appendChild(option);
	document.body.appendChild(select);
	
	document.getElementsByTagName("SELECT")[2].onchange = devicePic; // adds onchange to last select tag to change pic
}

function devicePic(){ // changes the picture to show the users choice in the end
	var thirdSel = document.getElementsByTagName("SELECT")[2].selectedIndex;
	var getOp = document.getElementsByTagName("SELECT")[2].options[thirdSel];
	var thisModel = getOp.text; // gets the name of the choice
	clearPicNow(); // clears the pic that was there originally
	var removePic = " "; // for the pic to remove
	
	if(thisModel != "Choose one"){ // if the choice is choose one clear everything
		console.log(thisModel);
		addPic(removePic);
		addPic(thisModel);
		if(document.getElementById("winPop") != undefined)
			clearForm();
		getLastSelected();
	}
	if(thisModel === "Choose one"){ // clears the form when Choose one is selected
		clearForm();
	}
}

/* This function is where we store our values and checks to see if all the values are set in order 
 * to store the values. It also adds confirmation that your values were inputted by adding a p tag
 * to the end of the page.
 */
function getLastSelected(){
	var firstOp = document.getElementsByTagName("SELECT")[0].selectedIndex;
	var opOne = document.getElementsByTagName("SELECT")[0].options[firstOp];
	var lapBrand = opOne.text;
	
	var thirdOp = document.getElementsByTagName("SELECT")[2].selectedIndex;
	var opTwo = document.getElementsByTagName("SELECT")[2].options[thirdOp];
	var lapModel = opTwo.text;
	
	
	var popup = document.createElement("DIV");
	var styleDiv1 = document.createElement("DIV");
	var styleDiv2 = document.createElement("DIV");
	var pDiv = document.createElement("P");
	var info = document.createTextNode("Congrats your choice was the " + lapBrand + " " + lapModel); // confirmation of a successful input
	var popForm = document.createElement("FORM");
	var firName = document.createTextNode("First Name: ");
	var popForm1 = document.createElement("INPUT");
	var lasName = document.createTextNode("Last Name: ");
	var popForm2 = document.createElement("INPUT");
	var submit = document.createElement("INPUT");
	
	popup.id = "winPop";
	pDiv.appendChild(info);
	pDiv.id = "custMsg"
	popup.appendChild(pDiv);
	
	styleDiv1.id = "styleDiv1";
	styleDiv2.id = "styleDiv2";
	popForm1.id = "getFirstName";
	popForm2.id = "getLastName";
	styleDiv1.appendChild(firName);
	styleDiv1.appendChild(popForm1);
	styleDiv2.appendChild(lasName);
	styleDiv2.appendChild(popForm2);
	
	popForm.appendChild(styleDiv1);
	popForm.appendChild(styleDiv2);
	submit.id = "styleBtn";
	submit.type = "submit";
	submit.value = "Submit";
	popForm.appendChild(submit);
	
	popForm.onsubmit = saveItems;
	popup.appendChild(popForm);
	document.body.appendChild(popup);
}

function saveItems(){
   var optionFir = document.getElementsByTagName("SELECT")[0].selectedIndex;
	var opInsFir = document.getElementsByTagName("SELECT")[0].options[optionFir];
	var branLapThis = opInsFir.text;
	
	var optionThir = document.getElementsByTagName("SELECT")[2].selectedIndex;
	var opInsThree = document.getElementsByTagName("SELECT")[2].options[optionThir];
	var modLapThis = opInsThree.text;
	
	var inpText1 = document.getElementById("getFirstName");
	var userFirst = inpText1.value;
	
	var inpText2 = document.getElementById("getLastName");
	var userSecond = inpText2.value;
	
	saveSelection(userFirst, userSecond, branLapThis, modLapThis); // goes to storage or cookies
}

/* These last functions are the clear functions where they remove h1 tags, select tags and pictures.
 * Pretty important for these to work as the whole site will look like a mess.
 */
function clear(){
	var thisLvlTwo = document.getElementsByTagName("SELECT")[1];
	var thish1Two = document.getElementsByTagName("H1")[1];
	document.body.removeChild(thish1Two);
	document.body.removeChild(thisLvlTwo);
}

function clearLvl(){
	var thisLvlThree = document.getElementsByTagName("SELECT")[2];
	var thish1Two = document.getElementsByTagName("H1")[1];
	var thish1Three = document.getElementsByTagName("H1")[2];
	var thisDivNow = document.getElementById("winPop");
	document.body.removeChild(thisDivNow);
	document.body.removeChild(thish1Two);
	document.body.removeChild(thish1Three);
	document.body.removeChild(thisLvlThree);
}

function clearPicNow(){
	var removePicNow = "none";
	addPic(removePicNow);
}

function clearFirst(){
	var thisLvl = document.getElementsByTagName("SELECT")[1];
	var thish1Three = document.getElementsByTagName("H1")[1];
	document.body.removeChild(thish1Three);
	document.body.removeChild(thisLvl);
}

function clearSecond(){
	var thisLvlSec = document.getElementsByTagName("SELECT")[2];
	var thish1Sec = document.getElementsByTagName("H1")[2];
	var thisDivNow = document.getElementById("winPop");
	document.body.removeChild(thisDivNow);
	document.body.removeChild(thish1Sec);
	document.body.removeChild(thisLvlSec);
}

function clearNow(){
	var thisLvlThree = document.getElementsByTagName("SELECT")[2];
	var thish1Three = document.getElementsByTagName("H1")[1];
	var thisDivNow = document.getElementById("winPop");
	document.body.removeChild(thisDivNow);
	document.body.removeChild(thish1Three);
	document.body.removeChild(thisLvlThree);
}

function clearForm(){
	var thisDivNow = document.getElementById("winPop");
	document.body.removeChild(thisDivNow);
}

/*
 * This gets the data from the xml file for use in our drop down menus
 */
function loadXMLDoc() {
  var parser, xmlDoc;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "data.xml" , false);
  xmlhttp.send();
  
  if (window.DOMParser) {
		  parser = new DOMParser();
		  xmlDoc = parser.parseFromString(xmlhttp.responseText,"text/xml");
		} else {
		  xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		  xmlDoc.async = false;
		  xmlDoc.loadXML(xmlhttp.responseText);
		}
		
	return xmlDoc;
}

function goNextNow(){
		var xhp = loadXMLDoc();
		var tagPro = xhp.getElementsByTagName("product");
		var x = document.getElementsByTagName("SELECT")[0].selectedIndex;
		var brand = document.getElementsByTagName("OPTION")[x].getAttribute("value");
		
		
			if(brand === "apple"){
				console.log("you got this far");
				nextLevel(tagPro, 0);
			}
			if(brand == "asus"){
				console.log("now its in asus");
				nextLevel(tagPro, 1);
			}
			if(brand == "dell"){
				console.log("you got dell");
				nextLevel(tagPro, 2);
			}
			if(brand == "hp"){
				console.log("hp right here");
				nextLevel(tagPro, 3);
			}
}
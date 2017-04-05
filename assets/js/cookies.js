function saveSelection(firName, lassName , selBrand, selModel){
/* this function is called when the user presses the enter button*/
/* the username will be saved in Local Storage or cookies*/

// Check browser support of Local Storage
	  if (typeof(Storage) !== "undefined") {
		 // Store the values
		 localStorage.setItem("firstname", firName);
		 localStorage.setItem("lastname", lassName);
		 localStorage.setItem("brand", selBrand);
		 localStorage.setItem("model", selModel);
	 } 
    else { // use cookies
		var expires = "expires=Thu, 18 Dec 2018 12:00:00 UTC; path=/";
		document.cookie = "firstname =" + firName + "; " + expires;
		document.cookie = "lastname =" + lassName + "; " + expires;
		document.cookie = "brand =" + selBrand + "; " + expires;
		document.cookie = "model =" + selModel + "; " + expires;
    }
}

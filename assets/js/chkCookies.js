/* This function starts as the page loads. It checks if the broswer is compatible and
 * gets the storage or cookies that were set previously. This also makes the first select tag
 * have a dynamic animation.
 */
function init() {
	var sel;
	var fn = null;
	var ln = null;
	var br = null;
	var mo = null;
	
	if(oldIE){
		window.open('https://www.google.com/chrome/browser/desktop/index.html', '_self');
	}
	
	if (typeof(Storage) !== "undefined") { // check if there is localStorage availivle
			fn = localStorage.getItem("firstname");
			ln = localStorage.getItem("lastname");
			br = localStorage.getItem("brand");
			mo = localStorage.getItem("model");
			if (fn != "" && fn != null) {
			  var t = document.createTextNode("Hello again " + fn + " " + ln + "! Your last choice was the " + br + " " + mo);
			  document.getElementsByTagName("DIV")[1].appendChild(t);
			}
			else{
			  var t2 = document.createTextNode("Welcome! When finished click submit");
			  document.getElementsByTagName("DIV")[1].appendChild(t2);
			}
		}
	else{ // if not then use cookies
		 fn = "firstname =";
		 ln = "lastname =";
		 br = "brand =";
		 mo = "model =";
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') {
            c = c.substring(1);
				}
			  if (c.indexOf(fn) == 0) {
					var cookFn = c.substring(fn.length,c.length);
			  }
			  if (c.indexOf(ln) == 0) {
					var cookLn = c.substring(ln.length,c.length);
			  }
			  if (c.indexOf(br) == 0) {
					var cookBr = c.substring(br.length,c.length);
			  }
			  if (c.indexOf(mo) == 0) {
					var cookMo = c.substring(mo.length,c.length);
			  }
			}
			sel = "";
		 
		 if (cookFn != "" && cookFn != null) {
			  var t = document.createTextNode("Hello there " + cookFn + " " + cookLn + "! Your last choice was the " + cookBr + " " + cookMo);
			  document.getElementsByTagName("DIV")[1].appendChild(t);
		 }
		 else{
			  var t2 = document.createTextNode("Welcome! When finished click submit");
			  document.getElementsByTagName("DIV")[1].appendChild(t2);
		 }
   }
   
   moveFlow();
}

function moveFlow(){ // function to move the first select tag
	var hMov1 = document.getElementsByTagName("H1")[0]; 
	var selMov1 = document.getElementsByTagName("SELECT")[0];

    var pos = 0;
    var id = setInterval(frame, 20);
    function frame() {
        if (pos == 20) {
            clearInterval(id);
        } else {
            pos++; 
			hMov1.style.left = pos + 'px'; 
            selMov1.style.left = pos + 'px';
        }
    }
}

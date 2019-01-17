	var content = '{ "people" : [' +
				'{ "Name":"Kanye" ,"voting":"Thank you for voting!" , "content":"Born in Atlanta and raised in Chicago, West first became known as a producer for Roc-A-Fella Records in the early 2000s, producing hit singles for recording artists such as Jay-Z, Ludacris and Alicia Keys." },' +
				'{ "Name":"mark" ,"voting":"Thank you for voting!" , "content":"Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched Facebook from his dormitory room on February 4." },' +
				'{ "Name":"christina" ,"voting":"Thank you for voting!" , "content":"Born in Tolosa [es], La Plata, Buenos Aires Province, she studied law for one year at the University of La Plata and moved to Patagonia with her husband Néstor Kirchner upon his graduation." },'+
				'{ "Name":"Malala" ,"voting":"Thank you for voting!" , "content":"Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region." } ]}';

	var obj = JSON.parse(content);

	/*kanye*/
	if (sessionStorage.getItem("totalposkay") == null) {
	 	sessionStorage.setItem("totalposkay", 1);
	}
	if (sessionStorage.getItem("totalnegkay") == null) {
		sessionStorage.setItem("totalnegkay", 1);
	}
	var total = parseInt(sessionStorage.getItem("totalposkay")) + parseInt(sessionStorage.getItem("totalnegkay"));
	var good = (parseInt(sessionStorage.getItem("totalposkay"))/total)*100;
	var bad = (parseInt(sessionStorage.getItem("totalnegkay"))/total)*100;
	function kanye() {
		document.getElementById("kcontent").innerHTML = obj.people[0].voting;
		document.getElementById("btnkanye").style.display = "block";
		document.getElementById("btnkanyevote").style.display = "none";
		document.getElementById("thumbdownkanye").style.display = "none";
		document.getElementById("thumbupkanye").style.display = "none";
		 if (document.getElementById("kayneup").checked == true) {
		 	sessionStorage.setItem("totalposkay", parseInt(sessionStorage.getItem("totalposkay"))+1);
		 	total = parseInt(sessionStorage.getItem("totalposkay")) + parseInt(sessionStorage.getItem("totalnegkay"));
		 	good = (parseInt(sessionStorage.getItem("totalposkay"))/total)*100;
		 	bad = (parseInt(sessionStorage.getItem("totalnegkay"))/total)*100;
		 } else if(document.getElementById("kaynedown").checked == true) {
			sessionStorage.setItem("totalnegkay", parseInt(sessionStorage.getItem("totalnegkay"))+1);
		 	total = parseInt(sessionStorage.getItem("totalposkay")) + parseInt(sessionStorage.getItem("totalnegkay"));
		 	good = (parseInt(sessionStorage.getItem("totalposkay"))/total)*100;
		 	bad = (parseInt(sessionStorage.getItem("totalnegkay"))/total)*100;		
		 }

			document.getElementById("goodkanye").style.width = good.toFixed(2)+"%";
			document.getElementById("textkayneup").innerHTML = good.toFixed(2)+"%";

			document.getElementById("badkanye").style.width = bad.toFixed(2)+"%";
			document.getElementById("textkaynedown").innerHTML = bad.toFixed(2)+"%";
	}

	function votekanyeagain() {
		document.getElementById("btnkanye").style.display = "none";
		document.getElementById("btnkanyevote").style.display = "";
		document.getElementById("thumbdownkanye").style.display = "";
		document.getElementById("thumbupkanye").style.display = "";
		document.getElementById("kcontent").innerHTML = obj.people[0].content;
	}	
	/* mark */
	if (sessionStorage.getItem("totalposmark") == null) {
	 	sessionStorage.setItem("totalposmark", 1);
	}
	if (sessionStorage.getItem("totalnegmark") == null) {
		sessionStorage.setItem("totalnegmark", 1);
	}

	var totalmark = parseInt(sessionStorage.getItem("totalposmark")) + parseInt(sessionStorage.getItem("totalnegmark"));
	var goodmark = (parseInt(sessionStorage.getItem("totalposmark"))/totalmark)*100;
	var badmark = (parseInt(sessionStorage.getItem("totalnegmark"))/totalmark)*100;

	function votemarkagain() {
		document.getElementById("btnmark").style.display = "none";
		document.getElementById("btnmarkvote").style.display = "";
		document.getElementById("thumbdownmark").style.display = "";
		document.getElementById("thumbupmark").style.display = "";
		document.getElementById("mcontent").innerHTML = obj.people[1].content;
	}	

	function mark() {
		document.getElementById("mcontent").innerHTML = obj.people[1].voting;
		document.getElementById("btnmark").style.display = "block";
		document.getElementById("btnmarkvote").style.display = "none";
		document.getElementById("thumbdownmark").style.display = "none";
		document.getElementById("thumbupmark").style.display = "none";		
		 if (document.getElementById("markup").checked == true) {
		 	sessionStorage.setItem("totalposmark", parseInt(sessionStorage.getItem("totalposmark"))+1);
		 	totalmark = parseInt(sessionStorage.getItem("totalposmark")) + parseInt(sessionStorage.getItem("totalnegmark"));
		 	goodmark = (parseInt(sessionStorage.getItem("totalposmark"))/totalmark)*100;
		 	badmark = (parseInt(sessionStorage.getItem("totalnegmark"))/totalmark)*100;
		 } else if(document.getElementById("markdown").checked == true) {
			sessionStorage.setItem("totalnegmark", parseInt(sessionStorage.getItem("totalnegmark"))+1);
		 	totalmark = parseInt(sessionStorage.getItem("totalposmark")) + parseInt(sessionStorage.getItem("totalnegmark"));
		 	goodmark = (parseInt(sessionStorage.getItem("totalposmark"))/totalmark)*100;
		 	badmark = (parseInt(sessionStorage.getItem("totalnegmark"))/totalmark)*100;		
		 }

			document.getElementById("goodmark").style.width = goodmark.toFixed(2)+"%";
			document.getElementById("textmarkup").innerHTML = goodmark.toFixed(2)+"%";

			document.getElementById("badmark").style.width = badmark.toFixed(2)+"%";
			document.getElementById("textmarkdown").innerHTML = badmark.toFixed(2)+"%";
	}	
	/*Christina*/
	if (sessionStorage.getItem("totalposcris") == null) {
	 	sessionStorage.setItem("totalposcris", 1);
	}
	if (sessionStorage.getItem("totalnegcris") == null) {
		sessionStorage.setItem("totalnegcris", 1);
	}
	var totalcris = parseInt(sessionStorage.getItem("totalposcris")) + parseInt(sessionStorage.getItem("totalnegcris"));
	var goodcris = (parseInt(sessionStorage.getItem("totalposcris"))/totalcris)*100;
	var badcris = (parseInt(sessionStorage.getItem("totalnegcris"))/totalcris)*100;

	function votecrisagain() {
		document.getElementById("btncris").style.display = "none";
		document.getElementById("btncrisvote").style.display = "";
		document.getElementById("thumbdowncris").style.display = "";
		document.getElementById("thumbupcris").style.display = "";
		document.getElementById("ccontent").innerHTML = obj.people[2].content;
	}		

	function cris() {
		document.getElementById("ccontent").innerHTML = obj.people[2].voting;
		document.getElementById("btncris").style.display = "block";
		document.getElementById("btncrisvote").style.display = "none";
		document.getElementById("thumbdowncris").style.display = "none";
		document.getElementById("thumbupcris").style.display = "none";		
		 if (document.getElementById("crisup").checked == true) {
		 	sessionStorage.setItem("totalposcris", parseInt(sessionStorage.getItem("totalposcris"))+1);
		 	totalcris = parseInt(sessionStorage.getItem("totalposcris")) + parseInt(sessionStorage.getItem("totalnegcris"));
		 	goodcris = (parseInt(sessionStorage.getItem("totalposcris"))/totalcris)*100;
		 	badcris = (parseInt(sessionStorage.getItem("totalnegcris"))/totalcris)*100;
		 } else if(document.getElementById("crisdown").checked == true) {
			sessionStorage.setItem("totalnegcris", parseInt(sessionStorage.getItem("totalnegcris"))+1);
		 	totalcris = parseInt(sessionStorage.getItem("totalposcris")) + parseInt(sessionStorage.getItem("totalnegcris"));
		 	goodcris = (parseInt(sessionStorage.getItem("totalposcris"))/totalcris)*100;
		 	badcris = (parseInt(sessionStorage.getItem("totalnegcris"))/totalcris)*100;		
		 }

			document.getElementById("goodcris").style.width = goodcris.toFixed(2)+"%";
			document.getElementById("textcrisup").innerHTML = goodcris.toFixed(2)+"%";

			document.getElementById("badcris").style.width = badcris.toFixed(2)+"%";
			document.getElementById("textcrisdown").innerHTML = badcris.toFixed(2)+"%";
	}

	//malala
	if (sessionStorage.getItem("totalposmal") == null) {
	 	sessionStorage.setItem("totalposmal", 1);
	}
	if (sessionStorage.getItem("totalnegmal") == null) {
		sessionStorage.setItem("totalnegmal", 1);
	}
	var totalmal = parseInt(sessionStorage.getItem("totalposmal")) + parseInt(sessionStorage.getItem("totalnegmal"));
	var goodmal = (parseInt(sessionStorage.getItem("totalposmal"))/totalmal)*100;
	var badmal = (parseInt(sessionStorage.getItem("totalnegmal"))/totalmal)*100;

	function votemalaagain() {
		document.getElementById("btnmala").style.display = "none";
		document.getElementById("btnmalavote").style.display = "";
		document.getElementById("thumbdownmala").style.display = "";
		document.getElementById("thumbupmala").style.display = "";
		document.getElementById("macontent").innerHTML = obj.people[3].content;
	}	

	function mal() {
		 document.getElementById("macontent").innerHTML = obj.people[3].voting;
		document.getElementById("btnmala").style.display = "block";
		document.getElementById("btnmalavote").style.display = "none";
		document.getElementById("thumbdownmala").style.display = "none";
		document.getElementById("thumbupmala").style.display = "none";		 
		 if (document.getElementById("malup").checked == true) {
		 	sessionStorage.setItem("totalposmal", parseInt(sessionStorage.getItem("totalposmal"))+1);
		 	totalmal = parseInt(sessionStorage.getItem("totalposmal")) + parseInt(sessionStorage.getItem("totalnegmal"));
		 	goodmal = (parseInt(sessionStorage.getItem("totalposmal"))/totalmal)*100;
		 	badmal = (parseInt(sessionStorage.getItem("totalnegmal"))/totalmal)*100;
		 } else if(document.getElementById("maldown").checked == true) {
			sessionStorage.setItem("totalnegmal", parseInt(sessionStorage.getItem("totalnegmal"))+1);
		 	totalmal = parseInt(sessionStorage.getItem("totalposmal")) + parseInt(sessionStorage.getItem("totalnegmal"));
		 	goodmal = (parseInt(sessionStorage.getItem("totalposmal"))/totalmal)*100;
		 	badmal = (parseInt(sessionStorage.getItem("totalnegmal"))/totalmal)*100;		
		 }

			document.getElementById("goodmal").style.width = goodmal.toFixed(2)+"%";
			document.getElementById("textmalup").innerHTML = goodmal.toFixed(2)+"%";

			document.getElementById("badmal").style.width = badmal.toFixed(2)+"%";
			document.getElementById("textmaldown").innerHTML = badmal.toFixed(2)+"%";
	}				

	setwidthandporcent();

function setwidthandporcent() {
	document.getElementById("kcontent").innerHTML = obj.people[0].content;
	document.getElementById("goodkanye").style.width = good.toFixed(2)+"%";
	document.getElementById("textkayneup").innerHTML = good.toFixed(2)+"%";
	document.getElementById("badkanye").style.width = bad.toFixed(2)+"%";
	document.getElementById("textkaynedown").innerHTML = bad.toFixed(2)+"%";

	document.getElementById("mcontent").innerHTML = obj.people[1].content;
	document.getElementById("goodmark").style.width = goodmark.toFixed(2)+"%";
	document.getElementById("textmarkup").innerHTML = goodmark.toFixed(2)+"%";
	document.getElementById("badmark").style.width = badmark.toFixed(2)+"%";
	document.getElementById("textmarkdown").innerHTML = badmark.toFixed(2)+"%";

	document.getElementById("ccontent").innerHTML = obj.people[2].content;
	document.getElementById("goodcris").style.width = goodcris.toFixed(2)+"%";
	document.getElementById("textcrisup").innerHTML = goodcris.toFixed(2)+"%";
	document.getElementById("badcris").style.width = badcris.toFixed(2)+"%";
	document.getElementById("textcrisdown").innerHTML = badcris.toFixed(2)+"%";

	document.getElementById("macontent").innerHTML = obj.people[3].content;
	document.getElementById("goodmal").style.width = goodmal.toFixed(2)+"%";
	document.getElementById("textmalup").innerHTML = goodmal.toFixed(2)+"%";
	document.getElementById("badmal").style.width = badmal.toFixed(2)+"%";
	document.getElementById("textmaldown").innerHTML = badmal.toFixed(2)+"%";	
}		




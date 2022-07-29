function changeImage(){
	var img = document.getElementById("imageSourcing");
	var titre = document.getElementById("legendeSourcing");
	img.src="/images/Appro VAE neuf 1.png";
	titre.innerHTML="Sourcing VAE";

	return false;
}

function changeImage2(){
	var img = document.getElementById("imageSourcing");
	img.src="/images/Appro BAE recyclé 1.png";
	var titre = document.getElementById("legendeSourcing");
	titre.innerHTML="Sourcing B.A.E"
	return false;
}

function changeEnvironnement(){
	var sec = document.getElementById("sectionEnvironnement");
		// sec.innerHTML='<div class="col-6"></div>	<div class="col-6 fs-2"> <div id="titre" class="row">Environnement</div> <div class="d-grid gap-2 d-md-flex justify-content-md-end pt-1"> <a class="btn btn-primary" onclick="changeEnvironnement2()" href="#" role="button">Infographie</a>	</div> </div><div id="schema" class="col-6"> <h5>Bicyclette à Assistance Electrique Remade</h5> <ul> <li>104 kg de CO<sub>2</sub> pour sa fabrication</li> <li> 10 kg récupérés</li> <li>10 kg de composants</li> <li>5 000 km parcourus par les composants</li> <li>20 kg de B.A.E tout équipée</li> </ul> </div> <div id="schema" class="col-6"> <h5>VAE de ville neuf (moyenne)</h5> <ul> <li>240 kg de CO<sub>2</sub> pour sa fabrication</li> <li> 0 kg récupéré</li> <li>24 kg de composants</li> <li>10 000 km parcourus par les composants</li> <li>24 kg de B.A.E tout équipé</li> </ul> </div>';
		sec.innerHTML= '<div class="col-6"></div>'+
			'<div class="col-6 fs-2">'+
				'<div id="titre" class="row">Environnement</div>'+				
				'<div class="d-grid gap-2 d-md-flex justify-content-md-end pt-1">'+						  	
			  		'<a class="btn btn-primary" onclick="changeEnvironnement2()" role="button">Infographie</a>'+
				'</div>'+
			"</div>"+
			'<div id="schema" class="col-6">'+
				
				"<h3>Bicyclette à Assistance Electrique Remade</h3>"+
        "<ul>"+
          "<li> <strong> 104 kg de CO<sub>2</sub> </strong> pour sa fabrication</li>"+
          "<li> 10 kg récupérés</li>"+
          "<li> <strong>10 kg de composants</strong></li>"+
          "<li> <strong>5 000 km parcourus </strong> par les composants</li>"+
          "<li>20 kg de B.A.E tout équipée</li>"+
        "</ul>"+				
			"</div>"+
			'<div id="schema" class="col-6">'+
				
				"<h3>VAE de ville neuf (moyenne)</h3>"+
        "<ul>"+
          "<li> <strong>240 kg de CO<sub>2</sub></strong> pour sa fabrication</li>"+
          "<li> 0 kg récupéré</li>"+
          "<li><strong>24 kg de composants</strong></li>"+
          "<li><strong>10 000 km parcourus</strong> par les composants</li>"+
          "<li>24 kg de B.A.E tout équipé</li>"+
        "</ul>"+				
			"</div>";

}

function changeEnvironnement2(){
	var sec = document.getElementById("sectionEnvironnement");
	sec.innerHTML='<div class="col-6"></div> <div class="col-6 fs-2">'+
				'<div id="titre" class="row">Environnement</div>'+				
				'<div class="d-grid gap-2 d-md-flex justify-content-md-end pt-1">'+					  	
			  		'<a class="btn btn-primary" onclick="changeEnvironnement()" role="button">En savoir plus</a>'+
				'</div>'+
			'</div>'+
			'<div id="schema" class="col-3">'+
				'<img src="/images/Vélo initial 1.png">'+
				"<h5>Bicyclette d'origine</h5>"+
				"<p>déjà fabriquée en France => 0 émission de CO<sub>2</sub> supplémentaire</p>"+
			"</div>"+
			'<div id="schema" class="col-3">'+
				'<img src="/images/pièces récupérées 1.png">'+
				'<h5>Pièces conservées</h5>'+
				"<p>toutes celles qui n'altèrent pas la fiabilité de la bicyclette</p>"+
			"</div>"+
			'<div id="schema" class="col-3">'+
				'<img src="/images/Composants approvisionnés 1.png">'+
				"<h5>Composants achetés</h5>"+
				"<p>pour fiabiliser et électrifier le vélo, avec un effort permanent de sourcing au plus près</p>"+
			"</div>"+
			'<div id="schema" class="col-3">'+
				'<img src="/images/BAE final 1.png">'+				
				"<h5>Bicyclette à Assistance Electrique</h5>"+
				"<p>un maximum d'opérations réalisées localement selon les exigences Européennes en matière d'environnement</p>"+
			'</div>';
}
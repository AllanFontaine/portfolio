function getLoad(){
    getAge();  
}

/*Charge dynamiquement mon âge*/
function getAge(){
    var birth = new Date(1996,4,28);
    var currentDate = new Date;
    var ageTime = currentDate.getTime() - birth.getTime();
    var ageDate = new Date(ageTime);
    var age = ageDate.getUTCFullYear()-1970;
    document.getElementById("age").innerHTML=age;
}

/*Collapse Table*/
function collapseTable() {
  var coll = document.getElementsByClassName("collapsible");
  coll[0].classList.toggle("active");
  var content = coll[0].nextElementSibling;
  if (content.style.display !== "none") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

/*Reload de la page*/
function reload(element){
  let subject = element.id;
  document.getElementById('subject').value=subject; //place le sujet dans la barre de sujet du formulaire
  document.getElementsByClassName('section-show')[0].classList.remove('section-show'); //enleve l'affichage de la page current
  document.getElementById('contact').classList.add('section-show');
  document.getElementsByClassName('nav-link active')[0].classList.remove('active');
  document.getElementById('goContact').classList.add('active');
  //setTimeout(() => {document.location.reload()}, 200);
}

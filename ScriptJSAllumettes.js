let match = 50;

function askANumber(){
    let questionPlayer = parseInt(prompt("Mode Multijoueurs: choisis le nombre de joueur"))
    console.log(questionPlayer);
    return questionPlayer; 
}


function Player1(x){

   while(match > 0){
   for(i=1; i<=x; i++){

   let question = parseInt(prompt("Joueur: " + i + " Choisis un nombre d'allumettes entre 1 et 6"));
   console.log(question);
   
    if(question < 1 || question > 6){
        alert("Erreur: Choisis un nombre entre 1 et 6");
        Player1(x); 
    }
    if(match < question){
        alert("Erreur: Choisis un nombre plus petit");
        Player1(x);
    }   
    else{
        match = match - question;
        console.log(match);
     }
    if(match == 0){
        alert("Joueur " + i + " Bravo tu as gagné!"); 
        match = 50,
        Player1(x);
     } 
   }
  }
}


let x = askANumber();
Player1(x);



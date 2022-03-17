let match = 50;

function Player1(){

   while(match > 0){
   let question = parseInt(prompt("Choisis un nombre d'allumettes entre 1 et 6"));
   console.log(question);
   
    if(question < 1 || question > 6){
        alert("Erreur: Choisis un nombre entre 1 et 6");
        askANumber(); 
    }
    if(match < question){
        alert("Erreur: Choisis un nombre plus petit");
        askANumber();
     }   
    else{
        match = match - question;
        console.log(match);
     }
    if(match == 0){
        alert("Bravo tu as gagné!"); 
        //Réinitialise match à 50 avant de pouvoir rappeller la fonction askANumber() et relancer une partie//
        match = 50,
        Player1();
     } 
   }
}

Player1();


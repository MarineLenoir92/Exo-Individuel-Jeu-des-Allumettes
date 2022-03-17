let match = 50;


function Player1(){

   while(match > 0){
   let question = parseInt(prompt("Joueur 1: Choisis un nombre d'allumettes entre 1 et 6"));
   console.log(question);
   
    if(question < 1 || question > 6){
        alert("Erreur: Choisis un nombre entre 1 et 6");
        Player1(); 
    }
    if(match < question){
        alert("Erreur: Choisis un nombre plus petit");
        Player1();
     }   
    else{
        match = match - question;
        console.log(match);
        Player2();
     }
    if(match == 0){
        alert("Bravo tu as gagné!"); 
        //Réinitialise match à 50 avant de pouvoir rappeller la fonction askANumber() et relancer une partie//
        match = 50,
        Player1();
     } 
   }
}

function Player2(){

    while(match > 0){
    let question = parseInt(prompt("Joueur 2: Choisis un nombre d'allumettes entre 1 et 6"));
    console.log(question);
    
     if(question < 1 || question > 6){
         alert("Erreur: Choisis un nombre entre 1 et 6");
         Player2(); 
     }
     if(match < question){
         alert("Erreur: Choisis un nombre plus petit");
         Player2();
      }   
     else{
         match = match - question;
         console.log(match);
         Player1();
      }
     if(match == 0){
         alert("Bravo tu as gagné!"); 
         //Réinitialise match à 50 avant de pouvoir rappeller la fonction askANumber() et relancer une partie//
         match = 50,
         Player2();
      } 
    }
 }

Player1();
Player2();


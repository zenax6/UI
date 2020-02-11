/// Parbaudit failu izmaiņas   -- git status
//  Ievietot visus failus -- git add .
//  Ievietot commentāru  
//  par tapšanas brīdi --  git commit -m "RAKSTI KOMENTU ŠEIT"
//  Ievietot šo internetā -- git push

//----------------------------
/////////// UZDEVUMS 1 \\\\\\\\\\\\
function tekstaApgriesana(str) {
    return str.split("").reverse().join("");
}
console.log(tekstaApgriesana("JEVGENIJS ZAHAROVS"));
// rezultats :  'SVORAHAZ SJINEGVEJ'
console.log("------------");
/////////// UZDEVUMS 2 \\\\\\\\\\\\
function salidzinasana(num1, num2) {
    if(num1==5||num2==5||num1+num2==5){
        return true;
    }else{
        return false;
    }
}
console.log(salidzinasana(5,1) + "  5/1");
console.log(salidzinasana(2,5)+ "  2/5");
console.log(salidzinasana(4,1)+ "  4/1");
console.log(salidzinasana(3,1)+ "  3/1");
console.log("------------");
/////////// UZDEVUMS 3 \\\\\\\\\\\\
function arycount(array) {
    var count=0;
    for(var i = 0; i < array.length; ++i){
       count = count+array[i];
    }
    return count;
}

console.log(arycount([1,2,3,4,5])+ " 1,2,3,4,5");
console.log("------------");
/////////// UZDEVUMS 4 \\\\\\\\\\\\
function uzd4 (array){
    var a,b;
    var c=0; 
    if (array.length!=0){
        a=true;
    }
    if (array.length<3){
       
    }else{
        console.log("ARRAY SIZE IS >= 3 : "+array.length);
        b=true;
    }
    for (var i=0 ; i< array.length;i++){
          
        if (isNaN(array[i])){
             
            }
            else
            {
                
                c++;
            }
    }
    if(a&&b&&c==array.length){
        var count=0;
        for(var i = 0; i < array.length; ++i){
           count = count+array[i];
        }
        console.log("Summa ir  "+count);
    }
    if (!a){
        console.log("ERROR A: ARRAY is empty ");
    }
    if (!b){
        console.log("ERROR B :ARRAY SIZE IS LESS THAN 3 . Array size: "+array.length);
    }
    if(!c){
            console.log("ERROR C : NOT ENOUGH NUMBERS OR OTHER SIMBOLS IN ARRAY ");
    }
    console.log("////////////////////")
    
}

uzd4([]);
uzd4([1,2,"a"]);
uzd4([1,4]);
uzd4([1,2,3]);
console.log("------------");
/////////// UZDEVUMS 5 \\\\\\\\\\\\

// WAT
function uzd5(x,y){
if (x==y){
return x+y;
}else{
return 3*(x+y);
}
}

console.log(uzd5(2,2));
console.log(uzd5(2,3));
console.log("------------");
/////////// UZDEVUMS 6 \\\\\\\\\\\\
function uzd6(L,P){
if (L==""||P==""||P.length<12){
console.log("ERROR SOMETHNIG WENT WRONG")
}else{
    console.log("LOGIN : "+L);
    console.log("PASSWORD : "+ P);
}
}
uzd6("THENAME","PASSWORD1234");
console.log("______________");
uzd6("SUPERDUPER","PAROLE");
console.log("______________");
uzd6("SUPERDUPER","");
console.log("______________");
uzd6("","PAROLE");
console.log("------------");

function uzd7(ARRAY){
    var mid=[] ;
    var side=[] ;
    var string1=""; 
    var string2=""; 
    for ( i = 1; i < ARRAY.length-1; i++) {
      mid[i]=ARRAY[i];
        
    }
    side[0]=ARRAY[0];
    if (ARRAY.length>1)
    {

        side[1]=ARRAY[ARRAY.length-1];
    }   
    console.log("NEW :"+mid.toString()+ "    OLD :"+side.toString());

}
uzd7([1,2,3,4,"a","b","c","d"]);
uzd7([1,2]);
uzd7([1]);
console.log("------------");
var Raksts = {virsraksts,Autors,saturs,patik};

  //8.Izveidot  objektu Raksts ar šādām īpašībām: 
 // virsraksts,  autors,  saturs,  patik.
 // Īpašībai patīk jābūt masīvam, 
  // kurā iespējams pievienot un dzēst elementus. 
   // Izveidot metodes: lasīšanas ilgums, pieskirt
    //Patik un nonemt Patik. 
// Lasīšanas ilgums jāaprēķina izdalot satura daļas simbolu skaitu
// ar 1500 (vidējais simboluskaits minūtē)un rezultātu izvadīt minūtēs un sekundēs. 
       //Metode pieskirt Patik pievieno unikālu id masīvā patik. 
        //Metode nonemt Patik izdzēš no masīva patik elementu ar unikālu id.
  //9.Izveidot klasi Uznemums ar īpašībām:  nosaukums,  forma  (sia,  as,  mu,  bo),   registrācijas  dati(numurs,  datums), juridiska  adrese    (iela,  numurs,  pilsēta, novads,  valsts,  pasta  indekss),   tālrunis,nodokļu parādi, datu atjaunošanasdatums.Pievienot tai  get/setmetodes. Get Paradi  metode  izvadadatu atjaunošanas datumu un nodokļu parādu.  Set Paradi ļauj nomainīt nodokļu parādu lielumu un datu atjaunošanas datumu.
 // 10.Izveidot   lasi SIA, kas manto klases Uzņēmums īpašības un metodes. Iestātīt īpašībai  forma  vērtību ‘sia’un  pievienot  papildus  īpašības:pamatkapitāls,dibinātājs (masīvs ar objektiem (vārds, uzvārds,  personas kods). Pievienot metodi pievienotDibinataju un   dibinatajuSaraksts,   kura   izvadauzņēmuma nosaukumu, reģistrācijasdatumuun dibinātāju datus

 // GIT BASH test changes at 9:00

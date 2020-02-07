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

/////////// UZDEVUMS 1 \\\\\\\\\\\\
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

/////////// UZDEVUMS 3 \\\\\\\\\\\\
function arycount(array) {
    var count=0;
    for(var i = 0; i < array.length; ++i){
       count = count+array[i];
    }
    return count;
}

console.log(arycount([1,2,3,4,5])+ " 1,2,3,4,5");

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

/////////// UZDEVUMS 5 \\\\\\\\\\\\

// WAT
function uzd5(){

}
/////////// UZDEVUMS 6 \\\\\\\\\\\\
function uzd6(){

}

//5.Izveidot funkciju, kura atgriež divu doto veselo skaitļu summu, XXX
//ja tie nesakrīt vai trīskāršo skaitļu summu, ja tie sakrīt.
//6.Izveidot  funkciju, kas saņem lietotāja vārdu unparoli.Ja kāds no mainīgajiem nav ievadīts vai paroles garums ir mazāks par 12 simboliem, izvada atbilstošo kļūdas paziņojumu.
 //7.Izveidot  funkciju,  kas no dotā masīva izņempirmo un pēdējo elementuun atgriež jaunu masīvu.  Jaunā masīva elementu skaits var būt viens vai divi.   Funkcija ieviest nepieciešamās pārbaudesun paziņojumu izvadi.
  //8.Izveidot  objektu Raksts ar šādām īpašībām: virsraksts,  autors,  saturs,  patik.Īpašībaipatīkjābūt masīvam,  kurā iespējams pievienot un dzēst elementus.  Izveidot metodes: lasīšanas ilgums, pieskirtPatik un nonemtPatik.   Lasīšanas ilgums jāaprēķina izdalot satura daļas simbolu skaitu   ar 1500 (vidējais simboluskaits minūtē)un rezultātu izvadīt minūtēs un sekundēs.  Metode pieskirtPatik pievienounikāluid masīvā patik.  Metode nonemtPatik izdzēš no masīva patik elementuar unikālu id.
  //9.Izveidot klasi Uznemums ar īpašībām:  nosaukums,  forma  (sia,  as,  mu,  bo),   registrācijas  dati(numurs,  datums), juridiska  adrese    (iela,  numurs,  pilsēta, novads,  valsts,  pasta  indekss),   tālrunis,nodokļu parādi, datu atjaunošanasdatums.Pievienot tai  get/setmetodes. Get Paradi  metode  izvadadatu atjaunošanas datumu un nodokļu parādu.  Set Paradi ļauj nomainīt nodokļu parādu lielumu un datu atjaunošanas datumu.
 // 10.Izveidot   lasi SIA, kas manto klases Uzņēmums īpašības un metodes. Iestātīt īpašībai  forma  vērtību ‘sia’un  pievienot  papildus  īpašības:pamatkapitāls,dibinātājs (masīvs ar objektiem (vārds, uzvārds,  personas kods). Pievienot metodi pievienotDibinataju un   dibinatajuSaraksts,   kura   izvadauzņēmuma nosaukumu, reģistrācijasdatumuun dibinātāju datus
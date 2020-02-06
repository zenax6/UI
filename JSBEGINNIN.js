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
tekstaApgriesana("JEVGENIJS ZAHAROVS");
// rezultats :  'SVORAHAZ SJINEGVEJ'

/////////// UZDEVUMS 1 \\\\\\\\\\\\
function salidzinasana(num1, num2) {
    if(num1==5||num2==5||num1+num2==5){
        return true;
    }else{
        return false;
    }
}
salidzinasana(5,1);
salidzinasana(2,5);
salidzinasana(4,1);
salidzinasana(3,4);
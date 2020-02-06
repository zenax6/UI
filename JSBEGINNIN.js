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

/////////// UZDEVUMS 1 \\\\\\\\\\\\
function arycount(array) {
    var count=0;
    for(var i = 0; i < array.length; ++i){
       count = count+array[i];
    }
    return count;
}

console.log(arycount([1,2,3,4,5])+ " 1,2,3,4,5");
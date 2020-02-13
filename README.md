# FOR LLU UI PROJECT

One Paragraph of project description goes here

## UZD 1
```
function tekstaApgriesana(str) {
    return str.split("").reverse().join("");
}
console.log(tekstaApgriesana("JEVGENIJS ZAHAROVS"));
// rezultats :  'SVORAHAZ SJINEGVEJ'
console.log("------------");
```

## UZD 2
```
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
```


## UZD 3
```
function arycount(array) {
    var count=0;
    for(var i = 0; i < array.length; ++i){
       count = count+array[i];
    }
    return count;
}

console.log(arycount([1,2,3,4,5])+ " 1,2,3,4,5");
console.log("------------");
```

## UZD 4
```
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
```

## UZD 5
```

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
```
## UZD 6
```
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
```
## UZD 7
```
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
```
## UZD 8
```
var virsraksts;
var Autors;
var saturs;
var patik;

var Raksts = {virsraksts,Autors,saturs,patik};

Raksts.virsraksts="THE TITLE";
Raksts.Autors ="J.ZAHAROVS";
Raksts.saturs="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

Raksts.patik=[];//Īpašībai patīk jābūt masīvam, kurā iespējams pievienot un dzēst elementus.
function lasisanasilgums(){// jāaprēķina izdalot satura daļas simbolu skaitu ar 1500 (vidējais 
                            //simboluskaits minūtē)un rezultātu izvadīt minūtēs un sekundēs. 
var time =((Raksts.saturs.length / 1500)*60);
var minutes = Math.floor(time / 60);
var seconds = time - minutes * 60;
console.log("Lasišanas ilgums "+ minutes+" minutes un "+seconds+" sekundes");
}


function pieskirtPatik(patikString){//pievieno unikālu id masīvā patik
    Raksts.patik.push(patikString);
    
}
function display(){
    for ( i = 0; i < Raksts.patik.length; i++) {
        console.log(Raksts.patik[i]);
    }
}
function nonemtPatik(idToDelete){//izdzēš no masīva patik element uar unikālu id.
          for ( i = 0; i < Raksts.patik.length; i++) {
              
              if(i==idToDelete){
                console.log("Deleted id  : "+idToDelete);   
                Raksts.patik.splice(idToDelete,1)
              }else{
                console.log("NO ID WITH : "+idToDelete);
              }
          }
    
        }
    
lasisanasilgums()
pieskirtPatik("TEST1");
pieskirtPatik("TEST2");
pieskirtPatik("TEST3");
pieskirtPatik("TEST4");
nonemtPatik(3);
display();
console.log("------------");
```
## UZD 9
```
class Uznemums {
    
    constructor(Nosaukums,Forma,Regdat_num,Regdat_dat,adrese_iela,adrese_numurs,adrese_pilseta,adrese_novads,adrese_valsts,adrese_pastaindex,
        talrunis,nodokluparadi,datuatjaunosanasdatums ) {
      this.UznemumaNosaukums = Nosaukums;
        this.forma = Forma;
        this.regnum = Regdat_num;
        this.regdati = Regdat_dat;
        this.iela = adrese_iela;
        this.numurs = adrese_numurs;
        this.pilseta = adrese_pilseta;
        this.novads = adrese_novads;
        this.valsts = adrese_valsts;
        this.pasts = adrese_pastaindex;
        this.Talrunis=talrunis;
        this.nod_paradi=nodokluparadi;
        this.datuatjaun=datuatjaunosanasdatums;

        this.GETParadi = function () { // it can access private members
            console.log("Datu atjaunošanas datums: "+this.datuatjaun + " Nodokļu parāds: "+this.nod_paradi);
          };
          this.SETParadi = function (datuatjn,nodpar) { // it can access private members
           this.datuatjaun=datuatjn;
           this.nod_paradi=nodpar;
          };
        
      }
  }
  jaunsuznmenums=new Uznemums("UZNMnusaukums","FORMA","REGNUm","REGDAT",
  "iela","numurs","pilseta","novads","valsts","pasts"
  ,"28888888","25$",2019);
function UznemumaIzvade(Uznemums){
    console.log(Uznemums.UznemumaNosaukums );
    console.log(Uznemums.forma );
    console.log(Uznemums.regnum );
    console.log(Uznemums.regdati );
    console.log(Uznemums.iela );
    console.log(Uznemums.numurs );
    console.log(Uznemums.pilseta );
    console.log(Uznemums.novads );
    console.log(Uznemums.valsts );
    console.log(Uznemums.pasts );
    console.log(Uznemums.Talrunis );
    console.log(Uznemums.nod_paradi );
    console.log(Uznemums.datuatjaun );
    
}

jaunsuznmenums.GETParadi();
jaunsuznmenums.SETParadi(2011,"500 $");
jaunsuznmenums.GETParadi();
  console.log("------------");

```
## UZD 10
```
 class SIA extends Uznemums{
    constructor (pamatkapitals){
        super();
        this.pamkap = pamatkapitals;
        this.dibin_vards;
        this.dibin_uzv;
        this.dibin_pers;
        this.forma="SIA";
        this.UznemumaNosaukums="UZNEMUMA NOS";
        this.regdati="REG DATUMS";
        
    //dibitanajts - masīvs ar objektiem (vārds, uzvārds,  personas kods)
    this.pievienotDibinataju = function (dibinatajs,dibinatajsuzv,dibinatajspers) { // it can access private members
       this.dibin_vards=dibinatajs;
       this.dibin_uzv=dibinatajsuzv;
       this.dibin_pers=dibinatajspers;
       
     };
      this.dibinatajuSaraksts = function () { // it can access private members
        console.log(this.UznemumaNosaukums+" "+this.regdati+ " "+
                    this.dibin_vards +" "+this.dibin_uzv+ " "+this.dibin_pers+ " "+this.var1);
      };
  }
}
jaunsSIA=new  SIA (5);
jaunsSIA.pievienotDibinataju(["kautkas",123,123,"YES YES YES"],"Jevgenijs","Zaharovs","123123-123321");
jaunsSIA.dibinatajuSaraksts();



```
## Versioning
* FIRST FULL VERSION RELEASE - *13-02-2020

## Authors

* **Jevgeņijs Zaharovs** 

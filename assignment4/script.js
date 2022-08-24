var names=new Array();
names[0]="Aaqib";
names[1]="Umer";
names[2]="Zeeshan";
names[3]="Rashid";
names[4]="tajamul";
names[5]="aadil";
names[6]="Asrar";
names[7]="Hassan";
names[8]="Amaan";
names[9]="Ishfaq";
console.log(names[0].charAt(0));
for (var i=0 ; i<names.length;i++)
 {
    if(names[i].charAt()==='A'||names[i].charAt()==='a'){
        console.log("Goodbye"+names[i]);
    }
    else{
        console.log("hello"+names[i]);
    }
}
 
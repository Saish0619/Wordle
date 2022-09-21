const word=["HAPPY","PIXEL","ZEBRA","LEMON","FLOAT","SNAKE","MIRAJ","OASIS"];
//const word=["HAPPY"];
let upper = [];
let rw = [];
let z;
let colora;
var exe=false;
var slct;

// var input = document.getElementById("content1");
// input.addEventListener("keydown", function (e) {
//  if (e.key === 'Enter') {  
//     wordleEvaluate_1();
//  }
// });

// document.getElementById("w5").onkeypress = function(event){
//     if (event.keyCode == 13 || event.which == 13){
//         alert("You are clicked");
//     }
// };


function selectWord() 
{
   
    if(exe!=true){
        slct = word[Math.floor(Math.random()*word.length)];
        // console.log(slct);
        exe=true;
    }
        // console.log(exe);
        console.log("once seleected "+slct);
        return(slct);     
}
    
//let colora = document.getElementsByClassName('abc');

function changeTab(e,pre,curr,nxt)
{
    var current=document.getElementById(curr).value.length;
    var mlength=document.getElementById(curr).getAttribute('maxlength');
    // console.log(current);
    console.log(e.key);

    if(current=="1" && e.key=='Enter'){
        if(curr=='w5'){
            wordleEvaluate_1();
            document.getElementById('w6'),focus();
        }else if(curr=='w10'){
            wordleEvaluate_2();
        }else if(curr=='w15'){
            wordleEvaluate_3();
        }else if(curr=='w20'){
            wordleEvaluate_4();
        }else if(curr=='w25'){
            wordleEvaluate_5();
        }
     }
    else if(current==mlength)
    {
        if(nxt!="")
        {
            document.getElementById(nxt).focus();
        }
     }
    else if(e.key=='Backspace')
    {
        if(pre!="")
        {
            document.getElementById(pre).focus();
        }
     }
}

function wordleEvaluate_1()
{
    upper=[];
    var arr1=[];

    // var arr1=[];
    // var arr1=[];
    //let user = new Array();
    
    let colorip = document.getElementsByClassName('abc1');
    
    //document.getElementById("sample").innerHTML = subjects;
    
    arr1[0]= document.getElementById("w1").value;
    arr1[1]= document.getElementById("w2").value;
    arr1[2]= document.getElementById("w3").value;
    arr1[3]= document.getElementById("w4").value;
    arr1[4]= document.getElementById("w5").value;


    if(arr1==""){
        alert("cannot be empty");
    }
    else
    {
        arr1.forEach(element => {
            upper.push(element.toUpperCase());
          });
    }  
    // console.log("upper value in btn 1"+upper);
   
    wordle(upper,colorip);

}


function wordleEvaluate_2()
{
    
    upper=[];
    var arr2=[];

    let colorip = document.getElementsByClassName('abc2');

    arr2[0]= document.getElementById("w6").value;
    arr2[1]= document.getElementById("w7").value;
    arr2[2]= document.getElementById("w8").value;
    arr2[3]= document.getElementById("w9").value;
    arr2[4]= document.getElementById("w10").value;

    if(arr2==""){
        alert("cannot be empty");
    }
    else
    {
        arr2.forEach(element => {
            upper.push(element.toUpperCase());
          });
          console.log(upper);
    }
    wordle(upper,colorip);

}

function wordleEvaluate_3()
{
    
    upper=[];
    var arr2=[];

    let colorip = document.getElementsByClassName('abc3');

    arr2[0]= document.getElementById("w11").value;
    arr2[1]= document.getElementById("w12").value;
    arr2[2]= document.getElementById("w13").value;
    arr2[3]= document.getElementById("w14").value;
    arr2[4]= document.getElementById("w15").value;

    if(arr2==""){
        alert("cannot be empty");
    }
    else
    {
        arr2.forEach(element => {
            upper.push(element.toUpperCase());
          });
          console.log(upper);
    }
    wordle(upper,colorip);

}

function wordleEvaluate_4()
{
    
    upper=[];
    var arr2=[];

    let colorip = document.getElementsByClassName('abc4');

    arr2[0]= document.getElementById("w16").value;
    arr2[1]= document.getElementById("w17").value;
    arr2[2]= document.getElementById("w18").value;
    arr2[3]= document.getElementById("w19").value;
    arr2[4]= document.getElementById("w20").value;

    if(arr2==""){
        alert("cannot be empty");
    }
    else
    {
        arr2.forEach(element => {
            upper.push(element.toUpperCase());
          });
          console.log(upper);
    }
    wordle(upper,colorip);

}

function wordleEvaluate_5()
{
    
    upper=[];
    var arr2=[];

    let colorip = document.getElementsByClassName('abc5');

    arr2[0]= document.getElementById("w21").value;
    arr2[1]= document.getElementById("w22").value;
    arr2[2]= document.getElementById("w23").value;
    arr2[3]= document.getElementById("w24").value;
    arr2[4]= document.getElementById("w25").value;

    if(arr2==""){
        alert("cannot be empty");
    }
    else
    {
        arr2.forEach(element => {
            upper.push(element.toUpperCase());
          });
          console.log(upper);
    }
    wordle(upper,colorip);

}
  
function wordle(upper,colorip)
{
    console.log("upper value in wordle function"+upper);
    colora=colorip;
    let rw =selectWord();
    //const rw = word;    
    console.log("rw 0,1 "+rw[3]);
    console.log("upper "+upper[3]);

    for(let j=0;j<=4;j++)
    {
        if(rw[j][0] == upper[j][0])
        {
            console.log("rw "+rw[0][j]+" upper "+upper[0][j]);
            colora[j].style.backgroundColor = "#299617";
            
            //alert("GREEN");
        }
        else if(rw[j][0] != upper[j][0])
        {  
            z=1;
            for(let i=0;i<5;i++)                        
            {
                if(upper[j][0]==rw[i][0])
                {
                    console.log("rw "+rw[0][i]+" upper "+upper[0][j]);
                    colora[j].style.backgroundColor = "yellow";
                    break;
                    // alert("YELLOW");
                }
                else if(z==5) 
                {    
                    console.log("rw "+rw[0][i]+" upper "+upper[0][j]);
                    colora[j].style.backgroundColor = "#a9a9a9";                            
                    //alert("GREY");                                 
                }
                z=z+1;
            }
        }
            
    }
}    

    


    
    // function getcolor(){
    //     document.getElementById("wordid1").backgrounColor

    // }



    // let x=loop();
    // // if(a==word[0][0])
    // // {
    // //     alert("Success");
    // // }

    // function loop()
    // {
       
            
    // }
     
        //return;


// function checkFilled() {
//     var inputVal = document.getElementById("subEmail").value;
//     if (inputVal == "") {
//         inputVal.style.backgroundColor = "yellow";
//                 }
// //         }   for(let i=0;i<4;i++){
//            for(let j=0;j<4;j++){
//             if(word[0][i] == user[0][j]){
//                 if(i==j){
//                 alert("GREEN");
//                 break;
//                 }
//                 else{
//                     alert("YELLOW");
//                 }
//             }
//             else{
//                 alert("GREY");
//             }
            
//        }
//     }




async function search(){


    try{
let movie =document.querySelector("#se").value;
let res=await fetch(`http://www.omdbapi.com/?apikey=d806bd70&s=${movie}&minResults=25`);
let data= await res.json();
return data.Search;

    }
    catch(err){
        console.log(err);
    }

}
async function main(){
    try{
var data=await search();
if(data==undefined){
    return false;

}
console.log(data);
appendata(data)

    }catch(err){
        console.log(err);
    }
}



function appendata(data){
var d=document.querySelector("#adddata");
d.innerHTML="";

data.map(function (ele){

var div1=document.createElement("div");

var image=document.createElement("img")
image.setAttribute("src",ele.Poster);
image.style.height="60%";
image.style.width="100%"
var p1=document.createElement("p");
p1.textContent=ele.Title;

var p2=document.createElement("p")
p2.textContent= `Year - ${ele.Year}`;

var p3=document.createElement("p")
p3.textContent=`Rating - ${(Math.random()*5).toFixed(1)}`

div1.append(image,p1,p2,p3);
d.append(div1);
});


}
let bon;
function bounce(fun,delay){
if(bon){
    clearTimeout(bon);
}
 bon=setTimeout(function(){

fun();

},delay);

}
function sideshow(){
var data_div=document.querySelector("#data");

let data_arr=JSON.parse(localStorage.getItem("image"))
//console.log(data_arr);

let i=0;
setInterval(() => {
    if(i==data_arr.length){
        i=0;
    }

data_div.src=data_arr[i];
i=i+1;
console.log(data_arr[i]);
}, 2000);

}
sideshow();










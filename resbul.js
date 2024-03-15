function addedu(){
	let newtext=document.createElement("textarea");
	newtext.classList.add("edu");
	newtext.setAttribute("placeholder","enter here");
	let old=document.getElementById("edu_btn");
	old.before(newtext);
}
function addproject(){
	let newtext=document.createElement("textarea");
	newtext.classList.add("pro");
	newtext.setAttribute("placeholder","enter here");
	let old=document.getElementById("project_btn");
	old.before(newtext);
}
function addworkexp(){
	let newtext=document.createElement("textarea");
	newtext.classList.add("wrkex");
	newtext.setAttribute("placeholder","enter here");
	let old=document.getElementById("workexp_btn");
	old.before(newtext);
}
function addskills(){
	let newtext=document.createElement("textarea");
	newtext.classList.add("skl");
	newtext.setAttribute("placeholder","enter here");
	let old=document.getElementById("skills_btn");
	old.before(newtext);
}
function creresume(){
	document.querySelector("body").style.backgroundColor="white";
let name=document.querySelector("#name").value;
document.querySelector("#tname").innerHTML=name;
let email=document.querySelector("#email").value;
document.querySelector("#temail").innerHTML=email;
let phnum=document.querySelector("#phnum").value;
document.querySelector("#tphno").innerHTML=phnum;
let address=document.querySelector("#address").value;
document.querySelector("#taddress").innerHTML=address;
let linkedin=document.querySelector("#linkdin").value;
document.querySelector("#tlinkdin").innerHTML=linkedin;
let github=document.querySelector("#github").value;
document.querySelector("#tgithub").innerHTML=github;
let twitter=document.querySelector("#twitter").value;
document.querySelector("#ttwitter").innerHTML=twitter;
let profile =document.querySelector("#professionalsummary").value;
document.querySelector("#tprofile").innerHTML=profile;
var str="";
let education=document.querySelectorAll(".edu");
for(let i of education){
	str=str+`<li>${i.value}</li>`;
}
document.querySelector("#teducation").innerHTML=str;
str="";
let workexp =document.querySelectorAll(".wrkex");
for(let i of workexp){
	str=str+`<li>${i.value}</li>`;
}
document.querySelector("#twork").innerHTML=str;
str="";
let skills=document.querySelectorAll(".skl");
for(let i of skills){
	str=str+`<li>${i.value}</li>`;
}
document.querySelector("#tskills").innerHTML=str;
str="";
let projects=document.querySelectorAll(".pro");
for(let i of projects){
	str=str+`<li>${i.value}</li>`;
}
document.querySelector("#tproject").innerHTML=str;
document.querySelector("#head").style.display="none";
document.querySelector("#infout").style.display="none";
document.querySelector("#temp").style.display="block";
let printtemplate=document.querySelector("#printtemplate");
printtemplate.addEventListener("click",(e)=>{document.querySelector("#tprint").style.display="none";
});
printtemplate.addEventListener("click",(e)=>{window.print();
});
}
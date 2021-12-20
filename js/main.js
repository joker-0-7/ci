let main = document.querySelectorAll("h6")[0];
let para = document.querySelectorAll(".para")[0];
let Main = document.querySelectorAll("h6")[1];
let Para = document.querySelectorAll(".para")[1];
let mAin = document.querySelectorAll("h6")[2];
let pAra = document.querySelectorAll(".para")[2];
let login = document.getElementById("login");
let main = document.createElement("dialog");
let head = document.createElement( "h1" );
let paragh = document.createTextNode( "يرجي التواصل معنا من خلال وسائل التواصل الإجتماعي" )
head.append( main )
paragh.append(head)
main.addEventListener("click", (eo) => {
  para.classList.toggle("active");
});
Main.addEventListener("click", (eo) => {
  Para.classList.toggle("active");
});
mAin.addEventListener("click", (eo) => {
  pAra.classList.toggle("active");
});
login.addEventListener("click", (eo) => {
  document.createElement("dialog");
});

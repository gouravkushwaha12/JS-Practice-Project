const button=document.getElementById("btn");
const listItem=document.getElementById("list-item");
const inputbox=document.getElementById("input_box")
button.addEventListener("click",()=>{
    if(inputbox.value===""){
        alert("You must enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listItem.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        inputbox.value="";
    }
    savedata();
})

listItem.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
         savedata();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
         savedata();
    }
},false);
    
function savedata(){
    localStorage.setItem("data",listItem.innerHTML)
}

function show(){
    listItem.innerHTML=localStorage.getItem("data")
}
show();

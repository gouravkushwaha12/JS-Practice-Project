const API_KEY="http://api.quotable.io/random";

const quotebox=document.querySelector(".quote");
const authbox=document.querySelector(".auth");
const btn=document.querySelector(".new_btn")



async function getdata(){
    const response= await fetch(API_KEY);
    let data=await response.json();
    console.log(data.content)
    quotebox.innerHTML=data.content;
    authbox.innerHTML=data.author;
}

function tweet(){
    window.open(`https://x.com/intent/tweet?text=${quotebox.innerHTML}`)
}
getdata();

btn.addEventListener("click",()=>{
//    window.location.reload();
getdata();
})
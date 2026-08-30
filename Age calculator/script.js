const inputbox=document.querySelector("input");
const button=document.querySelector("button");
const card=document.querySelector(".card");


button.addEventListener("click",()=>{
    const inputdate= new Date(inputbox.value);
    const age=Date.now()-inputdate.getTime();
    const ageshow=document.createElement("h4");
    const days=Math.floor(age/(1000*60*60*24));
    const years=Math.floor(days/365);
    const nday=days-(years*365);
    const months=Math.floor(nday/30.44);
    const newday=nday-Math.floor(months*30.44);
    ageshow.innerHTML=`You are ${years} years, ${months} months and ${newday} days old.`;
    card.appendChild(ageshow);
},{once:true})

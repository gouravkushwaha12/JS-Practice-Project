// const apiurl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Gourav";
const button=document.querySelector(".btn");
const inputbox=document.querySelector(".inp");
const qrimage=document.getElementById("qrimg");
async function getdata(text){
    const response=await `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    qrimage.src=response;
    // console.log(response);
    // const data=response.json();
    // console.log(data);


}
button.addEventListener("click",()=>{
    getdata(inputbox.value);
})
const maindiv=document.getElementById("toast");
const success='Process Successful';
const error='Solve This Error';
const invalid='Invalid Process'

function show(msg){
    let data=document.createElement('div');
    data.classList.add("toast");
    data.innerHTML=msg;
    maindiv.appendChild(data)

    setTimeout(() => {
        data.remove()
    }, 3000);
}
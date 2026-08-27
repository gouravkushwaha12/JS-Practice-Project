
const button=document.querySelector(".btn");
const container=document.querySelector(".container");

// createnotes.classList.add("note");
// createnotes.appendChild(inputbox);
// createnotes.appendChild(deletenotes);

button.addEventListener("click",()=>{
    const createnotes=document.createElement("div");
    const deletenotes=document.createElement("img");
    const inputbox=document.createElement("input");
    inputbox.type="text";
    inputbox.placeholder="Right Your Note.";
    deletenotes.src="delete.png";
    createnotes.appendChild(inputbox);
    createnotes.appendChild(deletenotes);    
    
    container.appendChild(createnotes);

    deletenotes.addEventListener("click",()=>{
        createnotes.remove();
        savedata();
    })

    inputbox.addEventListener("input",()=>{
        savedata();
    })

    savedata();
})
function savedata(){
    const notes=document.querySelectorAll("input");
    const data=[];
    notes.forEach((input) => {
        data.push(input.value);
    });
    localStorage.setItem("data",JSON.stringify(data));
}

// function show(){
//     // inputbox.innerHTML=localStorage.getItem("data")
//     const data=JSON.parse(localStorage.getItem("data"));
// }
// show();


function show() {

    const data = JSON.parse(localStorage.getItem("data")) || [];

    data.forEach((text) => {

        const createnotes = document.createElement("div");
        const deletenotes = document.createElement("img");
        const inputbox = document.createElement("input");

        inputbox.type = "text";
        inputbox.value = text;

        deletenotes.src = "delete.png";

        createnotes.appendChild(inputbox);
        createnotes.appendChild(deletenotes);

        container.appendChild(createnotes);

        deletenotes.addEventListener("click", () => {
            createnotes.remove();
            savedata();
        });

        inputbox.addEventListener("input", () => {
            savedata();
        });
    });
}

show();



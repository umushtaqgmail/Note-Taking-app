 const notesContainer = document.querySelector('.notes_container');

 const addBtn = document.querySelector('.add_btn');


 let notes = document.querySelector('.input_box');

function showNotes(){
     notesContainer.innerHTML = localStorage.getItem("notes");
     
}

function updateStroge(){
    localStorage.getItem("notes", notesContainer.innerHTML)
}



   addBtn.addEventListener('click', ()=> {
     let inputBox = document.createElement('p');
     let img= document.createElement("img");
     inputBox.className = "input_box";
     inputBox.setAttribute("contenteditable","true");
     img.src = 'delete.png';
     notesContainer.appendChild(inputBox).appendChild(img);

   })

   notesContainer.addEventListener('click', function(e){
    if(e.target.tagName ==="IMG")
    {
        e.target.parentElement.remove();
        updateStroge();

    }

    else if(e.target.tagName === "P"){
     notes = document.querySelectorAll('.input_box');
     notes.forEach(e =>{
           e.onkeyup = function(){
            updateStroge();

           }
     })
    }
   })
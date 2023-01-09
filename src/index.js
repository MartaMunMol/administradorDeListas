//interacción entre formulario y tabla
let formulario = document.getElementById('form');

formulario.addEventListener("submit", function cargarFormulario(event){
    event.preventDefault();
    let formData = new FormData (formulario);
    let tablaVar = document.getElementById("tablaId");
    let newTableRow = tablaVar.insertRow(1);

    let newTableCell = newTableRow.insertCell(0);
    newTableCell.textContent = formData.get("userName");
    
    newTableCell =newTableRow.insertCell(1);
    newTableCell.textContent= formData.get("userSurname");;

    newTableCell =newTableRow.insertCell(2);
    newTableCell.textContent= formData.get("userEmail");

    newTableCell =newTableRow.insertCell(3);
    newTableCell.textContent= formData.get("userTlfn");


//Celda para botón eliminar
    let btnEliminar =newTableRow.insertCell(4);
    btnEliminar.id="eliminar";

    let eliminar =document.createElement("button");
    eliminar.textContent = "X";
    let eliminarBtn = document.querySelector('#eliminar');
    eliminarBtn.appendChild(eliminar);
    eliminarBtn.addEventListener('click', erase);
    function erase(){
    eliminar.closest('tr').remove();
     }
     document.getElementById("form").reset();


      addInput.addEventListener('keyup', (event) => {
          if(event.which === 13) {
             cargarFormulario();
          }
        }
      )
 })

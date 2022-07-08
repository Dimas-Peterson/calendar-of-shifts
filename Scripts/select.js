//---------------------- VARIABLES ---------------------//
//Obtenemos y guardamos el contenedor de botones
let $contenedorButtons = document.getElementById("dates");

let selectedItem = "";

//Añadimos un evento al contenedor de botones
$contenedorButtons.addEventListener("click", changeColor);

//---------------------- FUNCIONES ---------------------//

//Funcion que remarca boton seleccionado
function changeColor(e) {
  let paintedElement = "";

  //Si el elemento clickeado es un botton, ejecuta la funcion
  if (e.target.localName == "button") {
    selectedItem = e.target;

    for (let i = 0; i < $contenedorButtons.childElementCount; i++) {
      //Si alguno de los elementos hijos del contenedor tiene la clase buttonSelect, entra y guarda ese elemento
      if ($contenedorButtons.children[i].classList.contains("buttonSelect")) {
        paintedElement = document.getElementsByClassName("buttonSelect");
        //console.log(paintedElement);
        break;
      }
    }

    //Si se guardo algun elemento en la variable, entra y quita la clase buttonSelect
    if (paintedElement != "") {
      paintedElement[0].classList.toggle("buttonSelect");
    }

    //Siempre que se haya hecho click sobre un elemento button, esto se va a ejecutar
    selectedItem.classList.toggle("buttonSelect");

    //funcion que envia datos a la tabla
    let selectedButton = selectedItem.innerHTML;
    tableData(selectedButton);
  }

  

}


















/**
 * 

    if($contenedorButtons.classList.contains('buttonSelect')){ 
        elementoPintado.classList.toggle('buttonSelect');
        elementoSeleccionado.classList.toggle('buttonSelect');
        console.log("a js le gusta el pingocho")
        
    } else {
        elementoSeleccionado.classList.toggle('buttonSelect');
        console.log("pingo le gusta al js")
    }
 * 
 * 
 * 
 * let elementoPintado = document.getElementsByClassName("buttonSelect");

    console.log(elementoPintado[0]);

    let elementoSeleccionado = e.target;

    console.log(e);

    if((e.target.localName == 'button') && (e.target.classList != 'buttonSelect')){
        if(elementoPintado[0].classList == 'buttonSelect') {
            
            elementoPintado[0].classList.toggle('buttonSelect');
            elementoSeleccionado.classList.toggle('buttonSelect');
        } else {
            elementoSeleccionado.classList.toggle('buttonSelect');
        }
    };
 * 
 * 
 * 
 * 
 * 
 * 
 * Así:
Let $botonADespintar = document.getElementByClassName('nombreDeLaClaseQuePintaElBoton');

$botonADespintar.classList.toggle('nombreDeLaClaseQuePintaElBoton);

Para que tome el cambio hay que agregar la clase y remover la anterior

Para saber si contiene una clase
caja.classList.contains("nombreclase")

Agregar id
firstP.setAttribute("id","firstPracPara");
 */

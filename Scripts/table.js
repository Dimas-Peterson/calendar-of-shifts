//-----============= VARIABLES ==============-----//
//Contenedor de datos del mes y año
let $containerInfo = document.getElementById("calendarInfo");
let $tBody = document.getElementById("tbody");

//Flechas de cambio de mes
let $prevMonth = document.getElementById("prev-month");
let $nextMonth = document.getElementById("next-month");

//Fecha de la tabla
let $dateTable = document.getElementById("dateTable");


//Obtenemos datos del mes y año
let $month = document.getElementById("month");
let $year = document.getElementById("year");

//Guardo el contenido de las etiquetas en variables para luego pasar a la tabla
//Las declaro fuera de la funcion para tener la tabla con la info por defecto
let monthTable = $month.innerHTML;
console.log(monthTable);
let yearTable = $year.innerHTML;

//FECHA POR DEFECTO
$dateTable.innerHTML = currentDay + " / " + monthTable + " / " + yearTable;
let dayTable = "DIA";

//-----============= EVENTOS ==============-----//
//Añadimos evento a las flechas de cambio de mes
$prevMonth.addEventListener("click", tableData);
$nextMonth.addEventListener("click", tableData);





//-----============= FUNCIONES ==============-----//
//Fecha por defecto de la tabla de turnos

fechaPorDefecto();

function fechaPorDefecto(){
    //Si el mes al que saltamos es el actual, por defecto se seleccionara el dia de hoy
    for(let i=0; i<monthNames.length; i++){
        if((monthTable === monthNames[i]) && (i == currentMonth)){
            dayTable = currentDay;
            break;
        } else {
            dayTable = "DIA";
        }
    }

}


//Funcion que genera la tabla
function tableData(e) {
    //Obtener mes y año del boton elegido
    $month = document.getElementById("month");
    $year = document.getElementById("year");
    //guardamos el contenido de las etiquetas recuperadas del calendario
    monthTable = $month.innerHTML;
    yearTable = $year.innerHTML;

    //Comprobamos si el mes sobre el que estamos es el actual    
    fechaPorDefecto();
    

    //si es un numero agregamos a la variable
    if((isNaN(e) != true)){
        dayTable = e;
    };
    
    //Añadimos la fecha a la tabla
    $dateTable.innerHTML = dayTable + " / " + monthTable + " / " + yearTable;
    
    
    console.log(dayTable + " / " + monthTable + " / " + yearTable + " Dentro del evento");
    cargarTurnos();
  }

  //console.log(dayTable + " / " + monthTable + " / " + yearTable + " fuera del evento");
  //FUNCION QUE ALTERA TABLA DE TURNOS

  let turnoEstado = "";
  let turnoDisponible = "Disponible";
  let turnoOcupado = "Ocupado";

  let turno14 = turnoDisponible;
  let turno16 = turnoOcupado;

  function cargarTurnos(){
    if((isNaN(dayTable) != true)){
        console.log("HOLANDA " + dayTable)

    } else {
        console.log("No entre al if soy daytable")
    }
  }

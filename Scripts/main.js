/**Arreglo con los 12 meses. Después probar con "Const" */
var mes_text = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var dia_text = ["Dom", "Lun", "Mar", "Mie", "Juv", "Vie", "Sab"];

estructurar();

function estructurar() {
  for (m = 0; m <= 11; m++) {
    /**Estructuracion con JS usando el metodo .createElement */
    /**Creamos un div */
    let mes = document.createElement("DIV");

    /**Agregamos una clase al elemento */
    mes.className = "mes";

    /**Agregamos el elemento al DOM */
    document.body.appendChild(mes);

    /**Creamos un elemento hijo del div anterior, de tipo TABLE */

    let tabla_mes = document.createElement("TABLE");
    tabla_mes.className = "tabla_mes";
    mes.appendChild(tabla_mes);

    /**A la tabla le agregamos un titulo */
    let titulo = document.createElement("CAPTION");
    titulo.className = "titulo";
    /**añadimos texto */
    titulo.innerText = mes_text[m];
    tabla_mes.appendChild(titulo);

    /**Añadimos los meses al HTML */
    //A titulo le añadimos los nombres de lo meses a medida que recorremos el array

     //Elementos de la tabla, thead
     let cabecera = document.createElement("THEAD");
     tabla_mes.appendChild(cabecera);

     //creamos y agregamos una fila a la cabecera
     let fila = document.createElement("TR");
     cabecera.appendChild(fila);

     //Cabecera
    for (d = 0; d < 7; d++) {
        let dia = document.createElement("TH");
        dia.innerText = dia_text[d]; //añadimos el texto a cada elemento
        fila.appendChild(dia); //añadimos el elemento a la tabla
    }

    //Cuerpo
    //Creamos el elemento TBODY de la tabla
    let cuerpo = document.createElement("TBODY");
    //añadimos el elemento a la tabla
    tabla_mes.appendChild(cuerpo);
    for (f = 0; f < 6; f++) {
        let fila = document.createElement("TR");
        //Creamos y añadimos las filas de los dias por eso son 6
        cuerpo.appendChild(fila);
        
        for (d = 0; d < 7; d++) {
          let dia = document.createElement("TD");
          //creamos y añadimos cada dia a cada fila creada anteriormente, por eso esta anidada
          dia.innerText = "";
          fila.appendChild(dia);
      }
    }
  }
}

numerar();

//Esta funcion va a colocar los numeros adecuados en el calendario
function numerar() {
  //Con fechaPorDia ubicamos los numeros correspondientes del año que queremos
  for(i = 1; i < 366; i++) {
    let fecha = fechaPorDia(2022, i);
    //obtenemos el mes que corresponde al día que estamos viendo
    let mes = fecha.getMonth();
    //Usamos el indice obtenido en la linea anterior y añadimos el mes a los elementos de la tabla con la clase "tabla_mes"
    let select_tabla = document.getElementsByClassName(`tabla_mes`)[mes];
    //con este metodo obtenemos el día del mes (1 de 31) que corresponde al día del año(1 de 365)
    let dia = fecha.getDate();
    //Con esta variable guardamos el dia de la semana al que corresponde (1 de 7)
    let dia_semana = fecha.getDay();
    //Mediantes estas sentencias manejamos las filas
    //Esta primera reinicia el conteo de las filas de la semana cuando empieza el mes
    if(dia == 1) {var sem = 0;}
    //con estos metodos accedemos a las secciones de las tablas y le colocamos el dia que corresponde
    select_tabla.children[2].children[sem].children[dia_semana].innerHTML = ` <button>${dia}</button> `;
    //Esta sentencia cada vez que termina la semana, aumenta en uno para pasar a la siguiente fila
    if (dia_semana == 6) {sem = sem + 1; }
  }
}

//Esta funcion crea el elemento de tipo Date, con el que obtendremos los datos del año, mes y dia.
//Debemos pasarle el año que queremos y un numero de dia en el cual iniciar
/**para instanciar date, le pasamos la variable año y setteamos el día cada vez que el bucle for 
 * aumente el iterador, por eso inicia en 0 y luego setteamos solo esa parte y retornamos un nuevo 
 * elemento de tipo date con los datos /correspondientes al iterador. */
function fechaPorDia(año, dia) {
  var date = new Date(año, 0);
  return new Date(date.setDate(dia));
}


/**
 * for (d = 0; d < 7; d++) {
            let dia = document.createElement("TD");
            //creamos y añadimos cada dia a cada fila creada anteriormente, por eso esta anidada
            dia.innerText = "";
            fila.appendChild(dia);
        }
 */
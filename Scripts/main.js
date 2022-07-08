let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];


//---========== VARIABLES ==========---//

//Nos da la fecha del ordenador
let currentDate = new Date();

//Dia de la semana
let currentDay = currentDate.getDate();

//Numero del Mes 0 = enero y 11 = diciembre
let monthNumber = currentDate.getMonth();

//Año
let currentYear = currentDate.getFullYear();

//Obtenemos los elementos del html
let dates = document.getElementById("dates");
let month = document.getElementById("month");
let year = document.getElementById("year");

//Obtenemos los elementos flechas del html
let prevMonthDOM = document.getElementById("prev-month");
let nextMonthDOM = document.getElementById("next-month");


//Para obtener la fecha de hoy
const today = new Date();
//Mes actual
const currentMonth = today.getMonth();



//---========== FUNCIONES ==========---//

//Al elemento month le coloco el nombre del mes en el que estamos
month.textContent = monthNames[monthNumber];
//Al elemento year del HTML le damos el nombre (transformamos el numero a string)
year.textContent = currentYear.toString();

//--== Agregamos los eventos a las flechas ==--//
prevMonthDOM.addEventListener('click', () => lastMonth());
nextMonthDOM.addEventListener('click', () => nextMonth());


//Ejecutamos la funcion que dibuja los dias de los meses
writeMonth(monthNumber);

//Funcion que escribe los meses
//le decimos que nos dibuje el total de dias del mes que le pasamos
 function writeMonth(month) {

    //Con este bucle hacemos que el mes empiece en el dia correcto, no siembre en lunes
    for(let i = startDay(); i > 0; i--) {
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__block-Days">${getTotalDays(monthNumber - 1) - (i - 1)}</div> `;
    }

    //A partir de la cantidad de dias que tiene el mes que tenemos como parametro
    for(let i = 1; i <= getTotalDays(month); i++){

        //Dia de la semana
        let dayWeek = new Date(currentYear, month, i);
        let numDay = dayWeek.getDay();
        

        //Si es igual significa que es HOY y le añadimos la clase "today"
        if((i === currentDay) && (month === currentMonth)){
            dates.innerHTML += ` <button class="calendar__date calendar__item calendar__today buttonSelect button">${i}</button> `;
        
        } else if ((numDay === 6) || (numDay === 0) || (month < currentMonth) || (i < currentDay)) {
            //Si no es entre semana no se imprime como boton, si es un dia pasado tampoco
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__block-Days">${i}</div> `;

        } else {
            //Sino escribe lo mismo pero sin la clase today
            dates.innerHTML += ` <button class="calendar__date calendar__item button">${i}</button> `;
        }

    }
 }

 //Funcion para saber cuantos dias tiene que escribir segun el mes
 function getTotalDays(month) {
    if(month === -1) month = 11;
    
    //Elegimos la cantidad del dia segun el indice del mes
    if(month == 0 || month == 2 ||  month == 4 ||  month == 6 ||  month == 7 ||  month == 9 ||  month == 11 ) {
        return 31;
    } else if (month == 3 ||month == 5 ||  month == 8 ||  month == 10) {
        return 30;
    } else {
        //si la funcion dice true, retorna 29 porque es bisiesto
        return isLeap() ? 29 : 28;
    }
 }

 //Funcion para saber si el año es bisiesto
 function isLeap() {
    return ((currentYear % 100 !==0) && (currentYear & 4 === 0) || (currentYear % 400 === 0));
 }

 //Funcion para saber el dia en el que empieza la semana
 function startDay() {
    let start = new Date(currentYear, monthNumber, 1);
    //La siguiente formula es para que la semana empiece el lunes y no domingo
    return ((start.getDay() - 1) === -1) ? 6 : start.getDay() - 1;
 }

 //Funcion que se encarga de dibujar el mes anterior
 function lastMonth() {
    //Si el mes es distinto de 0 desconta uno
    if(monthNumber !== 0){
        monthNumber--;
    } else {
        //si el mes es 0 y volvemos, el numero de mes es 11 y volvemos un año
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
 }

 //Funcion que se encarga de dibujar el mes siguiente
 function nextMonth() {
    //Si el mes no es 11 que sume uno
    if(monthNumber !== 11){
        monthNumber++;
    } else {
        //si el mes es 0 que sume un año
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();

 }

 //Funcion que se encarga de establecer la nueva fecha al mover el calendario
 function setNewDate() {
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    //cambiar el nombre del mes que tenemos
    month.textContent = monthNames[monthNumber];
    //cambiar el año
    year.textContent = currentYear.toString();

    //Esto vacia el container y luego escribe el mes para que no se vayan agregando uno abajo del otro
    dates.textContent = "";
    //Cuando establecemos la nueva fecha le decimos que escriba el mes
    writeMonth(monthNumber);
 }


 //Obtengo numero de dia de la semana 
 let start = new Date(2022, monthNumber, 3);
 
 console.log(start);
 console.log(start.getDay());






/**
 * for(let i = 1; i <= getTotalDays(month); i++){
        //Si es igual significa que es HOY y le añadimos la clase "today"
        if(i === currentDay){
            dates.innerHTML += ` <button class="calendar__date calendar__item calendar__today button">${i}</button> `;
        } else {
            //Sino escribe lo mismo pero sin la clase today
            dates.innerHTML += ` <button class="calendar__date calendar__item button">${i}</button> `;
        }

    }
 */



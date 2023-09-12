var diasSemana = parseInt(readLine(diasSemana),
    10);
    /*
    1 - Lunes
    2 - Martes
    3 - Miercoles
    4 - Jueves
    5 - Viernes
    6 - Sabado
    7 - Doimingo
    */
    
    
    
    switch (diasSemana){
    
    case 1:
    console.log("Lunes");
    break;
    
    
    case 2:
    console.log("Martes");
    break;
    
    case 3:
    console.log("Miercoles");
    break;
    
    case 4:
    console.log("Jueves");
    break;
    
    case 5:
    console.log("Viernes");
    break;

    case 6:
    console.log("Sabado");
    break;

    case 7:
    console.log("Domingo");
    break;
    
    default:
    console.log("No es un dia de semana");
    
    }
}

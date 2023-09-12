var themeNumber = parseInt(readLine(themeNumber),
    10);
    /*
    1 - Light
    2 - Dark
    3 - Nocturne
    4 - Terminal
    5 - Indigo
    */
    // Tu código va aquí
    
    
    switch (themeNumber){
    
    case 1:
    console.log("Light");
    break;
    
    
    case 2:
    console.log("Dark");
    break;
    
    case 3:
    console.log("Noctune");
    break;
    
    case 4:
    console.log("Terminal");
    break;
    
    case 5:
    console.log("Indigo");
    break;
    
    default:
    console.log("Another color");
    
    }
}

var tipomotorbomba = parseInt (prompt("Introduzca el valor del tipo de motor"));

function TipoMotor() 
    { 
        switch (tipomotorbomba) { 
            case 0:
                alert ( "No hay establecido un valor definido para el tipo de bomba"); 
                break;  
            case 1: 
                alert ( "La bomba es una bomba de agua" ); 
                break;  
            case 2: 
                alert ( "La bomba es una bomba de gasolina" ); 
                break;  
            case 3: 
                alert ( "La bomba es una bomba de hormigón" ); 
                break;
            case 4: 
                alert ( "La bomba es una bomba de pasta alimenticia" ); 
                break;    
                    default: 
                    alert ( "No existe un valor válido para tipo de bomba" ); 
                }
    }
    TipoMotor() 

    var impuesto = parseInt (prompt("Introduzca el valor del tipo del impuesto"));
    function obtenerImporteConImpuestos( valor_1 , valor_2) 
    { 
        switch (valor_2) { 
            case 1:
                valor_1 = valor_1*1.21;
                alert ("El valor sin impuestos más el 21%" + valor_1 ); 
                return valor_1;
            case 2: 
                valor_1 = valor_1*1.10;
                alert ("El valor sin impuestos más el 10%"  + valor_1  ); 
                return valor_1;
            case 3: 
                valor_1 = valor_1*1.05;
                alert ("El valor sin impuestos más el 5%" + valor_1 ); 
                return valor_1;    
                }
    }
    tax = obtenerImporteConImpuestos( 100, impuesto) 
    document.write(tax);
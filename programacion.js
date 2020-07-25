var num_pantalla="0";
var num_espera=0;
var mas_digitos=false;
var operador="no";

function numero(num) {
	
         if (num_pantalla=="0" || mas_digitos==false ) {
			 
            document.getElementById("textoPantalla").innerHTML=num;
			num_pantalla=num;
			 
		 }else {
			 
                document.getElementById("textoPantalla").innerHTML=num_pantalla+num;
				num_pantalla=document.getElementById("textoPantalla").innerHTML;
			 
               }
        
            mas_digitos=true;
         }

function calcular(op) {
	
         igual()
         num_espera=num_pantalla;
         operador=op;
         mas_digitos=false;
	
         }	

function igual() {
	
         if (operador=="no") { 
			 
            document.getElementById("textoPantalla").innerHTML=num_pantalla;
			 
            }
	
         else {
			 
			 var resultado;
			 
			 switch(operador){
					 
				 	case '+': resultado=(parseInt(num_espera))+(parseInt(num_pantalla));
					 		break;
					 
					case '-': resultado=(parseInt(num_espera))-(parseInt(num_pantalla));
					 		break;
					
					case '*': resultado=(parseInt(num_espera))*(parseInt(num_pantalla));
					 		break;
					
					case '/': resultado=(parseInt(num_espera))/(parseInt(num_pantalla));
					 		break;
							}
			 
            document.getElementById("textoPantalla").innerHTML=resultado;
            num_pantalla=resultado;
            operador="no";
            mas_digitos=false;
			 
            }
        }

function borradoTotal() {
         
			num_pantalla="0";
			num_espera=0;
			operador="no";
			document.getElementById("textoPantalla").innerHTML=0;
	
         }
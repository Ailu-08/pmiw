// Alumnas: Clar Agustina Legajo:    , Ailen Avanzini Legajo: 94717/7  // Materia: pmiw // TPFinalParte1 //Comision: 5// FDA // UNLP
//Link Figma: (En proceso de cambio de formato, una vez terminado le envio el PDF): https://www.figma.com/board/W182wDNffjNHWQzHQ9bTvi/FigJam-Basics?node-id=0-1&node-type=canvas&t=dFauu5vBU9LHR0tr-0
//Link Tutorial: 


let images = []; 

function preload() {
  // Carga la imagen de la carátula
images[0] = loadImage('assets/PersianPrince.png'); // Imagen para la pantalla 0 Caratula

//Carga de las 16 imágenes adicionales. Agregar rutas cuando tenga las imagenes!!
  
  // images[1] = loadImage('assets/imagen1.png'); // Imagen para la pantalla 1
  // images[2] = loadImage('assets/imagen2.png'); // Imagen para la pantalla 2
  // images[3] = loadImage('assets/imagen3.png'); // Imagen para la pantalla 3
  // images[4] = loadImage('assets/imagen4.png'); // Imagen para la pantalla 4
  // images[5] = loadImage('assets/imagen5.png'); // Imagen para la pantalla 5
  // images[6] = loadImage('assets/imagen6.png'); // Imagen para la pantalla 6
  // images[7] = loadImage('assets/imagen7.png'); // Imagen para la pantalla 7
  // images[8] = loadImage('assets/imagen8.png'); // Imagen para la pantalla 8
  // images[9] = loadImage('assets/imagen9.png'); // Imagen para la pantalla 9
  // images[10] = loadImage('assets/imagen10.png'); // Imagen para la pantalla 10
  // images[11] = loadImage('assets/imagen11.png'); // Imagen para la pantalla 11
  // images[12] = loadImage('assets/imagen12.png'); // Imagen para la pantalla 12
  // images[13] = loadImage('assets/imagen13.png'); // Imagen para la pantalla 13 (Creditos)
  // images[14] = loadImage('assets/imagen14.png'); // Imagen para la pantalla 14
  // images[15] = loadImage('assets/imagen15.png'); // Imagen para la pantalla 15
  // images[16] = loadImage('assets/imagen16.png'); // Imagen para la pantalla 16

}

function setup() {
  createCanvas(640, 480);
  screen= 0;
  textAlign(CENTER, CENTER); // Centra el texto horizontal y verticalmente
}

function draw() {
  background(220); // Fondo gris claro
  fill(0);       // Texto Color Negro   
  
      if ( screen == 0 ) { // Carátula
   image(images[0], 0, 0, width, height); // Muestra la imagen de la carátula
      textSize(24);
      textStyle(BOLD); // Texto en negrita para el título
      text("El Príncipe de Persia", width / 2, 50); // Título centrado
      textSize(18);
      textStyle(NORMAL); // Restablece estilo normal
        botones();        

  } else if ( screen == 1 ) {      // Introducción
     showTitleAndText( "Introducción", "En un antiguo reino persa, el joven príncipe Dastan es adoptado por el rey. Durante una misión, Dastan y su hermano Garsiv asaltan la ciudad de Alamut, creyendo que sus habitantes son traidores."
      );
      botones();
  }

  else if ( screen == 2 ) {   // Descubrimiento
      showTitleAndText( "Descubrimiento", "Mientras explora, Dastan encuentra una Daga mística que le permite retroceder en el tiempo."
      );
     botones();
    }  

    else if ( screen == 3 ) { // Salvando a alguien
      showTitleAndText( "Salvando a alguien", "Dastan usa la Daga para salvar a una joven de ser ejecutada. La joven se presenta como Tamina y le revela la verdadera historia: Alamut no es traidor y quien realmente es el traidor."
      );
   botones();
       } 

   else if ( screen == 4 ) {  // Descubriendo la clave
      showTitleAndText( "Descubriendo la clave", "Dastan y Tamina descubren que la Daga es la clave para detener al verdadero traidor."
      );
     botones(); 
      } 

   else if ( screen == 5 ) {  // Ocultando la Daga
      showTitleAndText( "Ocultando la Daga", "Dastan siente que ha tomado una decisión arriesgada al ocultar la Daga ya que descubrió que Alamut no había cometido traición."
      );
     botones();
      } 

  else if ( screen == 6 ) { // Alianza
      showTitleAndText( "Alianza", "Dastan conoce a Tamina en Alamut y se unen para desentrañar el complot que amenaza al reino. Sin embargo, se enfrentan a la traición de un noble."
      );
    botones();
       } 

    else if ( screen == 7 ) { // Huida Solitaria
      showTitleAndText( "Huida Solitaria", "Dastan escapa solo y se encuentra con guerreros del desierto. Ellos le cuentan quien es el traidor y Dastan decide enfrentarlo."
      );
      botones();
      } 

    else if ( screen == 8 ) { // El Viejo Sabio
      showTitleAndText( "El Viejo Sabio", "Dastan se encuentra con un sabio que le advierte sobre las consecuencias de sus acciones. Debe decidir cómo actuar.");
     botones(); 
    } 

   else if ( screen == 9 ) { // (Final 4)
      showTitleAndText( "Final: 4", "Dastan se enfrenta al traidor pero pierde la batalla, y el traidor logra conseguir la Daga y conquistar el reino."
      );
    botonesFinales(); 
       } 

 else if ( screen == 10 ) { // Final 1
      showTitleAndText( "Final 1", "Dastan derrota al traidor, asegurando la paz en el reino y destruyendo la Daga."
      );
      botonesFinales(); 
            }

  else if ( screen == 11 ) { // Final 2
      showTitleAndText( "Final 2", "Dastan utiliza la Daga para cambiar su destino, salvando a Alamut, a sí mismo y a su familia."
      );
       botonesFinales();  
  }

   else if ( screen == 12 ) { // Final 3
      showTitleAndText( "Final 3", "Dastan decide renunciar al poder y vivir en el pasado con Tamina."
      );
      botonesFinales(); 
   }

   else if ( screen == 13 ) { // Créditos
      showTitleAndText("Créditos", "Alumnas y Desarrolladoras: Clar Agustina y Avanzini Ailen. \n Creadora de Imagenes: Dall-e IA");
      botonesFinales(); 
   }

    else if ( screen == 14 ) { // Dolorosa desición
      showTitleAndText( "Dolorosa desición", "Tamina se ofrece como esposa al traidor con la condicion que deje a Dastan y a su familia en Paz y que Alamut pueda prosperar"
      );
     botones();
    }

  else if ( screen == 15 ) { // Final 5
      showTitleAndText( "Final 5", "Tamina y el traidor se casan en esta boda indeseada y promete dejar a Alamut y Dastan en Paz."
      );
       botonesFinales();  
       }

   else if ( screen == 16 ) { // Final 6
      showTitleAndText( "Final 6", "El traidor no acepta y mata a Tamina desatando asi una guerra entre reinos."
      );
      botonesFinales();  
   }
}

// Función para mostrar título y texto de cada pantalla

function showTitleAndText(title, body) {
  
  textSize(24); // Tamaño del título
  textStyle(BOLD); // Negrita para el título
  text(title, width / 2, 50); // Título centrado
  
  textSize(18);  // Tamaño del texto
  textStyle(NORMAL); // Estilo normal para el texto
  
  let textY = height / 2 - 50; // Posición Y del texto
  let textWidth = 600; // Ancho máximo para el texto
   
    // Muestra el texto y su posicion
  text(body, 20, textY, textWidth, height - 300);
  
}

function mouseClicked() {
  let btn1X = width / 2 - 100;
  let btn1Y = height - 100;
  let btnWidth = 200;
  let btnHeight = 40;

  let btn2X = width / 2 - 100;
  let btn2Y = height - 60;
  let btn2Width = 200;
  let btn2Height = 40;

  // Botón 1
  if (mouseX >= btn1X && mouseX <= btn1X + btnWidth && mouseY >= btn1Y && mouseY <= btn1Y + btnHeight) {
    switch (screen) {
      case 0:  screen = 1;   break;
      case 1:  screen = 2;   break;
      case 2:  screen = 3;   break;
      case 3:  screen = 4;   break;
      case 4:  screen = 10;   break;
      case 5:  screen = 6;   break;
      case 6:  screen = 14;   break;
      case 7:  screen = 8;   break;
      case 8:  screen = 9;   break;
      case 14: screen = 15; break;
      case 9: case 10: case 11: case 12: case 13: case 15: case 16:
        screen = 0; // Vuelve a la caratula
        break;
    }
  }

  // Botón 2
  if (mouseX >= btn2X && mouseX <= btn2X + btn2Width && mouseY >= btn2Y && mouseY <= btn2Y + btn2Height) {
    switch (screen) {
      case 0: screen = 13;  break;
      case 2: screen = 5;   break;
      case 3: screen = 8;   break;
      case 4: screen = 11;  break;
      case 5: screen = 7;   break;
      case 6: screen = 15;  break;
      case 7: screen = 10;   break;
      case 8: screen = 10;  break;
      case 14: screen = 15; break;
      case 9: case 10: case 11: case 12: case 13: case 15: case 16:
        screen = 1; // Vuelve al Inicio
        break;
    }
  }
}



function botonesFinales() {
  stroke(0);
  fill(255);

  // Botón para volver a la carátula
  rect(width / 2 - 100, height - 100, 200, 40);
  fill(0);
  text("Carátula", width / 2, height - 80);

  // Botón para volver al inicio de la aventura
  fill(255);
  rect(width / 2 - 100, height - 60, 200, 40);
  fill(0);
  text("Inicio", width / 2, height - 40);
}

function botones() {
  stroke(0);
  fill(255);

  switch (screen) {
    case 0:
      textoBtn1 = "Comenzar";
      textoBtn2 = "Créditos";
      break;
    case 1:
      textoBtn1 = "Explorar la ciudad";
      textoBtn2 = null;
      break;
    case 2:
      textoBtn1 = "Salvar a alguien";
      textoBtn2 = "Ocultar la Daga";
      break;
    case 3:
      textoBtn1 = "Viajar juntos al futuro";
      textoBtn2 = "Separarse en el desierto";
      break;
    case 4:
      textoBtn1 = "Enfrentar al traidor";
      textoBtn2 = "Regresar en el tiempo";
      break;
    case 5:
      textoBtn1 = "Regresar a Alamut";
      textoBtn2 = "Huir al desierto";
      break;
    case 6:
      textoBtn1 = "Tamina se casa";
      textoBtn2 = "Cambiar el futuro";
      break;
    case 7:
      textoBtn1 = " Usar la Daga";
      textoBtn2 = "No usar la Daga";
      break;
    case 8:
      textoBtn1 = "Ignorar advertencias";
      textoBtn2 = "Escuchar al sabio";
      break;
    case 14:
      textoBtn1 = "El traidor acepta";
      textoBtn2 = "El traidor no acepta";
      break;
  }

  // Botón 1
  rect(width / 2 - 100, height - 100, 200, 40);
  fill(0);
  text(textoBtn1, width / 2, height - 80);

  // Botón 2 (solo si está definido)
  if (textoBtn2) {
    fill(255);
    rect(width / 2 - 100, height - 60, 200, 40);
    fill(0);
    text(textoBtn2, width / 2, height - 40);
  }
}

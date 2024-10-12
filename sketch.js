// Alumnas: Clar Agustina Legajo:    , Ailen Avanzini Legajo: 94717/7  // Materia: pmiw // TPFinalParte1 //Comision: 5// FDA // UNLP
//Link Figma: (En proceso de cambio de formato, una vez terminado le envio el PDF): https://www.figma.com/board/W182wDNffjNHWQzHQ9bTvi/FigJam-Basics?node-id=0-1&node-type=canvas&t=dFauu5vBU9LHR0tr-0
//Link Tutorial: 

let screen = 0;
let btn1, btn2; // Botones interactivos
let images = []; // Arreglo para las almacenar las imágenes
let persianPrinceImg; // Imagen de la carátula

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
  textAlign(CENTER, CENTER); // Centra el texto tanto horizontal como verticalmente
}

function draw() {
  background(220); // Fondo gris claro
  textSize(18);   // Tamaño de texto predeterminado
  fill(0);       // Texto Color Negro   

  switch (screen) {
    case 0: // Carátula
      image(images[0], 0, 0, width, height); // Muestra la imagen de la carátula
      textSize(24);
      textStyle(BOLD); // Texto en negrita para el título
      text("El Príncipe de Persia", width / 2, 50); // Título centrado
      textSize(18);
      textStyle(NORMAL); // Restablece estilo normal
      showButtons("Comenzar", "Créditos"); // Muestra los botones
      break;

    case 1: // Introducción
      showTitleAndText( "Introducción", "En un antiguo reino persa, el joven príncipe Dastan es adoptado por el rey. Durante una misión, Dastan y su hermano Garsiv asaltan la ciudad de Alamut, creyendo que sus habitantes son traidores."
      );
      showButtons("Explorar la ciudad", null);
      break;

    case 2: // Descubrimiento
      showTitleAndText( "Descubrimiento", "Mientras explora, Dastan encuentra una Daga mística que le permite retroceder en el tiempo."
      );
      showButtons("Usar la Daga para salvar a alguien", "Ocultar la Daga y volver a su reino en el futuro");
      break;

    case 3: // Salvando a alguien
      showTitleAndText( "Salvando a alguien", "Dastan usa la Daga para salvar a una joven de ser ejecutada. La joven se presenta como Tamina y le revela la verdadera historia: Alamut no es traidor y quien realmente es el traidor."
      );
      showButtons("Viajar juntos al futuro", "Separarse en el desierto");
      break;

    case 4: // Descubriendo la clave
      showTitleAndText( "Descubriendo la clave", "Dastan y Tamina descubren que la Daga es la clave para detener al verdadero traidor."
      );
      showButtons("Enfrentar al traidor", "Usar la Daga para regresar y detener la traición"); break;

    case 5: // Ocultando la Daga
      showTitleAndText( "Ocultando la Daga", "Dastan siente que ha tomado una decisión arriesgada al ocultar la Daga ya que descubrió que Alamut no había cometido traición."
      );
      showButtons("Regresar a Alamut", "Huir al desierto"); break;

    case 6: // Alianza
      showTitleAndText( "Alianza", "Dastan conoce a Tamina en Alamut y se unen para desentrañar el complot que amenaza al reino. Sin embargo, se enfrentan a la traición de un noble."
      );
      showButtons("Tamina se ofrece a casarse para apaciguar la traicion", "Activar la Daga y cambiar el futuro"); break;

    case 7: // Huida Solitaria
      showTitleAndText( "Huida Solitaria", "Dastan escapa solo y se encuentra con guerreros del desierto. Ellos le cuentan quien es el traidor."
      );
      showButtons("Enfrentar al traidor con la Daga", "Enfrentar al traidor sin usar la Daga"); break;

    case 8: // El Viejo Sabio
      showTitleAndText( "El Viejo Sabio", "Dastan se encuentra con un sabio que le advierte sobre las consecuencias de sus acciones. Debe decidir cómo actuar."
      );
      showButtons("Ignorar advertencias y enfrentar al traidor", "Escuchar al sabio"); break;

    case 9: // (Final 4)
      showTitleAndText( "Final: 4", "Dastan se enfrenta al traidor pero pierde la batalla, y el traidor logra conseguir la Daga y conquistar el reino."
      );
      showFinalButtons(); break;

    case 10: // Final 1
      showTitleAndText( "Final 1", "Dastan derrota al traidor, asegurando la paz en el reino y destruyendo la Daga."
      );
      showFinalButtons();
      break;

    case 11: // Final 2
      showTitleAndText( "Final 2", "Dastan utiliza la Daga para cambiar su destino, salvando a Alamut, a sí mismo y a su familia."
      );
      showFinalButtons(); break;

    case 12: // Final 3
      showTitleAndText( "Final 3", "Dastan decide renunciar al poder y vivir en el pasado con Tamina."
      );
      showFinalButtons(); break;

    case 13: // Créditos
      showTitleAndText("Créditos", " Alumnas y Desarrolladoras: Clar Agustina y Avanzini Ailen. Creadora de Imagenes: Dall-e IA");
      showFinalButtons(); break;

    case 14: // Dolorosa desición
      showTitleAndText( "Dolorosa desición", "Tamina se ofrece como esposa al traidor con la condicion que deje a Dastan y a su familia en Paz y que Alamut pueda prosperar"
      );
     showButtons("El traidor Acepta", "El traidor no Acepta"); break;

    case 15: // Final 5
      showTitleAndText( "Final 5", "Tamina y el traidor se casan en esta boda indeseada y promete dejar a Alamut y Dastan en Paz."
      );
      showFinalButtons(); break;

    case 16: // Final 6
      showTitleAndText( "Final 6", "El traidor no acepta y mata a Tamina desatando asi una guerra entre reinos."
      );
      showFinalButtons();   break;
  }
}

// Función para mostrar título y texto de cada pantalla

function showTitleAndText(title, body) {
  
  textSize(24); // Tamaño del texto del título
  textStyle(BOLD); // Negrita para el título
  text(title, width / 2, 50); // Título centrado
  
  textSize(18);  // Tamaño del texto del cuerpo
  textStyle(NORMAL); // Estilo normal para el cuerpo del texto
  
  let textY = height / 2 - 50; // Posición Y del texto
  let textWidth = 600; // Ancho máximo para el texto
   
    // Muestra el texto y su posicion
  text(body, 20, textY, textWidth, height - 300);
  
}

// Función para mostrar botones según la opción

function showButtons(option1, option2) {
  resetButtons(); // Elimina los botones anteriores
  
 // Botón 1
  btn1 = createButton(option1);
  btn1.position(width / 2 - 100, height - 130); 
  btn1.size(200, 40); 
  btn1.mousePressed(() => { 
    switch (screen) { 
      case 0: screen = 1; break; 
      case 1: screen = 2; break; 
      case 2: screen = 3; break; 
      case 3: screen = 4; break; 
      case 4: screen = 10; break; 
      case 5: screen = 6; break; 
      case 6: screen = 14; break; 
      case 7: screen = 10; break; 
      case 8: screen = 10; break;
      case 14: screen = 15; break;
    }
  });

// Botón 2 (si existe)
  if (option2) {
    btn2 = createButton(option2);
    btn2.position(width / 2 - 100, height - 70); 
    btn2.size(200, 40);
    btn2.mousePressed(() => { 
      switch (screen) {
        case 0: screen = 13; break; 
        case 2: screen = 5; break;
        case 3: screen = 8; break;
        case 4: screen = 11; break;
        case 5: screen = 7; break; 
        case 6: screen = 15; break;
        case 7: screen = 9; break;
        case 8: screen = 12; break;
        case 14: screen = 16; break;
      }
    });
  }
}

// Función para mostrar los botones finales (Caratula o Reiniciar Aventura)

function showFinalButtons() {
  resetButtons();

  btn1 = createButton("Volver a la carátula");
  btn1.position(width / 2 - 100, height - 100); 
  btn1.size(200, 40);
  btn1.mousePressed(() => screen = 0);

  btn2 = createButton("Reiniciar aventura");
  btn2.position(width / 2 - 100, height - 50); 
  btn2.size(200, 40);
  btn2.mousePressed(() => screen = 1);
}



//Funcion para remover los botones

function resetButtons() {
  if (btn1) btn1.remove();
  if (btn2) btn2.remove();
}

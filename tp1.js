//Materia: Materia PMIW //Comision 5//TP1: Dinamica Circolare en P5JS//Artista: Marina Apollonio //Alumna: Ailu Avanzini  //Legajo: (94717/7)  //Profesor: Tobias Albirosa
//Link al Video Tutorial: 
// Variables
let numCircles = 30; // Número de círculos
let maxDiameter = 400; // Diámetro máximo de los círculos
let interactive = false; // Variable para activar/desactivar la interactividad
let Circle;
let useColorPalette = false; // Variable para activar/desactivar el uso de la paleta de colores

function preload() {
  Circle = loadImage('data/CircleOPT.jpg'); // Cargar la imagen
}

function setup() {
  createCanvas(800, 400);
  Circle.resize(width / 2, 0); // Redimensiona la imagen a la mitad del ancho de la ventana
}

function draw() {
  background(255);
  image(Circle, 0, 0);
  drawInteractiveCircles(interactive ? false : true);
}

// Función para dibujar los círculos interactivos
function drawInteractiveCircles(inclinados) {
  for (let i = 0; i < numCircles; i++) {
    let diameter = map(i, 0, numCircles, maxDiameter, 0);
    let x = 3 * width / 4;
    let y = height / 2;
    if (inclinados) {
      x += i * 2; // Inclinación hacia arriba a la derecha
      y -= i * 2; // Inclinación hacia arriba a la derecha
    }
    if (i != numCircles - 1) {
      drawCircle(x, y, diameter, i, false);
    } else {
      drawCircle(x, y, diameter, i, true);
    }

    // Añadir patrón adicional
    for (let j = 0; j < 5; j++) {
      let innerDiameter = diameter - j * 10;
      if (innerDiameter > 0) {
        drawInnerPattern(x, y, innerDiameter);
      }
    }
  }
}

// Función para dibujar un círculo con color alternante
function drawCircle(x, y, diameter, index, last) {
  if (useColorPalette) {
    fill(getColorFromPalette(index));
  } else {
    if (index % 2 == 0) {
      fill(0);
    } else {
      fill(255);
    }
  }

  if (last) {
    push();
    if (interactive) {
      // Centra el último círculo dentro del patrón interactivo
      translate(x, y);
    } else {
      // Inclinación del último círculo hacia abajo a la izquierda
      translate(x - 5, y + 5);
      rotate(-QUARTER_PI); // Rotar hacia abajo a la izquierda (-45 grados)
    }
    ellipse(0, 0, diameter, diameter);
    pop();
  } else {
    ellipse(x, y, diameter, diameter);
  }
}

// Función que devuelve un color de la paleta en función del índice
function getColorFromPalette(index) {
  switch (index % 10) {
    case 0: return color(135, 206, 250); // Light Sky Blue (Celeste Cielo)
    case 1: return color(0, 255, 255);   // Cyan (Cian)
    case 2: return color(64, 224, 208);  // Turquoise (Turquesa)
    case 3: return color(0, 128, 128);   // Teal (Verde Azulado)
    case 4: return color(75, 0, 130);    // Indigo
    case 5: return color(238, 130, 238); // Violet(a)
    case 6: return color(0, 0, 255);     // Blue (Azul)
    case 7: return color(0, 255, 0);     // Lime(a) (Verde)
    case 8: return color(255, 255, 255); // White (Blanco)
    case 9: return color(255, 0, 255);   // Magenta
    default: return color(255);          // White as default
  }
}

// Función para dibujar un patrón adicional dentro de cada círculo
function drawInnerPattern(x, y, diameter) {
  stroke(0, 50); // Borde con transparencia
  noFill();
  ellipse(x, y, diameter, diameter);
}

// Función que verifica si el mouse está sobre un círculo
function isMouseOverCircle(x, y, diameter) {
  return dist(mouseX, mouseY, x, y) < diameter / 2;
}

// Cambia el estado de interactividad al hacer clic con el mouse
function mousePressed() {
  if (isMouseOverCircle(3 * width / 4, height / 2, maxDiameter)) {
    interactive = !interactive;
  }
}

// Reinicia el estado con la interactividad desactivada al presionar la tecla 'r'
function keyPressed() {
  if (key === 'r' || key === 'R') {
    interactive = false;
    useColorPalette = false; // Volver a blanco y negro
  } else if (key === ' ') {
    useColorPalette = true; // Activar el uso de la paleta de colores
  }
}

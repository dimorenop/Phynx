//***Codigo para identificar la tecla presionada***//
/*
document.addEventListener('keydown', (event) => {
    //keysPressed[event.key] = true;
    console.log(event);
})
*/
//********************************************//


var teclas = {
    SHIFT : 16,
    UP : 38,
    DOWN : 40,
    LEFT : 37,
    RIGHT : 39

};

document.addEventListener('mousemove', dibujarMouse);
document.addEventListener('keydown', dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var inicioX = 200;
var inicioY = 150;
var x = 200;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}


function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
      return { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
  }
}

function dibujarMouse(evento)
{

    var colocito = "blue";
    var colorcito = "red";

    var mousePos1 = oMousePos(cuadrito, evento);
    var x1 = mousePos1.x;
    var y1 = mousePos1.y;

    dibujarLinea(colocito, x, y, x1, y1, papel);
    
    dibujarLinea(colorcito, x1-1, y1-1, x1+1, y1+1, papel);



    
/*

    switch (evento.keyCode) {
        case teclas.DOWN:
            dibujarLinea(colocito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.UP:
            dibujarLinea(colocito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colocito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colocito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
           
        default:
            break;
    }
*/

}

function dibujarTeclado(evento)
{
                
        switch (evento.keyCode) {
            case teclas.SHIFT:
                
                console.log("Shift presionada");

                var colorcito = "red";
                var mousePos = oMousePos(cuadrito, evento);
                var x = dibujarMouse.x1;
                var y = mousePos.y;
                dibujarLinea(colorcito, x-10, y-10, x+10, y+10, papel);
                
    }
}

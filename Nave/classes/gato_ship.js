function gato() {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.showFlame = false;

  // Tamaño de referencia para los límites de la pantalla
  this.width = 30;
  this.height = 30;

  // Cargar las imágenes una sola vez
  this.gatoImg = new Image();
  this.gatoImg.src = "gato.png";

  this.flameImg = new Image();
  this.flameImg.src = "gatop.png";

  // Tamaño visual del gato y de la llama
  this.gatoSize = 80;
  this.flameWidth = 60;
  this.flameHeight = 80;
}

gato.prototype.draw = function (context) {
  context.save();

  // Posición central del gato
  context.translate(this.x, this.y);

  // Girar el gato
  context.rotate(this.rotation);

  // Dibujar el gato en tamaño reducido
  if (this.gatoImg.complete && this.gatoImg.naturalWidth > 0) {
    context.drawImage(
      this.gatoImg,
      -this.gatoSize / 2,
      -this.gatoSize / 2,
      this.gatoSize,
      this.gatoSize
    );
  }

  // Dibujar la llama cuando hay propulsión
  if (
    this.showFlame &&
    this.flameImg.complete &&
    this.flameImg.naturalWidth > 0
  ) {
    context.drawImage(
      this.flameImg,
      -this.flameWidth / 2,
      this.gatoSize / 2 - 2,
      this.flameWidth,
      this.flameHeight
    );
  }

  context.restore();
};

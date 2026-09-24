function Star() {
    this.x = 50;
    this.y = 50;
    this.color = "#ffff00";
    this.scaleX = 1;
    this.scaleY = 1;
    this.rotation = 0;
    this.Star = new Image();
    this.Star.src = "imagenes/star.png";
    this.radius = 25;
    this.speedX = 2;
    this.speedY = 1;
}

Star.prototype.draw = function (context) {

    context.save();

    context.translate(this.x, this.y);

    context.rotate(this.rotation);

    context.scale(this.scaleX, this.scaleY);

    context.drawImage(
        this.Star,
        -this.radius,
        -this.radius,
        this.radius * 2,
        this.radius * 2
    );

    context.restore();
};

Star.prototype.update = function (canvas) {

    // Mover la estrella
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x + this.radius >= canvas.width ||
        this.x - this.radius <= 0) {

        this.speedX *= -1;
    }

    if (this.y + this.radius >= canvas.height ||
        this.y - this.radius <= 0) {

        this.speedY *= -1;
    }

    // Rotación ligera
    this.rotation += 0.02;
};


window.onload = function () {
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");


    var x = 10;
    var y = 10;

    function drawAndAnimate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, 200, 200);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.strokeRect(x, y, 200, 200);
        ctx.drawImage(img, 10, 300);
        ctx.drawImage(img, 220, 0, 215, 108, 10, 500, 220, 108);

        x += 2;
        x = x % canvas.width;
    }

    var img = new Image();
    img.onload = function () {
        setInterval(drawAndAnimate, 1000 / 60);
    }
    img.src = "Logo.png";
}
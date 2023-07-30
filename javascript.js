let app = document.getElementById ('typewriter');

let typewriter = new Typewriter(app,{
    loop: true,
    delay: 75,
});

typewriter
.pauseFor(1000)
.typeString('Soy Natalia Riquelme')
.pauseFor(1500)
.deleteChars(10)
.start();

let miImage = document.getElementById("experiencia");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src ", "unnamed(1).jpg");
  if (miSrc === "perfil.JPG") {
    miImage.setAttribute("src", "logoomm.png");
  } else {
    miImage.setAttribute("src", "perfil.JPG");
  }
};
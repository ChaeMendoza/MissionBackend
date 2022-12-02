function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo-hot")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
     
    Swal.fire({
        title: 'Sabía que dirías que sí!',
        text: 'Ya casémonos y tengamos hijos. Te amo!!!❤️',
        imageUrl: 'https://png.pngtree.com/png-clipart/20201205/ourlarge/pngtree-love-cartoon-couple-avatar-png-image_2511117.jpg',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

    const cancion = new Audio('../audio/audio.mp3');
    cancion.play();
});

divModoSexo.addEventListener('click', function(e) {
    const img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png";
    console.log(img)
    divModoSexo.appendChild(img)
});

let botones = document.getElementsByTagName("button")
console.log(botones)

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
});
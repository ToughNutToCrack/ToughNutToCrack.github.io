let isOpen = false;
var openBook = new Event('open-book')

let marker = document.querySelector("a-marker")

let book = document.querySelector("#book")

let towers = document.querySelector('#towers')
let cloud01 = document.querySelector('#cloud01')
let cloud02 = document.querySelector('#cloud02')
let cloud03 = document.querySelector('#cloud03')
let ar = document.querySelector("#ar")
let vr = document.querySelector("#vr")
let ddd = document.querySelector("#ddd")
let games = document.querySelector("#games")
let nutty = document.querySelector("#nutty")


book.addEventListener('open-book', function (evt) {
    // redBook.addEventListener('animation-finished', function(evt){

    towers.setAttribute('visible', true);
    towers.setAttribute('animation', "property: scale; from: 0 0 0; to: 0.1 0.1 0.1; dur: 1000; easing: linear")

    setTimeout(function (evt) {
        cloud01.setAttribute('visible', true);
        cloud01.setAttribute('animation', "property: scale; from: 0 0 0; to: 0.05 0.05 0.05; dur: 1500; easing: linear")
    }, 400)

    setTimeout(function (evt) {
        cloud02.setAttribute('visible', true);
        cloud02.setAttribute('animation', "property: scale; from: 0 0 0; to: 0.05 0.03 0.05; dur: 1500; easing: linear")
    }, 300)

    setTimeout(function (evt) {
        cloud03.setAttribute('visible', true);
        cloud03.setAttribute('animation', "property: scale; from: 0 0 0; to: 0.08 0.05 0.05; dur: 1500; easing: linear")
    }, 100)

    setTimeout(function (evt) {
        ar.setAttribute('visible', true);
        ar.setAttribute('animation', "property: scale; from: 0 0 0; to: 1 1 1; dur: 500; easing: linear")
    }, 200)

    setTimeout(function (evt) {
        vr.setAttribute('visible', true);
        vr.setAttribute('animation', "property: scale; from: 0 0 0; to: 1 1 1; dur: 500; easing: linear")
    }, 300)

    setTimeout(function (evt) {
        ddd.setAttribute('visible', true);
        ddd.setAttribute('animation', "property: scale; from: 0 0 0; to: 1 1 1; dur: 500; easing: linear")
    }, 400)

    setTimeout(function (evt) {
        games.setAttribute('visible', true);
        games.setAttribute('animation', "property: scale; from: 0 0 0; to: 1 1 1; dur: 500; easing: linear")
    }, 300)

    setTimeout(function (evt) {
        nutty.setAttribute('visible', true);
        nutty.setAttribute('animation', "property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: linear")
    }, 100)
})

// book.addEventListener('click', function (evt) {
//     console.log('click')

//     if (isOpen) {
//         book.setAttribute('animation-mixer', "clip: Open; timeScale:-1; duration: 2;")

//         setTimeout(function (evt) {
//             book.setAttribute('animation-mixer', "clip: Open; timeScale:0;")
//             isOpen = false;
//             console.log("libro chiuso")
//         }, 2000)
//     }
// })

marker.addEventListener('markerFound', function (evt) {
    if (!isOpen) {
        isOpen = true

        setTimeout(function (evt) {
            book.setAttribute('animation-mixer', "clip: Open; timeScale:1; duration: 2;")

            setTimeout(function (evt) {
                book.setAttribute('animation-mixer', "clip: Open; timeScale:0;")
                book.dispatchEvent(openBook)
            }, 2000)

        }, 1000)

    }
})


AFRAME.registerComponent('cursor-listener', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
});



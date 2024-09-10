// import LocomotiveScroll from "locomotive-scroll"

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach((el) => {
    let Parent = document.createElement("span")
    let Child = document.createElement("span")

    Parent.classList.add("parent")
    Child.classList.add("child")

    Child.innerHTML = el.innerHTML

    Parent.appendChild(Child)

    el.innerHTML = ""
    el.appendChild(Parent)
  })
}

function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 })
  gsap.set("#home .parent .child", { y: "100%" })
  gsap.set("#home .row img", { opacity: 0 })

  // document.querySelectorAll("#Visual>g").forEach(function (e) {
  //   e.childNodes[1].childNodes[1].style.strokeDasharray =
  //     e.childNodes[1].childNodes[1].getTotalLength() + "px"
  //   e.childNodes[1].childNodes[1].style.strokeDashoffset =
  //     e.childNodes[1].childNodes[1].getTotalLength() + "px"
  // })
}

function loaderAnimation() {
  var tl = gsap.timeline()

  tl.from("#loader .child span", {
    x: 160,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    ease: Power3.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-100%",
      duration: 1,

      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0%",
      delay: -0.8,
      duration: 1,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomepage()
      },
    })
}

function animateHomepage() {
  var tl = gsap.timeline()

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home .parent .child", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: Expo.easeInOut,
    })
    .to("#home .row img ", {
      opacity: 1,
      delay: -0.5,
      ease: Expo.easeInOut,
      onComplete: function () {
        animateSvg()
      },
    })
}

function animateSvg() {
  gsap.to("#Visual>g>g>path , #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
}

// function locomotive() {
//   var scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//   })
// }

function cardShow() {
  document.querySelectorAll(".cnt").forEach(function (cnt) {
    var showingImage
    cnt.addEventListener("mousemove", function (dets) {
      showingImage = dets.target

      showingImage.style.filter = "grayscale(1)"

      document.querySelector("#work").style.backgroundColor =
        "#" + dets.target.dataset.color
    })
    cnt.addEventListener("mouseleave", function (dets) {
      showingImage.style.filter = "grayscale(0)"
      document.querySelector("#work").style.backgroundColor = "#F2F2F2"
    })
  })
}

revealToSpan()
valueSetters()
loaderAnimation()
locomotive()
cardShow()

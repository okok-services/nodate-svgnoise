// mouse move

let target_x = 0;
let current_x = 0;

let target_y = 0;
let current_y = 0;

const ease = 0.075;
// const element = document.querySelector('.js-lerp-me')

window.addEventListener("mousemove", (e) => {
  target_x = e.clientX; // Stores the mouse (X) positon
  target_y = e.clientY; // Stores the mouse (X) positon
});

function animate() {
  current_x += (target_x - current_x) * ease; // This is where the magic happens
  current_y += (target_y - current_y) * ease; // This is where the magic happens

  //   element.style.transform = `translate3d(${current}px, 0, 0)`
  // change the value of the displacement map wihtout using gsap
  // document.querySelector(".svg1 feTurbulence").setAttribute("baseFrequency", `${current_x / 1000} ${current_y / 1000}`);
  // update seed
  // document.querySelector("feTurbulence").setAttribute("seed", Math.floor(Math.random() * 1000));

  let range_x = current_x / window.innerWidth;

  // document.querySelector("feImage").setAttribute("y", Math.floor(current_y));
  document.querySelector("feDisplacementMap").setAttribute("scale", (range_x - 0.5) * 200);

  // change scale
  // range of negative to value
  // console.log(range_x);

  // get from -2000 to 2000
  // let scale = range_x * 4000 - 2000;

  // document.querySelector(".svg1 feDisplacementMap").setAttribute("scale", scale);
  // document.querySelector(".svg2 feDisplacementMap").setAttribute("scale", scale * -1);
  // document.querySelector("feTurbulence").setAttribute("scale", scale);

  requestAnimationFrame(animate);
}

animate(); // Runs 60 times per second

// make color picker to change flood color

document.querySelector(".color-flood").addEventListener("input", (e) => {
  // document.querySelector("feFlood").setAttribute("flood-color", e.target.value);
});
document.querySelector(".color-bg").addEventListener("input", (e) => {
  document.querySelector(".bg-rect").setAttribute("fill", e.target.value);
  // document.querySelector(".left-side ").style.backgroundColor = e.target.value;
});
// document.querySelector(".left-side ").style.backgroundColor = document.querySelector(".color-bg").value;

// document.body.onclick = function () {
//   console.log("aa");

//   gsap.to(".left-side ", { xPercent: -50, rotateY: 20 });
//   gsap.to(".right-side", { xPercent: 40, rotateY: 20 });
//   gsap.to(".center-side", { xPercent: -55, rotateY: -25, scale: 0.9 });
// };

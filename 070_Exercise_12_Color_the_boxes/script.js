let rand_rgb = ()=> Math.floor(Math.random() * 255);
// console.log(rgb());

let cont = document.querySelector(".container");
// console.log(cont);

let allboxes = cont.querySelectorAll('.box')
// console.log(allboxes);

// testing
// console.log(`rgb(${rand_rgb()}, ${rand_rgb()}, ${rand_rgb()})`);

allboxes.forEach( (e) => {
    e.style.backgroundColor = `rgb(${rand_rgb()},${rand_rgb()},${rand_rgb()})` ;
    e.style.color = `rgb(${rand_rgb()},${rand_rgb()},${rand_rgb()})` ;
})
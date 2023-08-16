

// <--   yaha s shurru Hai -->

// const text = document.querySelector(".sec-text");

//         const textLoad = () => {
//             setTimeout(() => {
//                 text.textContent = "Student";
//             }, 2000);
//             setTimeout(() => {
//                 text.textContent = "Coder";
//             }, 4000);
//             setTimeout(() => {
//                 text.textContent = "Frontend Developer";
//             }, 6000);
//         }
//         textLoad();
//         setInterval(textLoad, 6000);


// toggling hamburger ====>>

// function opendropdown(){
//     dropdownn.classList.remove("d-none")
//     // dropdownn.classList.add("d-block")      //opening dropdown

//     cross.classList.remove("d-none")
//     // cross.classList.add("d-block")        //opening cross icon


//     // hamburger.classList.remove("d-block");
//     hamburger.classList.add("d-none");  
//     }

// function closedropdown(){
//     // dropdownn.classList.remove("d-block")
//     dropdownn.classList.add("d-none")         //closing dropdown

//     hamburger.classList.remove("d-none");
//     // hamburger.classList.add("d-block");       //opening hamburger icon

//     // cross.classList.remove("d-block")
//     cross.classList.add("d-none")   

//     }

var hamburgerr = document.querySelector("#hamburger")
var dropdown = document.querySelector("#dropdownn")
var cross = document.querySelector("#cross")
hamburgerr.addEventListener("click", function () {
    dropdown.style.display = "block";
    hamburgerr.style.display = "none";
    cross.style.display = "block";

})
cross.addEventListener("click", function () {
    dropdown.style.display = "none";
    hamburgerr.style.display = "block";
    cross.style.display = "none";

})

function movingCircle() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.cssText= "left: " + dets.pageX + "px; top: " + dets.pageY + "px;";
        // document.querySelector("#minicircle").style.cssText= "left: " + dets.scrollX + "px; top: " + dets.scrollY + "px;";
    })
}

movingCircle();


        // console.log(clientX)
        // `translate(${dets.clientX}px, ${dets.clientY}px)`

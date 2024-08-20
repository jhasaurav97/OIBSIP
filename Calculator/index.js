// let string = "";
// // Create a variable names string and store a spty value now;

// let buttons = document.querySelectorAll("button");
// // Create buttons variable name which is target the all buttons as the NodeList type

// Array.from(buttons).forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if(e.target.innerHTML == "="){
//             string = eval(string);
//             document.querySelector("input").value = string;
//         }
//         else if(e.target.innerHTML == "AC"){
//             string = "";
//             document.querySelector("input").value = string;
//         }
//         else{
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             document.querySelector("input").value = string;
//         }
//     })
// })

let string = "";
let buttons = document.querySelectorAll("button").length;

for(let i = 0; i < buttons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", (e) => {
        if(e.target.innerHTML == "ans"){
            string = eval(string);
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "clear"){
            string = "";
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "del"){
            string = string.slice(0, -1);
            document.querySelector("input").value = string;
        }else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
}





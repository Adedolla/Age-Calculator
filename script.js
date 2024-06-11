 let userInput = document.getElementById("date");
 userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");



 function calculateAge(){
    let birthDate = new Date(userInput.value);
    
    let a1 = birthDate.getDate();
    let b1 = birthDate.getMonth() + 1;
    let c1 = birthDate.getFullYear() ;

    let today = new Date();

    let a2 = today.getDate();
    let b2 = today.getMonth() + 1;
    let c2 = today.getFullYear () + 1; 

    let a3, b3, c3;

    c3 = c2 - c1;

    if(b2 < b1){
        b3 = b2 - b1;
    }else{
        c3--;
        b3 = 11 + b2 - b1;
    }

    if(a2 >= a1){
        a3 = a2 - a1;
    }else{
        c3--;
        a3 = getDaysInMonth(c1, b1 ) + a2 - a1;
    }
    if(b3 < 0){
        b3 = 11;
        c3--;
    }
    result.innerHTML = `You're <span> ${c3} </span> years, <span> ${b3} </span> Months and <span> ${a3} </span> Days old <i class="fa-regular fa-face-smile fa-spin fa-lg" style="color: #0f46eb;"></i> `;
 }

 function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
 }
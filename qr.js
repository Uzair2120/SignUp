const pass = document.getElementById("pass");
const inpass = document.getElementById("password");
const email = document.getElementById("email");
const user = document.getElementById("Username");
const login = document.getElementById("btn");
const validemail = email.checkValidity();




pass.addEventListener("click", function () {
    // toggle the type attribute
    const type = inpass.getAttribute("type") === "password" ? "text" : "password";
    inpass.setAttribute("type", type);
    if (inpass.type === "text") {
        pass.classList.remove("fa-eye");
        pass.classList.add("fa-eye-slash");
    }
    else {
        pass.classList.remove("fa-eye-slash");
        pass.classList.add("fa-eye");
    }
})

function valid() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var nameRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    if (!user.value || !user.value.match(nameRegex) || user.value.length < 6 || !inpass.value || inpass.value.length < 8 || !email.value.match(mailformat)) {
        if (login.style.alignSelf == "flex-end") {
            login.style.alignSelf = "flex-start";
        } else {
            login.style.alignSelf = "flex-end";
        }
    }
    // if( ){
    //     if(login.style.alignSelf == "flex-end"){
    //         login.style.alignSelf = "flex-start";
    //     }else{
    //         login.style.alignSelf = "flex-end";
    //     }
    // }
    // e.preventDefault();

    // let valid= true;

    // if(!email.value){
    //     btn.style.alignSelf = "flex-start"
    // }

    return valid;
}


btn.addEventListener("mouseover", valid);




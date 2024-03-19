const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const loginBtn = document.getElementById("login")



function getValue() {
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value

    if (emailValue == "harvoxxtechhub.com") {
        if (passwordValue == 123456) {
          document.getElementById("success").style.display = "flex"
      }
    }

}
getValue()

const closeIcon = document.getElementById("close")
closeIcon.addEventListener("click", () => {
    document.getElementById("success").style.display = "none"
})
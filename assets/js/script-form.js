(function () {
    emailjs.init("user_qKPtzAoe4kKbCwE4Zl8ia");
})();

function validateForm() {
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let website = document.querySelector('#website')
    let message = document.querySelector('#message')
    let submit = document.querySelector('#sendEmail')
    let honeypot = document.querySelector('#checkThisOut')

    submit.addEventListener("click", (e) => {
        e.preventDefault()

        if (name.value == "" || email.value == "" || message.value == "" || honeypot.value != "") {
            function error() {
                swal({
                    title: "Oops... Something doesn't seem right.",
                    text: "Please make sure the correct information has been entered into the fields." + "\n" + " If this persists please use the live chat.",
                    icon: "error",
                    button: "retry"
                });
            }
            error();
        } else {
            sendMail(name.value, email.value, website.value, message.value);
            function success(name) {
                swal({
                    title: "Hi, " + name + ". Thanks for your message.",
                    text: "I will get in touch with you as soon as possible.",
                    icon: "success",
                    button: "ok"
                });
            }
            success(name.value);
            document.querySelector("#contact-form").reset()
        }
    });
}
validateForm();

function sendMail(name, email, website, message) {
    emailjs.send("service_woaa93r", "template_u7xjzma", {
        user_name: name,
        user_email: email,
        user_website: website,
        message: message,
    });
}
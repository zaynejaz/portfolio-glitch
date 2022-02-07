// OPEN / CLOSE CONTACT FORM
function openPageTransitiont() {
    document.getElementById("pageTransition").style.width = "100%";
}
function closePageTransition() {
    document.getElementById("pageTransition").style.width = "0%";
}

// MODAL POPUP SETTINGS - for PROJECT LAB
const multiModal = (function () {

    let container = document.documentElement,
        popup = document.querySelector('.multiModal-popup-animate'),
        cover = document.querySelector('.multiModal-cover'),
        currentState = null;

    container.classList.add('multiModal-ready');

    // Deactivate on ESC
    function onDocumentKeyUp(event) {

        if (event.keyCode === 27) {
            deactivate();
        }

    }

    // Deactivate on click outside
    function onDocumentClick(event) {

        if (event.target === cover) {
            deactivate();
        }

    }

    function activate(state) {

        document.addEventListener('keyup', onDocumentKeyUp, false);
        document.addEventListener('click', onDocumentClick, false);
        document.addEventListener('touchstart', onDocumentClick, false);

        popup.classList.remove(currentState);
        popup.classList.add('no-transition');
        if (state)
            popup.classList.add(state);

        setTimeout(function () {
            popup.classList.remove('no-transition');
            container.classList.add('multiModal-active');
        }, 0);

        currentState = state;

    }

    function deactivate() {

        document.removeEventListener('keyup', onDocumentKeyUp, false);
        document.removeEventListener('click', onDocumentClick, false);
        document.removeEventListener('touchstart', onDocumentClick, false);

        container.classList.remove('multiModal-active');
        popup.classList.remove('multiModal-popup-animate');

    }

    function disableBlur() {

        document.documentElement.classList.add('no-blur');

    }

    function show(selector) {

        popup = document.querySelector(selector);
        popup.classList.add('multiModal-popup-animate');
        activate();
        return this;

    }

    function hide() {

        deactivate();

    }

    return {

        activate: activate,
        deactivate: deactivate,
        disableBlur: disableBlur,
        show: show,
        hide: hide

    }

})();


const pageContainer = document.querySelector("#pageContainer");
const projectModal = document.querySelector(".projectLink");
const closeModal = document.querySelector(".close.closebtn");
const closeModalCover = document.querySelector(".multiModal-cover");

projectModal.addEventListener("click", projectModalActive);
closeModal.addEventListener("click", projectModalInactive);
closeModalCover.addEventListener("click", projectModalInactive);
document.addEventListener("keydown", ({ key }) => {
    if (key === "Escape")
        projectModalInactive();
})

function projectModalActive() { pageContainer.style.filter = "blur(2px)"; }
function projectModalInactive() { pageContainer.style.filter = "blur(0px)"; }


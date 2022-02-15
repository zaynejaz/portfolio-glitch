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

// ===============Open Modals on click
function modalClient() {
    multiModal.show( "#modal-client" );
    projectModalActive();
}
function modalWebsite() {
    multiModal.show( "#modal-website" );
    projectModalActive();
}
function modalEmail() {
    multiModal.show( "#modal-email" );
    projectModalActive();
}
function modalLP() {
    multiModal.show( "#modal-lp" );
    projectModalActive();
}
// function modalCamp() {
//     multiModal.show( "#modal-camp" );
//     projectModalActive();
// }
function modalPwa() {
    multiModal.show( "#modal-pwa" );
    projectModalActive();
}
function modalProto() {
    multiModal.show( "#modal-proto" );
    projectModalActive();
}
function closeDialog() {
    multiModal.hide();
    projectModalInactive();
}
// ===============show / close modals
const pageContainer = document.querySelector("#pageContainer");
const projectModal = document.querySelector(".projectLink");
const closeModal = document.querySelector(".close.closebtn");
const closeModalCover = document.querySelector(".multiModal-cover");

projectModal.addEventListener("click", projectModalActive);
closeModal.addEventListener("click", projectModalInactive);
closeModalCover.addEventListener("click", projectModalInactive)
document.addEventListener("keydown", ({ key }) => {
    if (key === "Escape")
        projectModalInactive();
        activeShowFooter();
})

function projectModalActive() { pageContainer.style.filter = "blur(2px)"; window.scrollTo(0, 0);}
function projectModalInactive() { pageContainer.style.filter = "blur(0px)"; window.scrollTo(0,document.body.scrollHeight);
 }



// ===============Hide / show footer when modal is active
const mainFooter = document.querySelector("#footer-contact-section");
const hideFooter = document.querySelector(".removeFooter");
const showFooter = document.querySelector(".addFooter");

hideFooter.addEventListener("click", activeHideFooter);
showFooter.addEventListener("click", activeShowFooter);
closeModalCover.addEventListener("click", activeShowFooter)

function activeHideFooter() { 
    mainFooter.classList.add('hideFooter'), 
    mainFooter.classList.remove('showFooter');
}

function activeShowFooter() { 
    mainFooter.classList.remove('hideFooter'), 
    mainFooter.classList.hide('showFooter');
}


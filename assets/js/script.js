TweenMax.from(".contact-section p", 4, {
    delay: 2.5, opacity: 0, y: -25, ease: Expo.easeInOut
}
),
    TweenMax.from("main form", 3, {
        delay: 1, opacity: 0, y: 200, ease: Expo.easeInOut
    }

    ),
    TweenMax.from(".form-head h2", 3, {
        delay: 2.5, opacity: 0, y: 0, ease: Expo.easeInOut
    }

    ),

    TweenMax.from("footer", 3, {
        delay: 2.5, opacity: 0, y: 60, ease: Expo.easeInOut
    }

    ),

    // FOOTER DATE AUTO UPDATE YEAR

    window.addEventListener("load", () => {
        !function () {
            var e = new Date;
            null !== document.querySelector("#currentYear") && (document.querySelector("#currentYear").innerText = e.getFullYear())
        }
            ()
    }

    );

//SITE TOOLTIPS
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});




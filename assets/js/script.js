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


// < !--Start of Tawk.to Script-- >

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5f85b9cc4704467e89f71936/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

// <!--End of Tawk.to Script-- >
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


var def_tawk_bottom = "80px"; /*This is their default style that I want to change*/
var def_tawk_right = "16px"; /*This is their default style that I want to change*/
var customize_tawk = ""; /*Interval object*/

function customize_tawk_widget() {
    var cur_bottom = jQuery("iframe[title='chat widget']").eq(0).css('bottom'); /*Get the default style*/
    var cur_right = jQuery("iframe[title='chat widget']").eq(0).css('right'); /*Get the default style*/
    if (cur_bottom == def_tawk_bottom && cur_right == def_tawk_right) {
        /*Check if the default style exists then remove it and add my custom style*/
        jQuery("iframe[title='chat widget']").eq(0).css({ 'right': '', 'bottom': '' });
        jQuery("iframe[title='chat widget']").eq(0).addClass("custom-chat-widget");
        clearInterval(customize_tawk);
    }
}

/*Customize the widget as soon as the widget is loaded*/
Tawk_API = Tawk_API || {};
Tawk_API.onLoad = function () {
    /*Only for mobile version*/
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)) {
        var customize_tawk = setInterval(customize_tawk_widget, 100);
    }
};

/*Customize the widget as soon as the widget is minimized*/
Tawk_API = Tawk_API || {};
Tawk_API.onChatMinimized = function () {
    /*Only for mobile version*/
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)) {
        var customize_tawk = setInterval(customize_tawk_widget, 100);
    }
};



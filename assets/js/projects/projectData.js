// --------------====================CLIENT EXPERIENCE DATA====================--------------
const CEXP_DATA=[
    {
        projectTitle:   "Apple",
        projectURL:     "https://apple.com/",
    },
    {
        projectTitle:   "LVMH",
        projectURL:     "https://lvmh.com/",
    },
    {
        projectTitle:   "Mainfreight",
        projectURL:     "https://mainfreight.com/",
    },
    {
        projectTitle:   "Puma Energy",
        projectURL:     "https://pumaenergy.com/",
    },
    {
        projectTitle:   "Sheba",
        projectURL:     "https://sheba.com/",
    },
    {
        projectTitle:   "IAMS",
        projectURL:     "https://iams.com/",
    },
    {
        projectTitle:   "Mars Corporation",
        projectURL:     "https://mars.com/",
    },
    {
        projectTitle:   "BrightKids",
        projectURL:     "https://athome.brightkidspreschool.com/",
    },
    {
        projectTitle:   "ClubVet",
        projectURL:     "https://clubvet.com.tr/",
    },
    {
        projectTitle:   "Bubu Island",
        projectURL:     "https://bubu-island.com/",
    },
    // {
    //     projectTitle:   "",
    //     projectURL:     "",
    // }

] 

CEXP_DATA.reverse();

function dataPrinterCL_EXP(){
    let data_output = '';
    for(let i = 0; i < CEXP_DATA.length; i++) {
        data_output += '<li><a href="' + CEXP_DATA[i].projectURL + '" class="projectLink" target="_blank" rel="noopener noreferer">' + CEXP_DATA[i].projectTitle + '</a></li>';  
    }
    return data_output;
}

document.getElementById("clientExp-data").innerHTML= dataPrinterCL_EXP(); 


// --------------====================WEBSITE SAMPLES DATA====================--------------

const WS_DATA=[
    {
        projectTitle:   "Skulpt",
        projectURL:     "https://ze-skulpt.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/Skulpt",
        btnText:        "view code"
    },
    {
        projectTitle:   "Casablanca",
        projectURL:     "https://ze-casablanca.netlify.app/ ",
        projectRepo:    "https://github.com/zaynejaz/Casablanca",
        btnText:        "view code"
    },
    {
        projectTitle:   "Zayn Ejaz | GitHub Pages",
        projectURL:     "https://zaynejaz.github.io/ ",
        projectRepo:    "https://github.com/zaynejaz/zaynejaz.github.io",
        btnText:        "view code"
    },
    // {
    //     projectTitle:   "",
    //     projectURL:     "",
    //     projectRepo:    "",
    //     btnText:        "view code"
    // },
]

WS_DATA.reverse();

function dataPrinterWEB_SAM(){
    let data_output = '';
    for(let i = 0; i < WS_DATA.length; i++) {
        data_output += '<li><a href="' + WS_DATA[i].projectURL + '" class="projectLink" target="_blank" rel="noopener noreferer">' + WS_DATA[i].projectTitle + '</a><a href="' + WS_DATA[i].projectRepo + '" class="codeLink repoURL" target="_blank" rel="noopener noreferer">' + WS_DATA[i].btnText + '</a></li>';  
    }
    return data_output;
}

document.getElementById("webSamples-data").innerHTML= dataPrinterWEB_SAM(); 


// --------------====================HTML EMAIL DATA====================--------------
const HE_DATA=[
    {
        projectTitle:   "Apple Watch",
        projectURL:     "https://ze-email1-applewatch.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail3-Promotional",
        btnText:        "view code"
    },
    {
        projectTitle:   "Netflix | The Punisher: Frank",
        projectURL:     "https://ze-email2-punisherfrank.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail4-Promotional",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Netflix | The Punisher: Jigsaw",
        projectURL:     "https://ze-email2-punisherjigsaw.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail4.2-Promotional",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Netflix | The Punisher: Bullet Skull",
        projectURL:     "https://ze-email2-punisherskull.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail4.3-Promotional",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Netflix | The Punisher: Coming Soon",
        projectURL:     "https://ze-email2-punishergif.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail4.4-Promotional",
        btnText:        "view code"   
    },
    {
        projectTitle:   "TuneIn Premium",
        projectURL:     "https://ze-email3-tunein.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail5-Promotional",
        btnText:        "view code"   
    },
    {
        projectTitle:   "InVision Studio",
        projectURL:     "https://ze-email4-invision.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail6-Newsletter",
        btnText:        "view code"   
    },
    {
        projectTitle:   "National Geographic: Issue 169",
        projectURL:     "https://ze-email5-natgeo.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail7-Newsletter",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Pandora Premium",
        projectURL:     "https://ze-email6-pandora.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail8-Transactional",
        btnText:        "view code"   
    },
    {
        projectTitle:   "SquareSpace",
        projectURL:     "https://ze-email7-squarespace.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail9-Transactional",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Apple: New Products",
        projectURL:     "https://ze-email8-applenewproducts.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/HTMLEmail10-Multi",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Andrea Iyamah",
        projectURL:     "https://zaynejaz.github.io/klaviyo/",
        projectRepo:    "https://github.com/zaynejaz/klaviyo",
        btnText:        "view code"   
    },
    {
        projectTitle:   "MailerLite: Welcome",
        projectURL:     "https://zaynejaz.github.io/MailerLite/welcomeEmail/",
        projectRepo:    "https://zaynejaz.github.io/MailerLite/",
        btnText:        "view exhibition"   
    },
    {
        projectTitle:   "Altassian",
        projectURL:     "https://zaynejaz.github.io/htmlemail-altassianGit/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-altassianGit",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Design Modo",
        projectURL:     "https://zaynejaz.github.io/htmlemail-designModoBlackFriday/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-designModoBlackFriday",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Disney+ | Black Widow",
        projectURL:     "https://zaynejaz.github.io/htmlemail-disneyBlackWidow/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-disneyBlackWidow",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Disney+ | Subscription",
        projectURL:     "https://zaynejaz.github.io/htmlemail-disneySubscription/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-disneySubscription",
        btnText:        "view code"   
    },
    {
        projectTitle:   "F1 TV - Pro",
        projectURL:     "https://zaynejaz.github.io/htmlemail-f1TvPro/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-f1TvPro",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Ferrari Store",
        projectURL:     "https://zaynejaz.github.io/htmlemail-ferrariGifts/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-ferrariGifts",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Ferrari: Newsletter November",
        projectURL:     "https://zaynejaz.github.io/htmlemail-ferrariNewsNov/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-ferrariNewsNov",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Google Store",
        projectURL:     "https://zaynejaz.github.io/htmlemail-googleBlackFriday/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-googleBlackFriday",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Google Domains",
        projectURL:     "https://zaynejaz.github.io/htmlemail-googleDomains/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-googleDomains",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Louie Spencer: Masterclass",
        projectURL:     "https://zaynejaz.github.io/htmlemail-louiespenceMasterclass/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-louiespenceMasterclass",
        btnText:        "view code"   
    },
    {
        projectTitle:   "MacPaw: CleanMyMac X",
        projectURL:     "https://zaynejaz.github.io/htmlemail-macpawDiscover/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-macpawDiscover",
        btnText:        "view code"   
    },
    {
        projectTitle:   "MetaLab",
        projectURL:     "https://zaynejaz.github.io/htmlemail-metalabQuaterly/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-metalabQuaterly",
        btnText:        "view code"   
    },
    {
        projectTitle:   "MeUndies: Reciept",
        projectURL:     "https://zaynejaz.github.io/htmlemail-meUndiesThankYou/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-meUndiesThankYou",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Microsoft",
        projectURL:     "https://zaynejaz.github.io/htmlemail-microsoftROI/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-microsoftROI",
        btnText:        "view code"   
    },
    {
        projectTitle:   "National Geographic: Halloween",
        projectURL:     "https://zaynejaz.github.io/htmlemail-natGeoHalloween/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-natGeoHalloween",
        btnText:        "view code"   
    },
    {
        projectTitle:   "National Geographic: Inspire",
        projectURL:     "https://zaynejaz.github.io/htmlemail-natGeoInspire/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-natGeoInspire",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Netflix | Coming Soon",
        projectURL:     "https://zaynejaz.github.io/htmlemail-netflixComingSoon/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-netflixComingSoon",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Netflix | Kids",
        projectURL:     "https://zaynejaz.github.io/htmlemail-netflixKids/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-netflixKids",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Playstation | Wrap Up",
        projectURL:     "https://zaynejaz.github.io/htmlemail-playstationWrapUp/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-playstationWrapUp",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Under Armour: Train Harder",
        projectURL:     "https://zaynejaz.github.io/htmlemail-underarmourTraining/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-underarmourTraining",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Under Armour: Welcome",
        projectURL:     "https://zaynejaz.github.io/htmlemail-underarmourWelcome/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-underarmourWelcome",
        btnText:        "view code"   
    },
    {
        projectTitle:   "YouTube + Google One",
        projectURL:     "https://zaynejaz.github.io/htmlemail-youtubeGoogleOne/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-youtubeGoogleOne",
        btnText:        "view code"   
    },
    {
        projectTitle:   "YouTube Music",
        projectURL:     "https://zaynejaz.github.io/htmlemail-youtubeMusic/",
        projectRepo:    "https://github.com/zaynejaz/htmlemail-youtubeMusic",
        btnText:        "view code"   
    },

    // {
    //     projectTitle:   "",
    //     projectURL:     "",
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },
    

] 

HE_DATA.reverse();

function dataPrinterHTML_E(){
    let data_output = '';
    for(let i = 0; i < HE_DATA.length; i++) {
        data_output += '<li><a href="' + HE_DATA[i].projectURL + '" class="projectLink" target="_blank" rel="noopener noreferer">' + HE_DATA[i].projectTitle + '</a><a href="' + HE_DATA[i].projectRepo + '" class="codeLink repoURL" target="_blank" rel="noopener noreferer">' + HE_DATA[i].btnText + '</a></li>';  
    }
    return data_output;
}

document.getElementById("htmlEmail-data").innerHTML= dataPrinterHTML_E(); 


// --------------====================LANDING PAGE DATA====================--------------

const LP_DATA=[
    {
        projectTitle:   "DJI - Inspire II",
        projectURL:     "https://ze-inspire.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/DJInspire",
        btnText:        "view code"
    },
    {
        projectTitle:   "Coding Phase",
        projectURL:     "https://ze-htmlemaildeveloper.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/CodingPhase",
        btnText:        "view code"   
    },
    {
        projectTitle:   "MJSTK",
        projectURL:     "https://ze-mjstk.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/LandingPageMJSTK",
        btnText:        "view code"   
    },
    {
        projectTitle:   "FlexiFarm",
        projectURL:     "https://ze-flexifarm.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/Flexifarm-LP",
        btnText:        "view code"   
    },
    {
        projectTitle:   "FlexiFarm | SignUp",
        projectURL:     "https://ze-flexifarmsignup.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/Flexifarm-signup",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Microsoft",
        projectURL:     "https://ze-microsoft.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/Clone-Microsoft",
        btnText:        "view code"   
    },
    {
        projectTitle:   "The Email Company",
        projectURL:     "https://ze-theemailcompany.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/nextjs_landing_page",
        btnText:        "view code"   
    },
    {
        projectTitle:   "GPT-3",
        projectURL:     "https://ze-gpt3.netlify.app",
        projectRepo:    "https://github.com/zaynejaz/react-lp-gpt3",
        btnText:        "view code"   
    },
    {
        projectTitle:   "The Alpha Agency",
        projectURL:     "https://the-alpha-agency.vercel.app/",
        projectRepo:    "https://github.com/zaynejaz/react-agency-a",
        btnText:        "view code"   
    },
    {
        projectTitle:   "The Beta Agency",
        projectURL:     "https://the-beta-agency.vercel.app/",
        projectRepo:    "https://github.com/zaynejaz/react-agency-b",
        btnText:        "view code"   
    },
    {
        projectTitle:   "The Gamma Agency",
        projectURL:     "https://the-gamma-agency.vercel.app/",
        projectRepo:    "https://github.com/zaynejaz/react-agency-c",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Le Creative",
        projectURL:     "https://le-creative.vercel.app",
        projectRepo:    "https://github.com/zaynejaz/react-lp-creative",
        btnText:        "view code"   
    },
    {
        projectTitle:   "La Digital",
        projectURL:     "https://la-digital.vercel.app/",
        projectRepo:    "https://github.com/zaynejaz/react-lp-digital",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Startup",
        projectURL:     "https://ze-startup.vercel.app",
        projectRepo:    "https://github.com/zaynejaz/react-lp-startup",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Minimal",
        projectURL:     "https://ze-minimal.vercel.app/",
        projectRepo:    "https://github.com/zaynejaz/react-lp-minimal",
        btnText:        "view code"   
    },
    {
        projectTitle:   "CRM",
        projectURL:     "https://ze-crm.vercel.app/",
        projectRepo:    "https://github.com/zaynejaz/react-lp-crm",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Moderna",
        projectURL:     "https://ze-moderna.vercel.app/",
        projectRepo:    "https://github.com/zaynejaz/react-lp-moderna",
        btnText:        "view code"   
    },

    // {
    //     projectTitle:   "",
    //     projectURL:     "",
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

] 

LP_DATA.reverse();

function dataPrinterLP(){
    let data_output = '';
    for(let i = 0; i < LP_DATA.length; i++) {
        data_output += '<li><a href="' + LP_DATA[i].projectURL + '" class="projectLink" target="_blank" rel="noopener noreferer">' + LP_DATA[i].projectTitle + '</a><a href="' + LP_DATA[i].projectRepo + '" class="codeLink repoURL" target="_blank" rel="noopener noreferer">' + LP_DATA[i].btnText + '</a></li>';  
    }
    return data_output;
}

document.getElementById("lp-data").innerHTML= dataPrinterLP(); 


// --------------====================PWA DATA====================--------------

const PWA_DATA=[
    {
        projectTitle:   "Random Quote Generator",
        projectURL:     "https://zaynejaz.github.io/randomQuoteGenerator/",
        projectRepo:    "https://github.com/zaynejaz/randomQuoteGenerator",
        btnText:        "view code"
    },
    {
        projectTitle:   "Weather App",
        projectURL:     "https://ze-webapps.netlify.app/js%20web%20app-weather%20app%20-%20wthr/wthr",
        projectRepo:    "https://github.com/zaynejaz/WebApps/tree/master/JS%20Web%20App-Weather%20App%20-%20WTHR",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Quiz App",
        projectURL:     "https://ze-webapps.netlify.app/js%20web%20app-quiz%20app%20-%20kwizzr/kwizzr",
        projectRepo:    "https://github.com/zaynejaz/WebApps/tree/master/JS%20Web%20App-Quiz%20App%20-%20KWIZZR",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Book Library",
        projectURL:     "https://ze-webapps.netlify.app/js%20web%20app-text%20analyzer%20-%20searcher/searcher",
        projectRepo:    "https://github.com/zaynejaz/WebApps/tree/master/JS%20Web%20App-Text%20Analyzer%20-%20SEARCHER",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Voice Budget Tracker",
        projectURL:     "https://ze-arithmetica.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/react-budget-tracker",
        btnText:        "view code"   
    },
    {
        projectTitle:   "To Do List",
        projectURL:     "https://zaynejaz.github.io/react-todo-list-app/",
        projectRepo:    "https://github.com/zaynejaz/react-todo-list-app",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Calculator",
        projectURL:     "https://zaynejaz.github.io/react-calculator/",
        projectRepo:    "https://github.com/zaynejaz/react-calculator",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Currency Converter",
        projectURL:     "https://zaynejaz.github.io/currency-converter/",
        projectRepo:    "https://github.com/zaynejaz/currency-converter",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Crypto Price Tracker",
        projectURL:     "https://react-next-crypto-price-tracker.vercel.app/",
        projectRepo:    "https://github.com/zaynejaz/react-next-crypto-price-tracker",
        btnText:        "view code"   
    },
    {
        projectTitle:   "QR Code Generator",
        projectURL:     "https://ze-qrcode.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/react-qrcode",
        btnText:        "view code"   
    },
    {
        projectTitle:   "Web 3.0 Blockchain App",
        projectURL:     "https://ze-hyperion.netlify.app/",
        projectRepo:    "https://github.com/zaynejaz/react-blockchain-app",
        btnText:        "view code"   
    },

    // {
    //     projectTitle:   "",
    //     projectURL:     "",
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

] 

PWA_DATA.reverse();

function dataPrinterPWA(){
    let data_output = '';
    for(let i = 0; i < PWA_DATA.length; i++) {
        data_output += '<li><a href="' + PWA_DATA[i].projectURL + '" class="projectLink" target="_blank" rel="noopener noreferer">' + PWA_DATA[i].projectTitle + '</a><a href="' + PWA_DATA[i].projectRepo + '" class="codeLink repoURL" target="_blank" rel="noopener noreferer">' + PWA_DATA[i].btnText + '</a></li>';  
    }
    return data_output;
}

document.getElementById("pwa-data").innerHTML= dataPrinterPWA(); 


// --------------====================UX UI PROTOTYPES DATA====================--------------

const PROTO_DATA=[
    {
        projectTitle:   "Revitalize Architecture: Website Hero",
        projectURL:     "https://www.behance.net/gallery/90915067/Revitalize-Architecture",
    },
    {
        projectTitle:   "Bon Bon: Website Hero",
        projectURL:     "https://www.behance.net/gallery/90914997/BONBON-Chocolatiers",
    },
    {
        projectTitle:   "Monaco Beach Club: Website Hero",
        projectURL:     "https://www.behance.net/gallery/90914897/Monaco-Beach-Club",
    },
    {
        projectTitle:   "Zen Yoga: Website Hero",
        projectURL:     "https://www.behance.net/gallery/90914751/ZEN-YOGA",
    },
    {
        projectTitle:   "Elate Holidays: Website Hero",
        projectURL:     "https://www.behance.net/gallery/90914663/ELATEholidays",
    },
    {
        projectTitle:   "The Eclectic Loft: Homepage",
        projectURL:     "https://www.behance.net/gallery/90690749/Digital-Agency-Eclectic-Loft",
    },
    {
        projectTitle:   "Russo: Homepage",
        projectURL:     "https://www.behance.net/gallery/90690591/Attorney-Russo",
    },
    {
        projectTitle:   "AnalytIQ: Homepage",
        projectURL:     "https://www.behance.net/gallery/90690327/Consultancy-AnalytIQ",
    },
    {
        projectTitle:   "Opulent: Homepage",
        projectURL:     "https://www.behance.net/gallery/90690199/Product-Opulent",
    },
    {
        projectTitle:   "MediCare Group: Homepage",
        projectURL:     "https://www.behance.net/gallery/90689901/Medical-Medicare",
    },
    {
        projectTitle:   "Dietrich Klein: Homepage",
        projectURL:     "https://www.behance.net/gallery/90689421/ATTORNEY-DIETRICH-KLEIN",
    },

    // {
    //     projectTitle:   "",
    //     projectURL:     "",
    // },
]

PROTO_DATA.reverse();

function dataPrinterUXUI_PROTO(){
    let data_output = '';
    for(let i = 0; i < PROTO_DATA.length; i++) {
        data_output += '<li><a href="' + PROTO_DATA[i].projectURL + '" class="projectLink" target="_blank" rel="noopener noreferer">' + PROTO_DATA[i].projectTitle + '</a></li>';  
    }
    return data_output;
}

document.getElementById("uxuiProto-data").innerHTML= dataPrinterUXUI_PROTO(); 
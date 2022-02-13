
// --------------====================LANDING PAGE DATA====================--------------

const LP_DATA=[
    {
        projectTitle:   "DJI - Inspire II", 
        projectURL:     "https://ze-inspire.netlify.app/",  
        projectRepo:    "https://github.com/zaynejaz/DJInspire",
        btnText:        "view code"
    },
    {
        projectTitle:   "2", 
        projectURL:     "2",  
        projectRepo:    "2",
        btnText:        "view code"   
    },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

    // {
    //     projectTitle:   "", 
    //     projectURL:     "",  
    //     projectRepo:    "",
    //     btnText:        "view code"   
    // },

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
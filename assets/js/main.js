
"use strict";

// ==================== TOGGLE CHANGE SITE LANGUAGE ====================
// define lang reload anchors
var dataReload = document.querySelectorAll("[data-reload]");
// lang translations
var language = {
    // ENGLISH (default)
    en: {
        occupation: "Web Developer",
        location: "Istanbul, Turkey",
        about: "About",
        aboutme: "I'm a Web and Email Developer aimed at developing better experiences. Being comfortable with Email & CRM Marketing, I have experience with lifecycle campaigns, audience building, troubleshooting and research contributing to acquisition & growth.",
        // about1: "I'm a front-end Web and Email Developer",
        // about2: "who develops better experiences, and loves HTML Emails",
        // about3: "with experience in Email marketing from concept to final reporting",
        // moreAbout: "More on about me",
        projectLab: "Project Lab",
        projectlink1: "BrightKids (Learning Platform)",
        projectlink2: "Deren Tedarik (Ecommerce Store)",
        projectlink3: "Nazay Süt Çiftliği (Website)",
        projectlink4: "Microsoft (Landing Page)",
        projectlink5: "The Email Co (Landing Page)",
        projectlink6: "NatGeo (HTML Email)",
        projectlink7: "Apple (HTML Email)",
        projectlink8: "Apple: Watch (HTML Email)",
        projectlink9: "Andrea Iyamah (HTML Email)",
        projectlink10: "TuneIn (HTML Email)",
        projectlink11: "MailerLite (HTML Email)",
        codelink: "view code",
        exhibtion: "exhibtion",
        moreGH: "More on GitHub",
        contact: "Contact"
    },
    // TURKISH
    tr: {
        occupation: "Web / Eposta Geliştiricisi",
        location: "İstanbul, Türkiye",
        about: "Hakkında",
        aboutme: "Daha iyi deneyimler geliştirmeyi amaçlayan bir Web ve E-posta Geliştiricisiyim. E-posta ve CRM Pazarlama konusunda rahat olduğum için, yaşam döngüsü kampanyaları, kitle oluşturma, sorun giderme ve büyümeye katkıda bulunan araştırmalar konusunda deneyimim var.",
        // about1: "Ben bir ön uç Web ve E-posta Geliştiricisiyim",
        // about2: "Daha iyi deneyimler geliştiriyorum ve HTML E-postaları seviyorum",
        // about3: "E-posta pazarlamasında konseptten nihai raporlamaya kadar deneyimim var",
        // moreAbout: "Benim hakkımda daha fazla",
        projectLab: "Proje Laboratuvarı",
        projectlink1: "BrightKids (Öğrenme Platformu)",
        projectlink2: "Deren Tedarik (E-Ticaret Mağazası)",
        projectlink3: "Nazay Süt Çiftliği (Web Sitesi)",
        projectlink4: "Microsoft (Açılış Sayfası)",
        projectlink5: "The Email Co (Açılış Sayfası)",
        projectlink6: "NatGeo (HTML E-posta)",
        projectlink7: "Apple (HTML E-posta)",
        projectlink8: "Apple: Watch (HTML E-posta)",
        projectlink9: "Andrea Iyamah (HTML E-posta)",
        projectlink10: "TuneIn (HTML E-posta)",
        projectlink11: "MailerLite (HTML E-posta)",
        codelink: "kodu gör",
        exhibiton: "sergi",
        moreGH: "GitHub hakkında daha fazlası",
        contact: "İletişim"
    }
};
// define lang via window hash
if (window.location.hash) {
    if (window.location.hash === "#tr") {
        myOccupation.textContent = language.tr.occupation;
        myLocation.textContent = language.tr.location;
        aboutMe.textContent = language.tr.about;
        aboutMeText.textContent = language.tr.aboutme;
        // aboutMe1.textContent = language.tr.about1;
        // aboutMe2.textContent = language.tr.about2;
        // aboutMe3.textContent = language.tr.about3;
        // moreAbout.textContent = language.tr.moreAbout;
        projectLab.textContent = language.tr.projectLab;
        project1.textContent = language.tr.projectlink1;
        project2.textContent = language.tr.projectlink2;
        project3.textContent = language.tr.projectlink3;
        project4.textContent = language.tr.projectlink4;
        project5.textContent = language.tr.projectlink5;
        project6.textContent = language.tr.projectlink6;
        project7.textContent = language.tr.projectlink7;
        project8.textContent = language.tr.projectlink8;
        project9.textContent = language.tr.projectlink9;
        project10.textContent = language.tr.projectlink10;
        project11.textContent = language.tr.projectlink11;
        // codeLink1.textContent = language.tr.codelink;
        // codeLink2.textContent = language.tr.codelink;
        // codeLink3.textContent = language.tr.codelink;
        codeLink4.textContent = language.tr.codelink;
        codeLink5.textContent = language.tr.codelink;
        codeLink6.textContent = language.tr.codelink;
        codeLink7.textContent = language.tr.codelink;
        codeLink8.textContent = language.tr.codelink;
        codeLink9.textContent = language.tr.codelink;
        codeLink10.textContent = language.tr.codelink;
        codeLink11.textContent = language.tr.exhibiton;
        moreGH.textContent = language.tr.moreGH;
        contactMe.textContent = language.tr.contact;
    }
}
// define lang reload onclick illiteration
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}
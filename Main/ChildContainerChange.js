// CV Page buttons
const ExperiencePage = document.getElementById("Ervaring");
const SchoolPage = document.getElementById("Opleidingen");
const SkillsPage = document.getElementById("Vaardigheden");
// Projects page buttons
const UGPPage = document.getElementById("UGP");
const UGPIPage = document.getElementById("UGPI");
const UGPAHPage = document.getElementById("UGPAH");
// Works page buttons
//lmao get to it homie

function SwitchChildPage(switched) {
    ExperiencePage.classList.remove("active");
    SchoolPage.classList.remove("active");
    SkillsPage.classList.remove("active");
    UGPPage.classList.remove("active");
    UGPIPage.classList.remove("active");
    UGPAHPage.classList.remove("active");

    switch (switched) 
    {
        case "ExperiencePage":
        {
            ExperiencePage.classList.add("active");
            // window.scrollto(CVPage.getBoundingClientRect().x + 30,CVPage.getBoundingClientRect().y);
            break;
        }
        case "SchoolsPage" :
        {
            SchoolPage.classList.add("active");
            break;
        }
        case "SkillsPage" :
        {
            SkillsPage.classList.add("active");
            break;
        }
        case "UniversalGamePackagePage" :
        {
            UGPPage.classList.add("active");
            break;
        }
        case "UGPInstallerPage" :
        {
            UGPIPage.classList.add("active");
            break;
        }
        case "UGPAssetHandlerPage" :
        {
            UGPAHPage.classList.add("active");
            break;
        }
    }
}
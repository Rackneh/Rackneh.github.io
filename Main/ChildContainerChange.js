const ExperiencePage = document.getElementById("Ervaring");
const SchoolPage = document.getElementById("Opleidingen");
const SkillsPage = document.getElementById("Vaardigheden");

function SwitchChildPage(switched) {
    ExperiencePage.classList.remove("active");
    SchoolPage.classList.remove("active");
    SkillsPage.classList.remove("active");

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
    }
}
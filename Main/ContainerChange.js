const CVPage = document.getElementById("CV");
const ProjectPage = document.getElementById("Projects");
const WorkPage = document.getElementById("Works");

function SwitchPage(switched) {
    CVPage.classList.remove("active");
    ProjectPage.classList.remove("active");
    WorkPage.classList.remove("active");

    switch (switched) 
    {
        case "CVPage":
        {
            CVPage.classList.add("active")
            break;
        }
        case "ProjectsPage" :
        {
            ProjectPage.classList.add("active")
            break;
        }
        case "WorksPage" :
        {
            WorkPage.classList.add("active")
            break;
        }
    }
}


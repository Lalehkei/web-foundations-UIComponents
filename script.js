const cardsSection = document.querySelector(".card-section");
const searchInput = document.querySelector("#search-input");

let timeout;

let projects = [];

// const projects = [
//   {
//     title: "Portfolio Website",
//     description: "A responsive personal portfolio built using HTML, CSS, and JavaScript to showcase my projects.",
//     category: "Web Design",
//     img: "images/web-development.webp"
//   },
//   {
//     title: "Task Manager App",
//     description: "A simple task manager that allows users to add, delete, and manage daily tasks dynamically.",
//     category: "JavaScript",
//     img: "images/task-manager.png"
//   },
//   ,
//   {
//     title: "Weather App",
//     description: "A web application that fetches real-time weather data using an external API.",
//     category: "API Integration",
//     img: "images/weather-app.jpg"
//   }
// ];

async function loadProjects() {
    const response = await fetch("https://raw.githubusercontent.com/Lalehkei/web-foundations-UIComponents/feature/fetch-api/data/projects.json");
    projects = await response.json();

    rerenderProjects(projects);
}

loadProjects();


function rerenderProjects(projectsToRender) {
  let cards = "";

  projectsToRender.forEach((project) => {
    cards += `
    <article class="card">
                <img src=${project.img} alt="Project image"/>
                <span class="badge">${project.category}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button>View Project</button>
            </article>`;
  });

  cardsSection.innerHTML = cards;
}

rerenderProjects(projects);



searchInput.addEventListener("input", function () {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    const searchText = searchInput.value.toLowerCase();

    const filteredProjects = projects.filter((project) => {
      return project.title.toLowerCase().includes(searchText) || project.category.toLowerCase().includes(searchText);
    });
    rerenderProjects(filteredProjects);
  }, 500);
});

    












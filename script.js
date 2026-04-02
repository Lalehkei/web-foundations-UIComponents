const cardsSection = document.querySelector(".card-section");

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built using HTML, CSS, and JavaScript to showcase my projects.",
    category: "Web Design",
    img: "images/web-development.webp"
  },
  {
    title: "Task Manager App",
    description: "A simple task manager that allows users to add, delete, and manage daily tasks dynamically.",
    category: "JavaScript",
    img: "images/task-manager.png"
  },
  ,
  {
    title: "Weather App",
    description: "A web application that fetches real-time weather data using an external API.",
    category: "API Integration",
    img: "images/weather-app.jpg"
  }
];

projects.forEach(project => {cardsSection.innerHTML +=  `
    <article class="card">
                <img src=${project.img} alt="Project image"/>
                <span class="badge">${project.category}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button>View Project</button>
            </article>`;
});



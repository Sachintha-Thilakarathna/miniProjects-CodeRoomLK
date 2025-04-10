const projectInfo = document.getElementById('project-info');

fetch('assets/data/data.json')
  .then((response) => response.json())
  .then((data) => {
    data.projects.forEach((element) => {
      const template = `
        <div class="card" style="width: 18rem">
            <img src="${element.image}" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column">
             <div class="flex-grow-1">
             <div class="technologies badges mb-4">
            ${element.technologies
              .map((tech) => {
                return `<span class="badge rounded-pill text-bg-light border me-1">${tech}</span>`;
              })
              .join('')}            
            </div>
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">
                ${element.description}
            </p>
             </div>
           <div>
                       <a href="${
                         element.projectPath
                       }" class="btn btn-sm btn-primary align-self-start mt-4" target="_blank">Demo</a> <span></span>
            <a href="${
              element.ytLink
            }" class="btn btn-sm btn-danger align-self-start mt-4" target="_blank">
           <i class="fa-brands fa-youtube" ></i>
            </a></div>
            </div>
        </div>
`;
      projectInfo.innerHTML += template;
    });
  })
  .catch((error) => console.error('Error fetching data:', error));

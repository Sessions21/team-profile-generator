// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
      return `
        <div class="card employee-card shadow">
          <div class="card-header bg-primary text-light">
              <h2 class="card-title">${manager.getFirstName()} ${manager.getLastName()}</h2>
              <h3 class="card-title"><i class="fas fa-angry mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body bg-secondary bg-opacity-50">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getOffice()}</li>
              </ul>
          </div>
        </div>
      `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
      return `
        <div class="card employee-card shadow">
          <div class="card-header bg-primary text-light">
              <h2 class="card-title">${engineer.getFirstName()} ${engineer.getLastName()}</h2>
              <h3 class="card-title"><i class="fas fa-tools mr-2"></i>${engineer.getRole()}</h3>
          </div>
          <div class="card-body bg-secondary bg-opacity-50">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${engineer.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
              </ul>
          </div>
        </div>
      `;
    };

    // create the html for interns
    const generateIntern = intern => {
      return `
        <div class="card employee-card shadow">
          <div class="card-header bg-primary text-light">
              <h2 class="card-title">${intern.getFirstName()} ${intern.getLastName()}</h2>
              <h3 class="card-title"><i class="fas fa-baby mr-2"></i>${intern.getRole()}</h3>
          </div>
          <div class="card-body bg-secondary bg-opacity-50">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
          </div>
        </div>
      `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading bg-danger text-light">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-around">
          ${generateTeam(team)}
        </div>
      </div>
    </div>
  </body>
</html>
`;
};
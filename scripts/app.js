

fetch('./projects.json')
    .then((response) => response.json())
    .then((json) => json.forEach(data => {
        buildProject(data);
        console.log(data);
    })
        
);



function buildProject(project){
    console.log(project.title);
    const div = document.createElement('div');
    div.classList += 'project';
    const title = document.createElement('h1');
    title.append(project.title);
    const description = document.createElement('p');
    description.append(project.description);
    const pl = document.createElement('p');
    pl.append(project.programming_language);

    div.append(title);
    div.append(description);
    div.append(pl);

    document.querySelector('.projects').append(div);
}
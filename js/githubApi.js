function load () {

    element = document.getElementById("gitRepos");
    element.classList.toggle("hide");

    const loadingStatus = document.querySelector('#gitRepos')

let url = "https://api.github.com/users/PaulEvans78/repos"

async function  getrepo() {

    let response = await fetch(url);


    const repoList = document.getElementById("gitRepos")
    

    if(response.ok) {
        let data = await response.json();
        loadingStatus.innerText = " "
        console.log(data);
        for (const item of data){
            createRepoLi(repoList, item.name, item.html_url, item.description)
        }

    } else {

        console.log("HTTP-Error: " + response.status);
        }
    }

    function createRepoLi(repoList, name, html_url, description){
        const li = document.createElement('li')
        const a = document.createElement('a') 
        li.innerText = name + "\n " + description
        li.classList.add("gitHubStyle");
        a.classList.add("pinkStyle");

        
        repoList.appendChild(li)
        repoList.innerHTML += `<li class="gitApiList"><a href="${html_url}" class="git_link">${html_url}</a></li>`;
    }

   



    getrepo();


}


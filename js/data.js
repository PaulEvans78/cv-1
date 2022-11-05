let url = "./cv.json"

async function getCv() {

    let response = await fetch(url);
    const selfList = document.getElementById("jsoncharacter")
    const skillsList = document.getElementById("jsonSkills")
    const webHeader = document.getElementById("jsonExperience")
    const webList = document.getElementById("jsonExperience")
    const filmHeader = document.getElementById("jsonExperience")
    const filmList = document.getElementById("jsonExperience")
    const comHeader = document.getElementById("jsonExperience")
    const comList = document.getElementById("jsonExperience")
    const mvHeader = document.getElementById("jsonExperience")
    const mvList = document.getElementById("jsonExperience")
    const edOneList = document.getElementById("jsonEdOne")
    const edTwoList = document.getElementById("jsonEdTwo")
    const edThreeList = document.getElementById("jsonEdThree")
    const edFourList = document.getElementById("jsonEdFour")
    const edFiveList = document.getElementById("jsonEdFive")

    if(response.ok) {
        let data = await response.json();
        console.log(data);
        for (const item of data.self){
            createSelfLi(selfList, item.heading, item.text)
        }
        for (const item of data.skills){
            createSkillsLi(skillsList, item.heading, item.text)
        }
        for (const item of data.webtitle){
            createWebHLi(webHeader, item.heading)
        }
        for (const item of data.webExperience){
            createWebLi(webList, item.heading, item.text)
        }
        for (const item of data.filmtitle){
            createFilmHLi(filmHeader, item.heading)
        }
        for (const item of data.filmExperience){
            createFilmLi(filmList, item.heading, item.text)
        }
        for (const item of data.comtitle){
            createComHLi(comHeader, item.heading)
        }
        for (const item of data.comExperience){
            createComLi(comList, item.heading, item.text)
        }
        for (const item of data.mvtitle){
            createMvHLi(mvHeader, item.heading)
        }
        for (const item of data.mvExperience){
            createMvLi(mvList, item.heading, item.project, item.text)
        }
        for (const item of data.education1){
            createEdOneLi(edOneList, item.school, item.heading, item.date)
        }
        for (const item of data.education2){
            createEdTwoLi(edTwoList, item.school, item.heading, item.date)
        }
        for (const item of data.education3){
            createEdThreeLi(edThreeList, item.school, item.heading, item.date)
        }
        for (const item of data.education4){
            createEdFourLi(edFourList, item.school, item.heading, item.date)
        }
        for (const item of data.education5){
            createEdFiveLi(edFiveList, item.school, item.heading, item.date)
        }

      } else {

    console.log("HTTP-Error: " + response.status);
    }
}

function createSelfLi(selfList, heading, text){
    const li = document.createElement('li')
    li.innerText = heading + "\n\n " + text
    selfList.appendChild(li)
}

function createSkillsLi(skillsList, heading, text){
    const li = document.createElement('li')
    li.innerText = heading + "\n\n " + text
    skillsList.appendChild(li)
}

function createWebHLi(webHeader, heading){
    const li = document.createElement('li')
    li.innerText = heading
    li.classList.add("pinkStyle");
    webHeader.appendChild(li)
}

function createWebLi(webList, heading, text){
    const li = document.createElement('li')
    li.innerText = heading + " " + text
    webList.appendChild(li)
}

function createFilmHLi(filmHeader, heading){
    const li = document.createElement('li')
    li.innerText = heading
    li.classList.add("pinkStyle");
    filmHeader.appendChild(li)
}

function createFilmLi(filmList, heading, text){
    const li = document.createElement('li')
    li.innerText = heading + " " + text
    filmList.appendChild(li)
}

function createComHLi(comHeader, heading){
    const li = document.createElement('li')
    li.innerText = heading
    li.classList.add("pinkStyle");
    comHeader.appendChild(li)
}

function createComLi(comList, heading, text){
    const li = document.createElement('li')
    li.innerText = heading + " " + text
    comList.appendChild(li)
}

function createMvHLi(mvHeader, heading){
    const li = document.createElement('li')
    li.innerText = heading
    li.classList.add("pinkStyle");
    mvHeader.appendChild(li)
}

function createMvLi(mvList, heading, project, text){
    const li = document.createElement('li')
    li.innerText = heading + " " + project + " " + text
    mvList.appendChild(li)
}

function createEdOneLi(edOneList, school, heading, date){
    const li = document.createElement('li')
    li.innerText = school + "\n " + heading + "\n " + date
    edOneList.appendChild(li)
}

function createEdTwoLi(edTwoList, school, heading, date){
    const li = document.createElement('li')
    li.innerText = school + "\n " + heading + "\n " + date
    edTwoList.appendChild(li)
}

function createEdThreeLi(edThreeList, school, heading, date){
    const li = document.createElement('li')
    li.innerText = school + "\n " + heading + "\n " + date
    edThreeList.appendChild(li)
}

function createEdFourLi(edFourList, school, heading, date){
    const li = document.createElement('li')
    li.innerText = school + "\n " + heading + "\n " + date
    edFourList.appendChild(li)
}

function createEdFiveLi(edFiveList, school, heading, date){
    const li = document.createElement('li')
    li.innerText = school + "\n " + heading + "\n " + date
    edFiveList.appendChild(li)
}



getCv();


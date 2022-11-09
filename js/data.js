let url = "./cv.json"

    const selfList = document.getElementById("jsoncharacter")
    const skillsList = document.getElementById("jsonSkills")
    const webList = document.getElementById("webDes")
    const filmList = document.getElementById("film")
    const comList = document.getElementById("comm")
    const mvList = document.getElementById("promo")
    const edOneList = document.getElementById("jsonEdOne")
    const edTwoList = document.getElementById("jsonEdTwo")
    const edThreeList = document.getElementById("jsonEdThree")
    const edFourList = document.getElementById("jsonEdFour")
    const edFiveList = document.getElementById("jsonEdFive")

async function getCv() {

    let response = await fetch(url);
    if(response.ok) {
        let data = await response.json();
        console.log(data);

        for (const item of data.self){
            createSelfLi(selfList, item.text)
        }
        for (const item of data.skills){
            createSkillsLi(skillsList, item.text)
        }
        for (const item of data.webExperience){
            createWebLi(webList, item.heading, item.text)
        }  
        for (const item of data.filmExperience){
            createFilmLi(filmList, item.heading, item.text)
        }
        for (const item of data.comExperience){
            createComLi(comList, item.heading, item.text)
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

function createSelfLi(selfList, text){
    const li = document.createElement('li')
    li.innerText = text
    selfList.appendChild(li)
}

function createSkillsLi(skillsList, text){
    const li = document.createElement('li')
    li.innerText = text
    skillsList.appendChild(li)
}

function createWebLi(webList, heading, text){
    const li = document.createElement('li')
    li.innerText = heading + " " + text
    webList.appendChild(li)
}

function createFilmLi(filmList, heading, text){
    const li = document.createElement('li')
    li.innerText = heading + " " + text
    filmList.appendChild(li)
}

function createComLi(comList, heading, text){
    const li = document.createElement('li')
    li.innerText = heading + " " + text
    comList.appendChild(li)
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



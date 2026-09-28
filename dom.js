let studentName = document.getElementById("studentName");
let studentCourse = document.getElementById("studentCourse");
let studentCard = document.getElementById("studentCard");
let skillList = document.querySelector("ul");

document.getElementById("changeName").onclick = function() {
    let name = prompt("Enter new name");
    studentName.innerText = name;
};

document.getElementById("changeCourse").onclick = function() {
    let course = prompt("Enter new course");
    studentCourse.innerText = course;
};

document.getElementById("showDetails").onclick = function() {
    alert(
        "Name: " + studentName.innerText +
        "\nAge: " + document.getElementById("studentAge").innerText +
        "\nCourse: " + studentCourse.innerText
    );
};

document.getElementById("highlight").onclick = function() {
    studentCard.style.backgroundColor = "yellow";
};

document.getElementById("removeHighlight").onclick = function() {
    studentCard.style.backgroundColor = "white";
};

document.getElementById("toggleTheme").onclick = function() {
    studentCard.style.backgroundColor = "black";
    studentCard.style.color = "white";
};

document.getElementById("addSkill").onclick = function() {
    let skill = prompt("Enter new skill");

    let li = document.createElement("li");
    li.innerText = skill;

    skillList.appendChild(li);
};

document.getElementById("removeSkill").onclick = function() {
    skillList.removeChild(skillList.lastElementChild);
};

document.getElementById("replaceSkill").onclick = function() {
    let oldSkill = prompt("Enter skill to replace");
    let newSkill = prompt("Enter new skill");

    let skills = skillList.getElementsByTagName("li");

    for (let i = 0; i < skills.length; i++) {
        if (skills[i].innerText == oldSkill) {
            skills[i].innerText = newSkill;
        }
    }
};
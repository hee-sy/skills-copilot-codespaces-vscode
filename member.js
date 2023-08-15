function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var projectsBtn = document.getElementById("projectsBtn");
    var contactBtn = document.getElementById("contactBtn");

    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";

    memberBtn.style.backgroundColor = "#1a1a1a";
    memberBtn.style.color = "#fff";
    skillsBtn.style.backgroundColor = "#fff";
    skillsBtn.style.color = "#1a1a1a";
    projectsBtn.style.backgroundColor = "#fff";
    projectsBtn.style.color = "#1a1a1a";
    contactBtn.style.backgroundColor = "#fff";
    contactBtn.style.color = "#1a1a1a";
}

//HAMBURGER
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');})
})

var coll = document.getElementsByClassName("btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var textcontent = document.getElementById("#textcontent");
    textcontent.hidden = !textcontent.hidden;
    console.log(textcontent)
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


//NEON BUTTON
const neonbtn = document.getElementById("neon-button");

neonbtn.addEventListener('click',() => {
  console.log('button has been pressed, time to party')
document.body.style.backgroundColor='hsl(317 100% 54%)';
});


//JSON FILER JS
// vart den ska
const cvname = document.getElementById("cvName");

// vad den är
const cv = fetch("./CV.json")
.then(response => {
   return response.json();
})
.then(cvData => {
  // cvData === CV.json
  // vad som ska
  cvname.innerText = cvData.name

  // <div class="services">
  const servicesContainers = document.getElementsByClassName("services")
  const servicesContainer = servicesContainers[0]

  // Loopa igenom experiences
  cvData.experiences.forEach(experience => {

    const serviceDivElement = document.createElement('div')
    serviceDivElement.classList.add("service")

    const titleElement = document.createElement('h3')
    const descriptionElement = document.createElement('p')

    titleElement.innerText = experience.title
    descriptionElement.innerText = experience.description

    serviceDivElement.appendChild(titleElement)
    serviceDivElement.appendChild(descriptionElement)

    servicesContainer.appendChild(serviceDivElement)
  })
});

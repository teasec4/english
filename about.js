let conP = document.getElementById('containerP')
let conHeroes = document.getElementById('containerHeroes')
let conProjects = document.getElementById('containerProject')
let openHeroes = document.getElementById("openHeroes")
let openProjects = document.getElementById('openProjects')

let back1 = document.getElementById('back1')
let back2 = document.getElementById('back2')



openHeroes.addEventListener('click', function () {
    conP.className = "d-none";
   conHeroes.className = "align-items-center justify-content-center\n" +
       " containerP2";

})

openProjects.addEventListener('click', function () {
    conP.className = "d-none";
    conProjects.className = "containerP2";

})

back1.addEventListener('click', function () {
    conHeroes.className ='d-none';
    conP.className = 'containerP';
})

back2.addEventListener('click', function () {
    conProjects.className ='d-none';
    conP.className = 'containerP';
})
const instagram = document.querySelector('.fa-instagram');
const discord = document.querySelector('.fa-discord');
const github = document.querySelector('.fa-github');
const tiktok = document.querySelector('.fa-tiktok');

function insta() {

}

// instagram.addEventListener('click', insta);
// discord.addEventListener('click', disc);
// github.addEventListener('click', gith);
// tiktok.addEventListener('click', tikt);

// animation

const subtext = document.querySelector('h6');
let subtextLength;

function prepare() {
    let localText = '';
    subtextLength = subtext.innerText.length;
    for (let i = 0; i < subtext.innerText.length; i++) {
        localText += `<span class="letter-${i} letter">${subtext.innerText.charAt(i)}</span>`;
    }
    subtext.innerHTML = localText;
}

function animate() {
    let rand = Math.round(Math.random()*200 + 55);
    let rand2 = Math.round(Math.random()*200 + 55);
    let rand3 = Math.round(Math.random()*200 + 55);
    let color = `rgb(${rand}, ${rand2}, ${rand3})`;
    for (i = 0; i < subtextLength; i++) {
        let letter = document.querySelector(`.letter-${i}`)
        setTimeout(function() {letter.style.color = color}, i * 100);
        setTimeout(function() {letter.style.color = 'white'}, i * 100 + 400);
    }
    setTimeout(animate, i*200 + 1000);
}

prepare();
setTimeout(animate, 1000);


let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
//open contact page
var contact = document.querySelector(".contact-hidden");
var contactBackground = document.querySelector(".contact-bg-hidden");
var contactButton = document.querySelector(".item12");
var contactContainer = document.querySelector(".contactContainer-hidden");
var contactHeader = document.querySelector(".contactHeader-hidden");
var info = document.querySelector(".info-hidden");
var closeInfo = document.querySelector(".closeContact-hidden");


console.log(contactButton);
console.log(contactBackground);
console.log(contactContainer);
console.log(info);

function showContact() {
    contact.classList.toggle("contact-show");
    contactBackground.classList.toggle("contact-bg-show");
    contactContainer.classList.toggle("contactContainer-show");
    contactContainer.classList.toggle("contactHeader-show");
    info.classList.toggle("info-show");
    closeInfo.classList.toggle("closeContact-show");
}

contactButton.addEventListener("click", showContact);

//close contact page
function closeContact() {
    contact.classList.remove("contact-show");
    contactBackground.classList.remove("contact-bg-show");
    contactContainer.classList.remove("contactContainer-show");
    contactContainer.classList.remove("contactHeader-show");
    info.classList.remove("info-show");
    closeInfo.classList.remove("closeContact-show");
}

closeInfo.addEventListener("click", closeContact);

// portfolio logo mouseover w/ stripe

var logo2 = document.querySelector(".logo2-hidden");
var logo3 = document.querySelector(".logo3-hidden");
var logoHover = document.querySelector(".logo");

console.log(logo2);

function showLogo() {
    logo2.classList.toggle("logo2");
    logo3.classList.toggle("logo3");

}

console.log(logo2);

function hideLogo() {
    logo2.classList.toggle("logo2");
    logo3.classList.toggle("logo3");
}
logoHover.addEventListener("mouseover", showLogo);
logoHover.addEventListener("mouseout", hideLogo);

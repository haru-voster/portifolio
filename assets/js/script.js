'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * whatsappp no
 * **/
function sendWhatsAppMessage()
{
  var phoneNumber = "+254708466793";
  var formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
  var whatsappLink = "https://api.whatsapp.com/send?phone=" + formattedPhoneNumber;
  window.open(whatsappLink);
}

/**
 
 */
const roles = ["Network Administrator", "Software Engineer", "Computer Scientist"];
let roleIndex = 0; // Track current role
let charIndex = 0; // Track current character in the role string
const typingSpeed = 100; // Speed of typing
const erasingSpeed = 50;  // Speed of erasing
const delayBetweenRoles = 2000; // Delay before switching roles

const roleElement = document.getElementById('role');

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed); // Continue typing
    } else {
        setTimeout(eraseRole, delayBetweenRoles); // Pause before erasing
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, erasingSpeed); // Continue erasing
    } else {
        // Move to the next role
        roleIndex = (roleIndex + 1) % roles.length; // Loop back to the start after both are typed
        setTimeout(typeRole, typingSpeed); // Start typing the next role
    }
}

typeRole();


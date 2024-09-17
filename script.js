const nameElement = document.getElementById("name");
const textToType = "Karzhin Kamal";
let index = 0;
let isDeleting = false;
let typingSpeed = 150; //milliseconds
let deletingSpeed = 200; //milliseconds
let delayBetweenCycles = 2000; 

function type() {
    const currentText = textToType.substring(0, index);
    nameElement.textContent = currentText;

    if (!isDeleting && index < textToType.length) {
        // Typing effect
        index++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && index > 0) {
        // Deleting
        index--;
        setTimeout(type, deletingSpeed);
    } else if (!isDeleting && index === textToType.length) {
        setTimeout(() => {
            isDeleting = true;
            type();
        }, delayBetweenCycles);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(type, typingSpeed);
    }
}
type();

document.querySelector(".dropbtn").addEventListener("click", function() {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



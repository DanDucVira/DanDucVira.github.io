const btnSkills = document.getElementsByClassName('.btnSkills');
const containerSkills = document.querySelector('.containerSkills');

btnSkills.addEventListener('click', () => {
    if (containerSkills.style.display == 'none') {
        btnSkills.textContent = 'Hide List'
        return containerSkills.style.display = 'block'
    } else {
        btnSkills.textContent = 'Show List'
        containerSkills.style.display = "none"
    }



});
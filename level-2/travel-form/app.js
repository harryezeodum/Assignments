const form = document.airline;

function formSubmit(event) {
    event.preventDefault();

    const firstName = form["first-name"].value;
    const lastName = form["last-name"].value;
    const age = form.age.value;
    const gender = form.gender.value;
    const location = form.location.value;
    const diet = [];
    for (let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            diet.push(form.diet[i].value);
        }
    }
  
    alert(`First name: ${firstName}\n Last name: ${lastName} \n Age: ${age} \n Gender: ${gender} \n Location: ${location} \n Diet if applicable: ${diet}`)

    form["first-name"].value = "";
    form["last-name"].value = "";
    form.age.value = "";
    form.gender.value = false;
    form.location.value = "";
    for (let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            form.diet[i].checked = false;
        }
    }
    
}

form.addEventListener("submit", formSubmit);
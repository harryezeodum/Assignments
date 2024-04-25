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
        if (form.diet[i].checked) {
            diet.push(form.diet[i].value);
        }
    }

    alert(`First name: ${firstName} \nLast name: ${lastName} \nAge: ${age} \nGender: ${gender} \nLocation: ${location} \nDiet if applicable: ${diet}`);

    form["first-name"].value = "";
    form["last-name"].value = "";
    form.age.value = "";
    for (let i = 0; i < form.gender.length; i++) {
        form.gender[i].checked = false;
    }
    form.location.value = "";
    for (let i = 0; i < form.diet.length; i++) {
        form.diet[i].checked = false;
    }

}

form.addEventListener("submit", formSubmit);
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const results = data.objects[0].pokemon;
        showData(results);
        //console.log(results);
    }
}

function showData(pokemonNames) {
    const arr = pokemonNames.map(pokemonName => {
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        h3.textContent = pokemonName.name.toUpperCase() + ": " + pokemonName.resource_uri;
        li.appendChild(h3);
        ul.appendChild(li);
        //document.body.appendChild(h3);
    })
    return arr;

    addEventListener
}
(function(){
    const ul = document.querySelector('.suggestions');
    const search = document.querySelector('.search');
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    function loadData(cities){
        ul.innerHTML = "";
        for (var city of cities) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(city));
            ul.appendChild(li);
        }
    }

    fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
            const cities = data.map(data => data.city);
            search.addEventListener('input', () => {
                loadData(cities.filter((value) => value.includes(search.value)));
            });
        });
}())
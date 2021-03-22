const queryString = require('query-string');

const parsed = queryString.parse(location.search);

let p = parsed.pagina;
const startPoint = ((p - 1) * 30) + 1;
const  x = fetch(`https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=${startPoint}&size=30`)
    .then(response => response.json())
    .then(data => {
        for (const test of data){
            const a = document.createElement("div");
            a.innerHTML = test.name;
            document.getElementById('div').appendChild(a);
        }
    });



const next = document.createElement('a');
next.href = `index.html?p=${p+1}`;
next.innerText = "Volgende";

const page = document.getElementById("pagina");
console.log(page);
page.appendChild(next);



// const btn = document.getElementById('btn').addEventListener('click', function () {
//    // for (p = 1; p )
// });
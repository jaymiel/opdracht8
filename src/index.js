const queryString = require('query-string');

const parsed = queryString.parse(location.search);

console.log(parsed.pagina);
let p = parsed.pagina;
const startpoint = ((p - 1) * 30) + 1;
const  x = fetch(`https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=${startpoint}&size=30`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (const test of data){
            console.log(test.name);
            const a = document.createElement("div");
            a.innerHTML = test.name;
            document.body.appendChild(a);
        }
    });




// const btn = document.getElementById('btn').addEventListener('click', function () {
//    // for (p = 1; p )
// });
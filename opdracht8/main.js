const x = fetch('https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=1&size=30')
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



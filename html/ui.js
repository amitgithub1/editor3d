let message = (m, p, f) => {
    // console.log("messaging")
    fetch(p,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        //   'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(m)
    })
        .then(response => response.json())
        .then(data => {
            f(data)
        });
}

let setinbox = (id, d)=>{
    document.getElementById(id).innerHTML = d;
}
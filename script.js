document.body.innerHTML = `
<div class="container">
<div class="heading-container">Predicting nationality based on name</div>
<div class="input-container">
<input id="searchInput" type="text" placeholder="Enter a name" />
</div>
<div id="result"></div>
</div>
`

let nameEle = document.getElementById("searchInput");

nameEle.addEventListener("input", async() => {
    let name = nameEle.value;
    console.log(name);
    try {
        let data = await fetch(`https://api.nationalize.io?name=${name}`,{
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        let response = await data.json();
        displayCountries(response);
    }catch (err){
        console.log(err);
    }
});

const displayCountries = async (obj) => {
    result.innerHTML = "";
    for(let i = 0; i < 2; i++){
    result.innerHTML +=`
    <div class="country-container">
        <h3>Name: ${obj.name}</h3>
        <p><span class="span">Country Id: </span>${obj.country[i].country_id}<p>
        <p><span class="span">Probability: </span>${obj.country[i].probability}</p>
    </div>
    `
    }
}


  

 
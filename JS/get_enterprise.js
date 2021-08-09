const API_enterprise = "http://localhost:8000/api/enterprise/";
    const getJson = async (searchbox) => {
        const apiURL = searchbox ? `${API_enterprise}` : API_enterprise;
            const response = await fetch(apiURL);
            const data = await response.json();
            
            //Get Entered Data
            let fits = data.filter(company => {
                const regex = new RegExp(`${searchbox}`,'i');
                console.log(company.name.match(regex));
                return company.name.match(regex) || company.address.match(regex);
            });

            if (searchbox.length === 0){
                fits = [];
                companyList.innerHTML = ' ';
            }

            outputHtml(fits);
};

const outputHtml = fits => {
    //console.log(fits);
    if (fits.length > 0) {
        const html = fits
        .map(
        fit => `
    <div class="box">
        <form>
            <div class="photo">
                <img src="${fit.image}">
            </div>
            <div class="info-box">
                <div class="name">
                    <h3>
                        "${fit.name}"
                    </h3>   
                </div>
                <div class="company-info">
                    <textarea class="inputdata-info" type="text">${fit.description}</textarea>   
                </div>
                <div class="location">
                    <h3>Ubicación: </h3>
                    <h4>
                        ${fit.address}
                    </h4>   
                </div>
                <div class="contact">
                    <h3>Contactos:</h3>
                    <h4>
                        ${fit.phone}
                    </h4>   
                </div>
            </div>
        </form>
        
    </div>
    `
    )
    .join('');

    document.getElementById('companyList').innerHTML = html;
    }
};

document.getElementById('searchterm')
.addEventListener('input',() => getJson(searchterm.value));
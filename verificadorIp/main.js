const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bfe26c3db4msh35e2c0c5921b5e5p1b3668jsn27731f7034fd',
		'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
	}
};

const fetchIpInfo = ip =>{
    return fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`, OPTIONS)
        .then(response => response.json())
        .catch(err => console.log(err))
}

const form = document.querySelector("#form")
const input = document.querySelector("#input")
const results = document.querySelector("#results")
const button = document.querySelector("#submit")

form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const {value} = input;
    if (!value) return

    button.setAttribute("disabled", "")
    button.textContent = "Cargando";

    const ipInfo = await fetchIpInfo(value)

    if(ipInfo){
        results.innerHTML = JSON.stringify(ipInfo,null,2)
    }

    button.textContent = "Verificar Ip";
    button.removeAttribute("disabled")

})
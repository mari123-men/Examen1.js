import getDataHarry from "./getData.js";

async function showDataHarry(){
    const cambio = await getDataHarry
    let div = document.getElementById("house");
    cambio.forEach(e => {
        let h1 = document.createElement("h1");
        h1.innerHTML = e.house;
        div.appendChild(h1);
    });

}
export default showDataHarry
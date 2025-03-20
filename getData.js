import url from "./apiUrl.js";

 async function getDataHarry (){ 
    try {
        const data = await fetch(url);
            if(!data.ok){
                throw new Error("El error es:", data.status);
            }
        const dataJson = await data.json();
        return (dataJson)
    } catch (error) {
        console.log(error.message);
    }
}
export default getDataHarry


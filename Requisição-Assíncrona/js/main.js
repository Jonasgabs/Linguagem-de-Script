const campoCep = document.getElementById("cep");
const campoNeighborhood = document.getElementById("neighborhood")
const campoNumber = document.getElementById("number")
const camposState = document.getElementById("state")
const campoStreet = document.getElementById("street")
const campoCity = document.getElementById("city")
const errorCep = document.getElementById("cepError")

async function getcep(cep) {
    try {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(apiUrl)

    return await response.json()
    } catch (error){
        throw new Error("Cep inválido")
    }

}


campoCep.onblur = async () => {

    let CEP = campoCep.value;
    
    
    try{
        const cepData = await getcep(CEP);
        if(!errorCep.classList.contains("hidden")){
            errorCep.classList.add("hidden")
        };
        campoStreet.value = cepData.logradouro;
        campoNeighborhood.value = cepData.bairro;
        camposState.value = cepData.estado;
        campoCity.value = cepData.localidade;
        campoNumber.focus();

    } catch (error){
        errorCep.classList.remove("hidden");
    };
    
};



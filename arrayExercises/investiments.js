export function total(investiments){
    let sum = 0
    for (let i = 0; i < investiments.length; i++){
        sum += investiments[i].value
    }

    return sum / 100
}

export function totalcomreduce(investiments){
    let result = investiments.reduce((total, valor) => (valor.value + total), 0) / 100;
    return result
}

export function cat(investiments, category){
    let result = investiments.filter((c) => c.category === category).reduce((total, valor) => (valor.value + total), 0) / 100;
    return result
}

export function porcent(investiments){
    let total = total(investiments);
    let types = []
    for (let i = 0; i < investiments.length; i++){
        if(!(types.includes(investiments[i].category))){
            types.append(investiments[i].category);
        }
    }

}
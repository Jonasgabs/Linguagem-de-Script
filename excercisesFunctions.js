let marketProducts = [
    [1,3,2],
    [2,5,4],
    [4,9,8],
    [7,4,6],
]

function sumMarketProducts(marketProducts){
    
    let sum = 0

    for (let len = 0; len < marketProducts.length; len++){
  
        qtProduct = marketProducts[len][1] * marketProducts[len][2]
        sum += qtProduct
        
    }
    return sum
}

// usando programação funcional

const SumProducts = marketProducts.reduce((sum,count) =>  count[1] * count[2] + sum,0)



//test

console.log(sumMarketProducts(marketProducts))

console.log(SumProducts)
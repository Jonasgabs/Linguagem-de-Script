import { cat } from './investiments.js'
import { totalcomreduce } from './investiments.js'
import { total } from './investiments.js'
const investiments = [
    {
        name : 'tesouro_selic',
        value : 15500,
        category : 'pós'
    },
    {
        name : 'cdb banco x',
        value : 10000,
        category : 'pós'
    },
    {
        name : 'cdb banco x2',
        value : 60000,
        category : 'pós'
    },
    {
        name : 'cdb banco x4',
        value : 30000,
        category : 'ipca'
    }
]
console.log(total(investiments))
console.log(totalcomreduce(investiments))
console.log(cat(investiments, 'pós'))
console.log(cat(investiments, 'ipca'))
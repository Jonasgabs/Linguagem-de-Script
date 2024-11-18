function show(companies){
    for (const companie of companies){
        console.log(companie.name.padEnd(20,".") + companie.founded);
    }
}
const companies = [
    {
        name: "Amazon",
        founded: "1994",
        Industry: ["E-Commerce", "Cloud"]
    },
    {
        name: "Facebook",
        founded: "2004",
        Industry: ["Social"]
    },
    {
        name: "Alphabet Inc.",
        founded: "2015",
        Industry: ["Search", "Cloud", "Advertising"]
    }
]


console.table(companies)


companies.forEach(company => {
    company.kind = "Internet company"
})

console.table(companies)

show(companies)

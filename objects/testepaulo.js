import Company from "./entites/Company.js";




// Name	Founded	Industry
// Amazon	1994	E-Commerce, Cloud
// Facebook	2004	Social
// Alphabet Inc.	2015	Search, Cloud, Advertising

const amazon = new Company("Amazon", "1994", ["E-Commerce", "Cloud"]);
const facebook = new Company("Facebook", "2004", ["Social"]);
const alphabet = new Company("Alphabet Inc.", "2015", ["Search", "Cloud", "Advertising"]);

let companies = [amazon, facebook, alphabet];

companies.map((c) => {
    c = {
        ...c,
        kind: "Internet Company"
    }
})

companies.forEach((c) => {
   const { name, founded } = c.show()

   console.log(name.padEnd(20, ".")+ founded)
})
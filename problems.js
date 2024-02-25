
const users = require("../1users/data");

// Q1 Find all users who are interested in playing video games.
const interest = Object.keys(users).filter(user => users[user].interests.includes("Playing Video Games"));
console.log(interest);
     
// Q2 Find all users staying in Germany.
 const staying = Object.keys(users).filter(user => users[user].nationality === "Germany");
console.log(staying)
// Q3 Find all users with masters Degree.
const degree = Object.keys(users).filter(user=>users[user].qualification === "Masters");
console.log(degree)
// Q4 Group users based on their Programming language mentioned in their designation.

const language = Object.values(users).reduce((acc,user)=>{
    const designation = user.desgination.split(" ")[2];
    acc[designation] = acc[designation] || [];
    acc[designation].push(user);
    return acc;
},{});
console.log(language)
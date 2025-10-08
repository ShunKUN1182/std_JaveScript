console.log("foo");
const text = document.querySelector("p");

const users = [{
    "name" : "坂口",
    "age" : 18,
    "email" : "ksakaguti@gmail.com",
    "hobby" : ["apex" , "perusona" , "music"],
},
{
    "name" : "細川",
    "age" : 18,
    "email" : null,
    "hobby" : ["apex" , "huku" , "music"],
}];

console.log(users);

users.forEach(e => {
    console.log(e);
});

// text.textContent = users[0].name;

users.forEach(e => {
    text.textContent += `${e.name}です、年齢は${e.age}歳で、`;
    e.hobby.forEach(hobbyList => {
        text.textContent += `${hobbyList}、`
    });
    text.textContent += "です。"
});

/*
    key : value,
    key : value,
    "name" : "山田"
*/
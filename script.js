let arr = [
    {
        image: 'https://i.pinimg.com/474x/b2/5f/ab/b25fab046132d478b15bc610435242e9.jpg',
        username: 'Tony Stark',
        nickname: 'Iron Man',
        skill: ['Suite', 'Technology', 'Jarvis'],
        about: 'Iron Man is a genius billionaire in a high-tech suit who fights evil as the armored superhero alter ego of Tony Stark.'
    },
    {
        image: 'https://i.pinimg.com/474x/15/e8/a4/15e8a4d05cf22b815781a76ffed28cc1.jpg',
        username: 'Steve Rogers ',
        nickname: 'Captain America',
        skill: ['Shield', 'Suite', 'Leader'],
        about: 'Captain America is a super-soldier and symbol of courage, fighting for justice with his iconic vibranium shield. '
    },
    {
        image: 'https://i.pinimg.com/474x/02/cf/90/02cf90eaf95bfd01016d762038702093.jpg',
        username: 'Thor Odinson',
        nickname: 'Thor',
        skill: ['Hammer', 'Thunder', 'God'],
        about: 'Thor is the mighty God of Thunder from Asgard, wielding his enchanted hammer Mjölnir to protect the realms.'
    },
    {
        image: 'https://i.pinimg.com/474x/ae/69/a8/ae69a8b0d7ab2656b502acb9413dbc6c.jpg',
        username: 'Natasha Romanoff',
        nickname: 'Black Widow',
        skill: ['Weapon', 'Firearms', 'Tactician'],
        about: 'Black Widow is a skilled spy and fierce Avenger in the Marvel Universe, known for her combat prowess and complex past.'
    },
    {
        image: 'https://i.pinimg.com/474x/a4/b7/c8/a4b7c8cbde4833511fd9c373cdb0a158.jpg',
        username: 'T Challa',
        nickname: 'Black Panther',
        skill: ['Intellect', 'Combat', 'King'],
        about: 'Black Panther is the noble and powerful king of Wakanda, who protects his nation with enhanced strength, and advanced technology.'
    },
    {
        image: 'https://i.pinimg.com/474x/31/e5/d7/31e5d774a3c79759a7ecb82e35bebfeb.jpg',
        username: 'Peter Parker',
        nickname: 'Spider Man',
        skill: ['Agility', 'Crawling', 'Suite'],
        about: 'Spider-Man is a young superhero with spider-like abilities who fights crime while balancing everyday life as Peter Parker.'
    },
    {
        image: 'https://i.pinimg.com/474x/c1/78/38/c178380747a72e1d858794c27f23b974.jpg',
        username: 'Dr Stephen Strange',
        nickname: 'Doctor Strange',
        skill: ['Magic', 'Sorcery', 'Agamotto'],
        about: 'Doctor Strange is a former surgeon who becomes the Sorcerer Supreme, wielding powerful magic to protect the universe.'
    },
    {
        image: 'https://i.pinimg.com/474x/70/fa/32/70fa32cae476683c2a217e1bfc16320b.jpg',
        username: 'Bruce Banner',
        nickname: 'Hulk',
        skill: ['Durability', 'Shockwave', 'Smash'],
        about: 'The Hulk is a powerful, green-skinned superhero with immense strength, triggered by anger, and the alter ego of Bruce Banner.'
    },
    {
        image: 'https://i.pinimg.com/474x/5f/0a/0f/5f0a0fdad83f2e06e5ea5d5294b4def5.jpg',
        username: 'Clint Barton',
        nickname: 'Hawkeye',
        skill: ['Archery', 'Accuracy', 'Combat'],
        about: 'Hawkeye is a master archer and skilled marksman who fights alongside the Avengers with precision and bravery.'
    },
    {
        image: 'https://i.pinimg.com/736x/b2/28/58/b22858d0b95c4f47af949ac0824e718b.jpg',
        username: 'Scott Lang',
        nickname: 'Ant Man',
        skill: ['Stealth', 'Technology', 'Agility '],
        about: 'Ant-Man is a hero who can shrink or grow in size using advanced technology, while often bringing humor to his high-stakes missions.'
    }
]

let main = document.querySelector('#main')
let sum = ''

arr.forEach(function (elem) {
    sum += `<div id="card">
            <img id="img" src="${elem.image}" alt="">
            <h1>${elem.username}</h1>
            <h2>${elem.nickname}</h2>
            <div id="skill">
                ${elem.skill.map(skill => `<div class='ui'> ${skill}</div> `).join('')}
            </div>

            <p>${elem.about}</p>
            <div id="bar"></div>
            <div id="profile">
                <h3>View Profile</h3>
            </div>
            
        </div>`
})


main.innerHTML = sum
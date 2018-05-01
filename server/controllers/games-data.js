const axios = require("axios");

let games_data = [
    {'id': 0,
     'name': 'Earthworm Jim',
     'release_year': 1988,
     'platform': 'Sega Genesis / SNES',
     'rating': 2,
    'review': 'Some violet themes with Jims head getting blown off. Apart from that, mostly slapstick humor and cartoonish background.',
    'cover_art': 'https://gamefaqs.akamaized.net/box/0/8/7/87_front.jpg'},
    {'id': 1,
    'name': 'Sonic the Hedgehog',
    'release_year': 1991,
    'platform': 'Sega Genesis',
    'rating': 5,
    'review': 'Very kid friendly. Most violence is towards robots and some to a fat villain at boss stages.',
    'cover_art': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg/220px-Sonic_the_Hedgehog_1_Genesis_box_art.jpg'},
    {'id': 2,
    'name': 'Call of Duty: Modern Warfare',
    'release_year': 2007,
    'platform': 'PC / PS3 / XBOX 360',
    'rating': 3,
    'review': 'Kids are known to play it and annoy gamers on the microphone during multiplayer battles. Game content is violent so you may need to explain some staff with the game after a playthrough.',
    'cover_art': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Call_of_Duty_4_Modern_Warfare.jpg/220px-Call_of_Duty_4_Modern_Warfare.jpg'},
    {'id': 3,
    'name': 'Sonic the Hedgehog 2',
    'release_year': 1992,
    'platform': 'Sega Genesis',
    'rating': 5,
    'review': 'Very kid friendly. Like previous original title in the series. This game is minimal on violence, no gore. Controls itself may take some time to master, but pretty clean game apart from that.',
    'cover_art': 'https://vignette.wikia.nocookie.net/sonic/images/f/f9/Sonic2-cover.jpg/revision/latest?cb=20090408003424'},
    {'id': 4,
    'name': 'Sonic the Hedgehog 3',
    'release_year': 1994,
    'platform': 'Sega Genesis',
    'rating': 5,
    'review': 'Very kid friendly. Like previous title, this game is minimal on violence, no gore. Some scary images of a forest burning in a stage but not too bad.',
    'cover_art': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Sonic3-box-us-225.jpg/220px-Sonic3-box-us-225.jpg'},
    {'id': 5,
    'name': 'Sonic and Knuckles',
    'release_year': 1994,
    'platform': 'Sega Genesis',
    'rating': 4,
    'review': 'Very kid friendly. Like previous title, this game is minimal on violence, no gore.',
    'cover_art': 'https://vignette.wikia.nocookie.net/sonic/images/f/f2/Sonic_and_Knuckles.jpg/revision/latest?cb=20090616171749'},
    {'id': 6,
    'name': 'Sonic the Hedgehog',
    'release_year': 2006,
    'platform': 'PS4, XBOX 360',
    'alias_fan_name': 'Sonic 06',
    'rating': 2,
    'review': 'The game itself is filled with glitches which may frustrate your kids. If you play to the end, then you would need to deal with explaining to your kids why a human would fall in love with a hedgehog. However, now that I think about it, most crazy fans would dream of that happening to them. In terms of subject matter, this game is made for kids and there may be personal bias with how the game was built and is glitchy.',
    'cover_art': 'https://vignette.wikia.nocookie.net/sonic/images/e/e5/Sonic_Next_Gen.jpg/revision/latest?cb=20170702115006'},
    {'id': 7,
    'name': 'Diablo',
    'release_year': 1995,
    'platform': 'PC',
    'rating': 1,
    'review': 'Personally, I like this game. The parent in me would disagree that I would want me 5 year old playing this though. Lost of blood, violence, and dark gothic elements.',
    'cover_art': 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Diablo_Coverart.png/220px-Diablo_Coverart.png'}
]


module.exports = {
    read: (req, res) => {                 //GET
        res.status(200).send(games_data);
    }, 
    create: (req, res) => {               //POST
        const {name, release_year, platform, rating, review, cover_art} = req.body;
        console.log(name, release_year, platform)
        let newGame = {
            'id': games_data.length,
            name,
            release_year,
            platform,
            rating,
            review,
            cover_art}

        games_data.push(newGame)
        res.status(200).send(games_data)
    },
    update: (req, res) => {               //PUT
        const { name, release_year, platform, rating, review, cover_art } = req.body;
        const newId = Number(req.body.id);    
        let index = null
        games_data.forEach( (element, i) => {
            if(element.id === newId){
                index = i;
            }
        })
        games_data[index] = { 
             'id': newId, 
            'name': name,
            'release_year': release_year,
            'platform': platform,
            'rating': rating,
            'review': review,
            'cover_art': cover_art
        }
        res.status(200).send(games_data);
    },
    remove: (req, res) => {             //DELETE
        const number = Number(req.params.id);
        games_data.forEach( (element, i) => {
            if(element.id === number){
                games_data.splice(i, 1)
            }
        })
        res.status(200).send(games_data);    
    },

    starwars: (req, res) => {
        // axios.get(`http://thegamesdb.net/api/GetGamesList.php?name=` + req.params.game)
        // axios.get(`https://www.giantbomb.com/api/characters/?api_key=168e3c03a51fd71e30bdcb9bf65bc258d8670c48&field_list=deck`)
        // axios.get(`https://swapi.co/` + req.params.game)
        axios.get(`https://swapi.co/api/people`)
        .then( (element ) => {
            res.status(200).send(element.data)
        }
        )

    },
    pokemon: (req, res) => {
        axios.get(`http://pokeapi.co/api/v2/pokemon/25`)
        .then( (element ) => {
            res.status(200).send(element.data)

        })


    }
}
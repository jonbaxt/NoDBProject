const express = require('express')
const bodyParser = require('body-parser')


const ac = require('./controllers/games-data.js')

const app = express()



app.use(bodyParser.json())

app.get('/api/games-data', ac.read);

app.post('/api/games-data', ac.create);

app.put('/api/games-data', ac.update);

app.delete('/api/games-data/:id', ac.remove);

app.get( '/api/people/:starWarsKeyWord', ac.starwars);

// app.get(`/api/:pokemon`, ac.pokemon);


const port = 3002;
app.listen(port, () => console.log(`\n\nMessage from express:\nPort: ${port} is open for business!`))

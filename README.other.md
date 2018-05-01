
            Requirement                       |  Points         Max    What I think
----------------------------------------------------------------------
1. 1 stateful component, not counting App.js  |  required	|              Good
2. 1 stateless functional component	          |  required	|              Good
3. 1 GET endpoint in Express	              |  required	|              Good
4. 1 endpoint that uses req.body	          |  required	|              Good
5. each component above minimum	              |  0.5	    |   1            1
6. use a single component more than once	  |  0.5	    |   1            1
7. URL parameter	                          |  0.25       |	0.5         0.5
8. Query string parameter	                  |  0.25	    |   0.5          0
9. external web API, per endpoint used	      |  0.5	    |   2           0.5
10. full CRUD	1	1                         |  1          |   1            1
        Total                                                                4

1. 1 stateful component, not counting App.js
        Stateful Comps: Create.js, Update.js, Delete.js, Select.js, YearSelect.js
2. 1 stateless functional component	  
        Stateless Functional Comps: List.js, Footer.js
3. 1 GET endpoint in Express
        Get endpoints: /server/index.js
                        Line 13: app.get('/api/games-data', ac.read);
                        Line 21: app.get(`/api/pokemon`, ac.pokemon);
4. 1 endpoint that uses req.body
        Endpoint: /server/controllers/games-data.js
                        Lines 83-102
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

5. each component above minimum	 
        Above minimum examples:
            App.js is mainly apart from a couple parts of the code is mainly just Invoking Components. There is not
            any code that I felt could have been in it's own file I put in it's own file.

            Another example is I use double props to connect a parent to a child to another child multiple times.
                Ex: App.js -> Create.js -> List.js
                    I did something similar with update and delete as well. 
                    I also used a select component to access components on the screen when selected with a switch method.
6. use a single component more than once
        Ex: RateSelect is used in invoked in two seperate components: Create.js and Update.js
            YearSelect is also used twice in Create.js and Update.js
7. URL parameter
    Ex: /server/index.js
        app.delete('/api/games-data/:id', ac.remove);
        and
        app.get( '/api/:starWarsKeyWord', ac.starwars);

8. Query string parameter	
        None

9. external web API, per endpoint used
        Called out to the starwarsapi

10. full CRUD
        Have create, update, get, delete in express and used throughout the project.
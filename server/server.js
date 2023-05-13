const cors = require('cors')
const express = require('express');
const app = express();
const session = require('express-session')
var path = require('path');

app.use(session({secret: 'JAGLYNfrogster', resave: true, saveUninitialized: true}))
app.use(express.json())
app.use(cors())
app.use('/static', express.static('public'))

app.get('/test', (req, res) => {
  console.log('the req session: ', req.session)
})
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('client/main.html'));
})
app.listen(process.env.PORT || 4200, () => console.log("Listening on port 4200"));
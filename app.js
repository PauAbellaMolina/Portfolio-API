const express = require('express')
const app = express()
const port = 3030
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//MODELS
const models = require( './models/index')
const Project = models.Project
const MainText = models.MainText

//ROUTES
app.get('/', (req, res) => {
  res.send("Hello World!")
})

//Projects
app.get('/projects', async (req, res) => {
  const projects = await Project.findAll();

  res.send(projects)
})
app.get('/projects/:id', async (req, res) => {
  const projects = await Project.findByPk(req.params.id);

  res.send(projects)
})

app.post('/projects', (req, res) => {
  // console.log(req.body);return;
  const project = {
    title: req.body.title ? req.body.title : "",
    cover_image: req.body.cover_image ? req.body.cover_image : "",
    description_1: req.body.description_1 ? req.body.description_1 : "",
    description_2: req.body.description_2 ? req.body.description_2 : "",
    description_3: req.body.description_3 ? req.body.description_3 : "",
    description_4: req.body.description_4 ? req.body.description_4 : "",
    description_5: req.body.description_5 ? req.body.description_5 : "",
    developed_1: req.body.developed_1 ? req.body.developed_1 : "",
    developed_2: req.body.developed_2 ? req.body.developed_2 : "",
    developed_3: req.body.developed_3 ? req.body.developed_3 : "",
    developed_4: req.body.developed_4 ? req.body.developed_4 : "",
    developed_5: req.body.developed_5 ? req.body.developed_5 : "",
    developed_6: req.body.developed_6 ? req.body.developed_6 : "",
    developed_7: req.body.developed_7 ? req.body.developed_7 : "",
    developed_8: req.body.developed_8 ? req.body.developed_8 : "",
    deployed_1: req.body.deployed_1 ? req.body.deployed_1 : "",
    deployed_2: req.body.deployed_2 ? req.body.deployed_2 : "",
    deployed_3: req.body.deployed_3 ? req.body.deployed_3 : "",
    deployed_4: req.body.deployed_4 ? req.body.deployed_4 : "",
    deployed_5: req.body.deployed_5 ? req.body.deployed_5 : "",
    deployed_6: req.body.deployed_6 ? req.body.deployed_6 : "",
    deployed_7: req.body.deployed_7 ? req.body.deployed_7 : "",
    deployed_8: req.body.deployed_8 ? req.body.deployed_8 : "",
  }
  
  const projects = await 
    Project.create(project)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error creating project"
        })
      })
})

//Main Texts
app.get('/main-texts', async (req, res) => {
  const mainText = await MainText.findAll();

  res.send(mainText)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const express = require('express')
const app = express()
const port = 3000
const models = require( './models/index')
const Project = models.Project
const MainText = models.MainText

app.get('/', (req, res) => {
  res.send("Hello World!")
})


app.get('/projects', async (req, res) => {
  const projects = await Project.findAll();

  res.send(projects)
})
app.get('/projects/:id', async (req, res) => {
  const projects = await Project.findByPk(req.params.id);

  res.send(projects)
})


app.get('/main-texts', async (req, res) => {
  const mainText = await MainText.findAll();

  res.send(mainText)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

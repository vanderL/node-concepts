const express = require('express')
const app = express()

const { checkMethod, countLogs, checkExistProject } = require('./middlewares')

app.use(express.json())
app.use(checkMethod)
app.use(countLogs)

const controller = require('./controllers')

app.post('/projects', controller.store)
app.get('/projects', controller.index)
app.get('/projects/:id',checkExistProject, controller.show)
app.put('/projects/:id',checkExistProject, controller.update)
app.delete('/projects/:id',checkExistProject, controller.remove)
app.post('/projects/:id/tasks',checkExistProject, controller.tasks)

app.listen(3001, () => {
    console.log('listening on PORT 3001')
})
const { projects } = require('./data')


function index(req, res) {

    return res.json(projects)
}

function store(req, res){
    const { id, title } = req.body

    project = {
        id,
        title,
        tasks: [],
    }

    projects.push(project)

    return res.json(projects)
}

function show(req, res){
    const { id } = req.params

    const project = projects.find(project => project.id == id)
    
    return res.json(project)
}

function update(req, res) {
    const { id } = req.params
    const { title } = req.body

    const project = projects.find(project => project.id == id)

    project.title = title

    return res.json(project)

}

function remove(req, res) {
    const { id } = req.params

    const projectIndex = projects.findIndex(project => project.id == id)

    projects.splice(projectIndex, 1)

    return res.send()
}

function tasks(req, res) {
    const { id } = req.params
    const { title } = req.body

    const project = projects.find(project => project.id == id)

    project.tasks.push(title)

    return res.json(project)

}
module.exports = {
    index,
    show,
    store,
    update,
    remove,
    tasks,
}
const { projects } = require('./data')

function checkMethod(req, res, next) {
    console.log(`Method: ${req.method}, URL: ${req.path}`)

    next()
}

function checkExistProject(req, res, next) {
    const { id } = req.params

    const project = projects.find(project => project.id == id)

    if (!project) {
        return res.status(400).json({ error: "Project not found"})
    }

    next()
}

function countLogs(req, res, next) {
    console.count('requests: ')

    next()
}

module.exports = {
    checkMethod,
    countLogs,
    checkExistProject
}

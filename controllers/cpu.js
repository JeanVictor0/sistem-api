const os = require('os')

const controller = {
    info (req,res) {
        const info = {
            hostname: os.hostname(),
            OS: {
                name: os.platform(),
                version: os.version()
            },
            cpu: os.cpus(),
            mem: {
                total: os.totalmem(),
                free: os.freemem(),
                used: os.freemem() - os.totalmem()
            },
            arch: os.arch()
        }

        res.json(info)
    },
    createProcess (req,res) {
        
    }
}

module.exports = controller
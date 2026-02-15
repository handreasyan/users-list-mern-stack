const http = require(`http`)
const path = require('path');
const fs = require('fs');

let reqCount = 0

const server = http.createServer((req, res) => {
   if(routes.includes(req.url)) {
       reqCount++
   }


   switch (req.url){
        case '/':
            res.write(`home`)
            break
        case '/students':
            res.write(`Students`)
            break
        case '/favicon.ico':
            const filePath = path.join(__dirname, '','favicon.ico')
            fs.readFile(filePath, (err, data) => {
                if(err){
                    res.writeHead(404)
                    res.end()
                    return
                }

                res.writeHead(200, {'Content-Type': 'image/x-icon'})
                res.end(data)

            })
            return
        case '/courses':
            res.write(`Frontend & Backend`)
            break
       default:
           res.write(`Not Found test`)
   }

    res.write(` \n Requests Count: ${reqCount}`)

    res.end()
})

const routes =['/','/students','/courses']

server.listen(3003)
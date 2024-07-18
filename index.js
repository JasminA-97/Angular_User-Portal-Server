const jsonServer = require('json-server')
const UserPortalServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

UserPortalServer.use(middleware)
UserPortalServer.use(route)
UserPortalServer.listen(PORT,()=>{
    console.log(`UserPortalServer startd at port ${PORT} and waiting for client request`);
})

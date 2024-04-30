const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()

//mongodb connections
mongoose.connect('mongodb+srv://phoenixworld786:yash@cluster0.bruunke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true }).then(() => {
    console.log("mongodb connected successfully")
}).catch((error) => {
    console.log(" mongodb connected failed", error)
})
//connection end


app.use(express.json())
app.use(cors())

//rotings

const userRouter = require('./routes/user-routes')
const adminRouter = require('./routes/admin-routes')



app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)







app.listen(3000, () => {
    console.log("server started 3000 port");
})
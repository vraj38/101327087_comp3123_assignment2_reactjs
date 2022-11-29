import mongoose from "mongoose"


const Connection = async(username, password) => {

    const URL = `mongodb+srv://${username}:${password}@cluster0.nwmxkkr.mongodb.net/comp3123_ass2?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log(`Error while connecting to database`, error)
    }
}

export default Connection;
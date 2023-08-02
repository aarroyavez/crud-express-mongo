import  {connect } from "mongoose";




(async () => {
    try {
        const db = await connect("mongodb://127.0.0.1:27017/crud-mongo")
        console.log("DB connected to", db.connect.name);
    } catch(error) {
        console.error(error)
    }
})();
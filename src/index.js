import "./config" // debe importarse al inicio de la app
import app from "./app"
import "./database"

app.listen(4060);
console.log("Server on port", 4060)
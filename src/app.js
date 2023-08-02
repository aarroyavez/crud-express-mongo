import express from 'express';
import indexRoutes from './routes/index.routes'
import path from 'path'
import { create } from 'express-handlebars';
import morgan from 'morgan';

const app = express();

app.set('views', path.join(__dirname, '/views'));

const hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
})

app.engine(".hbs", hbs.engine);

app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(indexRoutes);

// Definir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

export default app;
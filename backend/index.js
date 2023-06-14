import express from "express";
import cors from "cors";
import Cards from "./cards.json" assert { type: 'json' };

const app = express();

app.use(cors());

app.get("/", (req, res)=>{
    res.send(Cards);

})

app.listen(5000, ()=>console.log("The API is up and running"));
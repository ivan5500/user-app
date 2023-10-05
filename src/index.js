import React from "react";
import ReactDOM from "react-dom/client";
import { UserList } from "./User/UserList";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
const user =     {
    "id": 33,
    "nombre": "Jorge Alberto",
    "apellidoPaterno": "Martinez",
    "apellidoMaterno": "De la Barrera",
    "edad": 34,
    "email": "apune.i@gmail.com",
    "fechaNac": "1994-05-28",
    "datos": {
        "calle": " ",
        "numero": " ",
        "colonia": " ",
        "delegacion": " ",
        "estado": "Ciudad de México",
        "cp": "undefined",
        "imagen": "https://scontent.fmex10-1.fna.fbcdn.net/v/t1.0-9/10407680_10204100063686"
    }
}

root.render(
    <div>
        <UserList user={user} />
    </div>
);
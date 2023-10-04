import React from "react";
import ReactDOM from "react-dom/client";
import { UserList } from "./User/UserList";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
const user = {
    name: "John",
    lastname: "Doe",
    age: 25,
    email: "sdjfalskdjf"
};

root.render(
    <div>
        <UserList user={user} />
        <UserList user={user} />
        <UserList user={user} />
    </div>
);
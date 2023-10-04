import React from "react";
import ReactDOM from "react-dom";
import { UserList } from "./User/UserList";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <div>
        <UserList />
        <UserList />
        <UserList />
        <UserList />
    </div>
);
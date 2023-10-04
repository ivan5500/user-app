import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

/* User list component */
function UserList() {
    return <div>
        <h1>Usuarios</h1>
    </div>

}
root.render(
    <div>
        <UserList />
        <UserList />
        <UserList />
        <UserList />
    </div>
);
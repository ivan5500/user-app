/* User list component */
export function UserList() {
    const user = {
        name: "John",
        lastname: "Doe",
        age: 25,
        email: "sdjfalskdjf"
    };

    return (<div>
        <h1>Usuarios</h1>
        <ul>
            <li>Nombre: {user.name}</li>
            <li>Apellido: {user.lastname}</li>
            <li>Edad: {user.age}</li>
            <li>Email: {user.email}</li>
        </ul>
    </div>
    )

}
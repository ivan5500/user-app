import './user.css';

/* User list component */
export function UserList({ user }) {

    return (<div>
        <h1>Usuarios</h1>
        <ul className="userCard">
            <li>Nombre: {user.name}</li>
            <li>Apellido: {user.lastname}</li>
            <li>Edad: {user.age}</li>
            <li>Email: {user.email}</li>
        </ul>
    </div>
    )

}
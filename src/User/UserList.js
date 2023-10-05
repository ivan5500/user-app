import './user.css';

/* User list component */

const getUsers = () => {
    const userUrl = 'https://api.devdicio.net:8444/v1/sec_dev_interview?limit=2'
    const requestOptions = {
        method: 'GET', // Método HTTP (GET en este caso)
        headers: {
            'xc-token': 'J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP'
        }
    };

    return fetch(userUrl, requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            return json
        })
        .catch(error => {
            console.log(error)
        })
}

export function UserList({ user }) {
    getUsers()
    return (<>
        <h1>Usuarios</h1>
        <ul className="userCard">
            <li>Nombre: {user.name}</li>
            <li>Apellido: {user.lastname}</li>
            <li>Edad: {user.age}</li>
            <li>Email: {user.email}</li>
        </ul>
    </>
    )

}
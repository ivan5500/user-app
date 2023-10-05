import { useEffect, useState } from 'react';
import './user.css';
import axios from 'axios';

/* User list component */
export function UserList({ user }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = async () => {
        const userUrl = 'https://api.devdicio.net:8444/v1/sec_dev_interview?limit=20'
        const requestOptions = {
            method: 'GET', // Método HTTP (GET en este caso)
            headers: {
                'xc-token': 'J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP'
            }
        };

        const response = await axios.get(userUrl, requestOptions);
        console.log(response.data);
        setUsers(response.data);
    }

    return (<>
        <h1>Usuarios</h1>
        {/* map de users */}
        <div className="container">
            {users.map((user) => (
                <div className="card" key={user.id}>
                    <img src={user.datos.imagen} alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <h4><b>{user.nombre} {user.apellidoPaterno} {user.apellidoMaterno}</b></h4>
                        <p>{user.email}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
    )

}
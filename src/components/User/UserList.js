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
        <div className='container'>
            <div className='table-responsive'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Edad</th>
                            <th>Email</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Calle</th>
                            <th>IMG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nombre}</td>
                                <td>{user.apellidoPaterno}</td>
                                <td>{user.apellidoMaterno}</td>
                                <td>{user.edad}</td>
                                <td>{user.email}</td>
                                <td>{user.fechaNac}</td>
                                <td>{user.datos.calle}</td>
                                <td>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="btn btn-primary" >Actualizar</button>
        </div>
    </>
    )

}
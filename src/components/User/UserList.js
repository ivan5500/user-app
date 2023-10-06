import "./user.css";
import { useUsers } from "../../hooks/useUsers";
import { useState } from "react";

/* User list component */
export function UserList() {
  const [query, setQuery] = useState("");
  const { users } = useUsers();

  function handleOnChanges(event) {
    setQuery(event.target.value.trim());
  }

  return (
    <>
      <div className="container">
        <h1>Usuarios</h1>
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Buscar
          </span>
          <input
            type="text"
            className="form-control"
            onChange={handleOnChanges}
          />
        </div>
        <div className="table-responsive">
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
            <tbody className="table-group-divider">
              {users
                .filter((user) => {
                  if (query === "") {
                    return user;
                  } else if (
                    user?.nombre?.toLowerCase().includes(query?.toLowerCase())
                  ) {
                    return user;
                  }
                })
                .map((user) => (
                  <tr key={user.id}>
                    <td>{user?.id}</td>
                    <td>{user?.nombre}</td>
                    <td>{user?.apellidoPaterno}</td>
                    <td>{user?.apellidoMaterno}</td>
                    <td>{user?.edad}</td>
                    <td>{user?.email}</td>
                    <td>{user?.fechaNac}</td>
                    <td>{user?.datos?.calle}</td>
                    <td>
                      <img className="img-fluid img-thumbnail" src={user?.datos?.imagen} alt="Avatar" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

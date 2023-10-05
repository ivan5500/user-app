import { useState } from "react";

export function AddUser() {
    const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            apellidoPaterno: e.target.lastName.value,
            apellidoMaterno: e.target.matriName.value,
            age: e.target.matriName.age,
            email: e.target.email.value,
            fechaNac: e.target.birthDate.value,
            datos: {
                calle: e.target.street.value,
                numero: e.target.num.value,
                colonia: e.target.neighborhood.value,
                delegacion: e.target.delegation.value,
                estado: e.target.state.value,
                cp: e.target.pc.value
            }
        }
        setUser(newUser);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Apellido Paterno</label>
                <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="mb-3">
                <label htmlFor="matriName" className="form-label">Apellido Materno</label>
                <input type="text" className="form-control" id="matriName" />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Edad</label>
                <input type="number" className="form-control" id="age" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">Fecha de nacimiento</label>
                <input type="text" className="form-control" id="birthDate" />
            </div>
            <div className="mb-3">
                <label htmlFor="street" className="form-label">Calle</label>
                <input type="text" className="form-control" id="street" />
            </div>
            <div className="mb-3">
                <label htmlFor="num" className="form-label">Número</label>
                <input type="number" className="form-control" id="num" />
            </div>
            <div className="mb-3">
                <label htmlFor="neighborhood" className="form-label">Colonia</label>
                <input type="text" className="form-control" id="neighborhood" />
            </div>
            <div className="mb-3">
                <label htmlFor="delegation" className="form-label">Delegación</label>
                <input type="text" className="form-control" id="delegation" />
            </div>
            <div className="mb-3">
                <label htmlFor="state" className="form-label">Estado</label>
                <input type="text" className="form-control" id="state" />
            </div>
            <div className="mb-3">
                <label htmlFor="pc" className="form-label">CP</label>
                <input type="number" className="form-control" id="pc" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
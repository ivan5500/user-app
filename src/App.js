import { UserList } from "./User/UserList"

const user = {
    "id": 33,
    "nombre": "Jorge Alberto",
    "apellidoPaterno": "Martinez",
    "apellidoMaterno": "De la Barrera",
    "edad": 34,
    "email": "apune.i@gmail.com",
    "fechaNac": "1994-05-28",
    "datos": {
        "calle": " ",
        "numero": " ",
        "colonia": " ",
        "delegacion": " ",
        "estado": "Ciudad de México",
        "cp": "undefined",
        "imagen": "https://scontent.fmex10-1.fna.fbcdn.net/v/t1.0-9/10407680_10204100063686"
    }
}

export function App() {
    return (
        <>
            <UserList user={user} />
        </>
    )
}
export default App;
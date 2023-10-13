import { useForm } from "react-hook-form";
import "./user.css";
import { addUser } from "../../services/user-service";
import { Photo } from "../Photo";
import { useEffect, useState } from "react";

export function AddUser() {
  const [imgSrc, setImgSrc] = useState("");
  const patternOnlyLetters = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getCameraPermmission();
  }, []);

  const getCameraPermmission = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      console.log(mediaStream);
    } catch (error) {
      const msg = "Por favor, habilite los permisos para usar la cámara.";
      alert(msg);
      window.location.reload();
    }
  };
  const saveUser = async (user) => {
    try {
      console.log(user);
      const response = await addUser(user);
      console.log(response);
      alert("Usuario guardado correctamente");
      reset();
      setImgSrc("");
    } catch (error) {
      alert("Error al guardar el usuario");
      console.log(error);
    }
  };

  const validateDate = (date) => {
    const today = new Date();
    const newDate = new Date([date, "00:00"]);
    today.setHours(0, 0, 0, 0);

    if (today > newDate) {
      return true;
    }
    return "La fecha debe ser anterior al día de hoy";
  };
  const validatePhoto = (value) => {
    if (imgSrc.trim() !== "") {
      return true;
    }
    return "La foto es necesaria";
  };

  const savePhoto = (imgSrcBase64) => {
    console.log(imgSrcBase64);
    setImgSrc(imgSrcBase64);
  };

  const onSubmit = handleSubmit((data) => {
    const datos = {
      calle: data.street,
      numero: data.num,
      colonia: data.neighborhood,
      delegacion: data.delegation,
      estado: data.state,
      cp: data.pc,
      imagen: imgSrc,
    };
    const newUser = {
      nombre: data.name,
      apellidoPaterno: data.lastName,
      apellidoMaterno: data.matriName,
      email: data.email,
      fechaNac: data.birthDate,
      datos: JSON.stringify(datos),
    };
    saveUser(newUser);
  });

  return (
    <div className="container">
      <h1>Agregar usuario</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-1">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: patternOnlyLetters,
                message: "Este campo solo acepta letras",
              },
            })}
          />
          {errors.name && (
            <span className="userFieldRequired">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="lastName" className="form-label">
            Apellido Paterno
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            {...register("lastName", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: patternOnlyLetters,
                message: "Este campo solo acepta letras",
              },
            })}
          />
          {errors.lastName && (
            <span className="userFieldRequired">{errors.lastName.message}</span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="matriName" className="form-label">
            Apellido Materno
          </label>
          <input
            type="text"
            className="form-control"
            id="matriName"
            {...register("matriName", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: patternOnlyLetters,
                message: "Este campo solo acepta letras",
              },
            })}
          />
          {errors.matriName && (
            <span className="userFieldRequired">
              {errors.matriName.message}
            </span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Escibe un email válido",
              },
            })}
          />
          {errors.email && (
            <span className="userFieldRequired">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="birthDate" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="text"
            className="form-control"
            id="birthDate"
            {...register("birthDate", {
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: "El formato de la fecha debe ser AAAA-MM-DD",
              },
              validate: {
                validateDate,
              },
            })}
          />
          {errors.birthDate && (
            <span className="userFieldRequired">
              {errors.birthDate.message}
            </span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="street" className="form-label">
            Calle
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            {...register("street", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: patternOnlyLetters,
                message: "Este campo solo acepta letras",
              },
            })}
          />
          {errors.street && (
            <span className="userFieldRequired">{errors.street.message}</span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="num" className="form-label">
            Número
          </label>
          <input
            type="text"
            className="form-control"
            id="num"
            {...register("num", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: /^[0-9]+$/i,
                message: "Este campo solo acepta números",
              },
            })}
          />
          {errors.num && (
            <span className="userFieldRequired">{errors.num.message}</span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="neighborhood" className="form-label">
            Colonia
          </label>
          <input
            type="text"
            className="form-control"
            id="neighborhood"
            {...register("neighborhood", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            })}
          />
          {errors.neighborhood && (
            <span className="userFieldRequired">
              {errors.neighborhood.message}
            </span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="delegation" className="form-label">
            Delegación
          </label>
          <input
            type="text"
            className="form-control"
            id="delegation"
            {...register("delegation", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            })}
          />
          {errors.delegation && (
            <span className="userFieldRequired">
              {errors.delegation.message}
            </span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="state" className="form-label">
            Estado
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            {...register("state", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: patternOnlyLetters,
                message: "Este campo solo acepta letras",
              },
            })}
          />
          {errors.state && (
            <span className="userFieldRequired">{errors.state.message}</span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="pc" className="form-label">
            CP
          </label>
          <input
            type="text"
            className="form-control"
            id="pc"
            {...register("pc", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: /^[0-9]+$/i,
                message: "Este campo solo acepta números",
              },
            })}
          />
          {errors.pc && (
            <span className="userFieldRequired">{errors.pc.message}</span>
          )}
        </div>
        <div className="mb-1">
          <Photo savePhoto={savePhoto} />
        </div>
        <div className="mb-1">
          <label htmlFor="photo" className="form-label">
            Contenido de imagen
          </label>
          <input
            type="text"
            className="form-control"
            value={imgSrc}
            disabled={true}
            id="photo"
            {...register("photo", {
              validate: {
                validatePhoto,
              },
            })}
          />
          {errors.photo && (
            <span className="userFieldRequired">{errors.photo.message}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar usuario
        </button>
      </form>
    </div>
  );
}

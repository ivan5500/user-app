Prueba técnica 

La siguiente prueba técnica se debe realizar una aplicación WEB con las siguientes caracteristicas:  

- Desarrollar la prueba con Reactjs e implementar Bootstrap. 
- Implementar Axios / CURL / Fetch para consumo de Web Services. 
- Subir la prueba en un repositorio de GITHUB. 

Descripción 

Con la siguiente API se adjunta el archivo swagger, lo puedes visualizar en **https://editor.swagger.io** para ver información del servicio.  

URL:  

**https://api.devdicio.net:8444/v1/sec\_dev\_interview** 

Agregando al header el siguiente token:  

**headers: { ![](Aspose.Words.642ebdcf-ae80-4187-ab50-9f9e16d645bb.001.png)**

**'Content-Type': 'application/json',** 

**'Host: api.devdicio.net',** 

**'xc-token': "J38b4XQNLErVatKIh4oP1jw9e\_wYWkS86Y04TMNP"** 

**}** 

Esta Aplicación, tendrá 2 secciones:  

- **Alta de usuario con foto**.- Se debe construir un formulario para un registro de usuarios que tenga las características mencionadas más adelante.
- **Visualización de datos**.- Se debe visualizar la información de los usuarios ya registrados.

1\. **Alta de usuario**. Construir un formulario que contenga los siguiente datos y validación de los mismos: 

- **Formulario**. (5 puntos total) 
1. Nombre (Campo no vacío y solo letras) 
1. Apellido Paterno (Campo no vacío y solo letras) 
1. Apellido Materno (Campo no vacío y solo letras) 
1. Email (Formato de email) 
1. Fecha de Nacimiento  **(**AAAA-MM-DD) 
1. Datos:  
- Calle (Campo no vacío y solo letras) 
- Numero (Campo no vacío y solo numeros) 
- Colonia (Campo no vacío) 
- Delegacion/Municipio (Campo no vacío) 
- Estado (Campo no vacío y solo letras) 
- CP (Campo no vacío y solo numeros) 
- Fotografía.- El usuario deberá tomar una **foto** desde la **cámara** y realizar lo siguiente: 
  - **Guía en sefie**. Poner una guia para centrar el rostro.  
  - **Envío**. Para el envío al web service se debe enviar en base64 y tener formato png, además de recortar la imagen puede ser manual (el usuario lo gestione el recorte) o automático desde el centro de 300x300. 
    - Ejemplo: 

![](Aspose.Words.642ebdcf-ae80-4187-ab50-9f9e16d645bb.002.png)

2. **Visualización datos**. (3 puntos) En un menu/pestaña/popup donde se pueda ver la información guardada en una tabla con todos los usuarios incluye **información pesonal como fotografía** y un **filtro de búsqueda** por nombre.  
2. **OPCIONAL**. **Edición de datos**. (1 punto) Una sección donde se pueda editar la información de los usuarios registrados.  

**Ejemplo** de estructura de datos a guardar: 

![](Aspose.Words.642ebdcf-ae80-4187-ab50-9f9e16d645bb.003.jpeg)

**Consideraciones**: (2 puntos) 

1. Se debe construir en React JS y uso de hooks.  
1. Crear **README** con lo solicitado de las instrucciones. 
1. Diseño responsivo y patrones de diseño. 
1. Buen uso de git (commits bien definidos y documentados). 

**Restricciones**: 

Al finalizar, súbelo a GitHub. Por favor, mandame un correo de confirmación y compartelo con este usuario:  

- **Robyrojas**  

Cualquier duda que tengas respecto a la prueba, no dudes en contactarnos. 

Te pido también que confirmes este mail para confirmar que lo recibiste correctamente.  

Saludos.  

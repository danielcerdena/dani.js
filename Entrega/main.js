function registrarme() {
    const formulario = document.getElementById("formulario")
    const datosdelogeo = {
        nombre: formulario.nombre.value,
        apellido: formulario.apellido.value,
        correo: formulario.correo.value,
        pass: formulario.password.value,
        nacimiento: formulario.nacimiento.value,
        sexo: formulario.sexo.value,
    }
    const datos = JSON.stringify(datosdelogeo)
    localStorage.setItem("Daniel", datos)
}


function iniciodesesion() {
    const sesion = document.getElementById("sesion")
    const datosdesesion = {
        email: sesion.email.value,
        contraseña: sesion.contraseña.value
    }

    const datosAlmacenados = localStorage.getItem("Daniel")
    const datosGuardados = JSON.parse(datosAlmacenados)

    if (datosdesesion.email === datosGuardados.correo && datosdesesion.contraseña === datosGuardados.pass) {
        alert("BIENVENIDO")
    } else {
        alert("Correo o contraseña incorrecta")
    }
}

const ingresar = document.getElementById("ingresar")
ingresar.addEventListener("click", iniciodesesion)


const registro = document.getElementById("registrarme")
registro.addEventListener("click", registrarme)


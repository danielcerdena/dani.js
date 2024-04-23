function registro() {
    alert("Bienvenido/a a tecnohouse la distribuidora N°1 en el pais")
    alert("Crea tu cuenta")
    let nombre = prompt("Ingresa tu nombre y apellido")
    let correo = prompt("Ingresa tu correo electronico")
    let contraseña = prompt("Ingresa tu contraseña")
    let telefono = parseInt(prompt("Ingresa un numero de recuperacion"))
    alert("Felicitaciones ya eres parte de tecnohouse")
    alert("Inicia sesion")
    let intentos = 0
    while (intentos <= 3) {
        let logueo = prompt("Ingresa tu correo")
        let password = prompt("ingresa tu contraseña")

        if (logueo === correo && password === contraseña) {
            alert("Correo correcto")
            break
        } else {
            intentos++
            alert("Correo o contraseña incorrecta te quedan " + (3 - intentos) + " intentos ")
        }

        if (intentos === 3) {
            alert("usted supero los intentos permitidos")
            confirm("Al parecer olvidaste algun dato ¿Quieres enviar un mensaje de recuperacion a " + telefono + "?")
            break
        }
    }
    function datos(){
        const dato = []
        dato.push(nombre)
        dato.push(correo)
        dato.push(contraseña)
        dato.push(telefono)
        console.table(dato)

    }
    datos()
}
registro()
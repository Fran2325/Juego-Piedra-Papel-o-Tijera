let piedra = document.getElementById ("Piedra")
let papel = document.getElementById ("Papel")
let tijera = document.getElementById ("Tijera")

// una funcion es un bloque de codigo que estaremos 
// reutilizando
function jugar(opcionUsuario){
    let opcionesMaquina = ["Piedra","Papel","Tijera"]
    let numeroAleatoreo = Math.floor(Math.random()*3)
    let opcionMaquina = opcionesMaquina[ numeroAleatoreo]

    if(opcionUsuario == opcionMaquina){
        alert(`Ha sido un empate" \n usuario:` + opcionUsuario + `opcionMaquina`)

    } else if (opcionUsuario == `Piedra` && opcionMaquina == `Tijera` || opcionMaquina == `papel` ){
        alert(`¡Has Ganado! \n usuario:` + opcionUsuario + `maquina:` + opcionMaquina)
    } else{
        alert(`¡Has Perdido :(! \n usuario:` + opcionUsuario + `maquina:` + opcionMaquina)

    }
}
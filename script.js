const inputTexto = document.querySelector('.input-texto')
const message = document.querySelector('.message')

function limpaTexto() {}

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  message.value = textoEncriptado
  message.style.backgroundImage = 'none'
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]

  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }

  console.log(stringEncriptada)
  return stringEncriptada
}

function btnDesencriptar() {
  if (inputTexto.value == 0) {
  } else if (inputTexto.value != 0) {
    const textoEncriptado = desencriptar(inputTexto.value)
    message.value = textoEncriptado
    message.style.backgroundImage = 'none'
  }
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ['enter', 'e'],
    ['imes', 'i'],
    ['ai', 'a'],
    ['ober', 'o'],
    ['ufat', 'u']
  ]
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }

  return stringDesencriptada
}

function copy() {
  let copyText = document.querySelector('.message')
  copyText.select()
  document.execCommand('copy')

  alert('Copiado!')
}

document.querySelector('#copy').addEventListener('click', copy)

const codigoAmis = (amis) => {;
    let etapa, etapa2, etapa3, etapa4
    let amisArray = amis.split('')
    amisArray.length < 5 ? sumarUnDato(amisArray) : (
        etapa2 =( ( parseInt(amisArray[0]) + parseInt(amisArray[2]) + parseInt(amisArray[4]) ) * 3 ),
        etapa3 = parseInt(amisArray[1]) + parseInt(amisArray[3]),
        etapa4 = etapa2 + etapa3,
        etapa = (Math.ceil ((etapa4 + 1) / 10) * 10) - etapa4
    );
    return etapa === 10 ? 0 : etapa
}

const sumarUnDato = (amisArray) => {
    amisArray.unshift('0')
    codigoAmis(amisArray.join(''))
}

console.log(codigoAmis("03898"))
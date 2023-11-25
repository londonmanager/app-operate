function numberFormat (numero, codigoIdioma = 'es-AR', digits = 2) {
  return numero.toLocaleString(codigoIdioma, {
    style: 'currency',
    currency: 'ARS',
    currencyDisplay: 'symbol',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })
}

function onlyNumbers (numero) {
  return numero.slice(0, -3)
}

function onlyDecimals (numero) {
  const parteDecimal = String(numero).split(',')[1]
  return parteDecimal ? parseInt(parteDecimal, 10) : null
}

export { numberFormat, onlyNumbers, onlyDecimals }

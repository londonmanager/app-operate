const cookieDuration = 24 * 60 * 60 * 1000 // 1 día

// Función para establecer una cookie segura
export const setCookie = (name, value, duration = cookieDuration) => {
  const expirationDate = new Date(Date.now() + duration)
  const cookieOptions = {
    expires: expirationDate,
    secure: true // Solo enviar cookies a través de HTTPS
    // httpOnly: true // No permitir acceso desde JavaScript
    // sameSite: 'strict' // Evitar ataques de Cross-Site Request Forgery (CSRF)
  }
  document.cookie = `${name}=${value}; ${Object.entries(cookieOptions)
    .map(([key, val]) => `${key}=${val}`)
    .join('; ')}`
}

// Examples
// setCookie('idToken', idToken.jwtToken, cookieDuration);
// setCookie('refreshToken', refreshToken.token, cookieDuration);
// setCookie('accessToken', accessToken.jwtToken, cookieDuration);

export const getCookie = name => {
  const cookies = document.cookie.split('; ')
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=')
    if (cookieName === name) {
      return cookieValue
    }
  }
  return null
}

// Examples
// const idToken = getCookie('idToken');
// const refreshToken = getCookie('refreshToken');
// const accessToken = getCookie('accessToken');

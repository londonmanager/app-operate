import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Typography, Button, TextField, Spacer } from 'londonmanager-legos'
import { getCookie, setCookie } from 'londonmanager-legos/common/utils/cookies'

import Logo from './assets/ldnman-logo.svg'
import BackgroundImage from './assets/ldnman-background.jpg'
import './App.scss'

const formSchena = {
  email: '',
  password: ''
}

const EyeIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0.666016 7.99996C0.666016 7.99996 3.33268 2.66663 7.99935 2.66663C12.666 2.66663 15.3327 7.99996 15.3327 7.99996C15.3327 7.99996 12.666 13.3333 7.99935 13.3333C3.33268 13.3333 0.666016 7.99996 0.666016 7.99996Z'
      stroke='#374151'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z'
      stroke='#374151'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const redirectUrl = 'https://londonmanager.pro/profile'
const apiUrl = 'https://api.londonmanager.pro/auth/login'

const App = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({
    ...formSchena
  })
  const [loading, setLoading] = useState(false)

  // Comprobar sesión
  if(getCookie('accessToken')){
    window.location.href = redirectUrl
 }

 // Form Controls
 const toggleShowPassword = () => setShowPassword(prev => !prev)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      ...formSchena
    }
  })

  const onSubmit = async data => {
    setLoading(true)

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const responseData = await response.json()

      if (responseData?.error) {
        if (typeof responseData?.error === 'string') {
          setErrors({
            general: responseData.error
          })
        } else {
          setErrors({
            ...responseData.error
          })
        }
      }

      if (response.ok) {
        // Sesión exitosa
        setCookie('idToken', responseData?.idToken.jwtToken);
        setCookie('refreshToken', responseData?.refreshToken.token);
        setCookie('accessToken', responseData?.accessToken.jwtToken);
      }
    } catch (error) {
      setErrors({
        general:
          'Ocurrió un error inesperado. Por favor comuníquese con el administrador.'
      })
    }

    setLoading(false)
  }

  return (
    <section className='section-container'>
      <img src={Logo} loading='lazy' width={297} alt='London Manager' />
      <Typography className='color-white' component='h3' size='sm'>
        Sistema de Gestión On-Line
      </Typography>

      <Spacer height={38} />

      <div className='form-container'>
        <Spacer height={10} />
        <Typography component='h1' type='title' size='xs'>
          Iniciar sesión
        </Typography>
        <Spacer height={4} />
        <div className='text-inline'>
          <Typography component='h2' size='sm'>
            ¿No tenés cuenta?
          </Typography>
          <Typography
            component='button'
            className='text-button'
            size='sm'
            aria-label='Registrarte es muy fácil'
          >
            Registrarte es muy fácil
          </Typography>
        </div>
        <Spacer height={25} />

        {/* Formulario */}
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          {errors?.general && (
            <Typography className='text-error' component='h2' size='sm'>
              {errors?.general}
            </Typography>
          )}

          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder='Correo electrónico'
                errorMsg={errors.email}
              />
            )}
          />
          <Spacer height={8} />
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder='Contraseña'
                type={showPassword ? 'text' : 'password'}
                icon={<EyeIcon aria-hidden />}
                iconAction={toggleShowPassword}
                errorMsg={errors.password}
              />
            )}
          />
          <Spacer height={16} />
          <Button type='submit' label='Iniciar sesión' fullWidth disabled={loading} />
        </form>
        {/* Fin del formulario */}

        <Spacer height={16} />
        <Typography component='a' className='text-button margin-auto' size='sm'>
          No recuerdo mi contraseña
        </Typography>

        <Spacer height={27} />
        <div className='divider' />
        <Spacer height={27} />

        <Button
          label='Iniciar sesión con Google'
          hierarchy='secondary'
          fullWidth
          disabled={loading}
        />
      </div>

      {/* Background */}
      <img
        className='background-image'
        loading='lazy'
        src={BackgroundImage}
        aria-hidden='true'
      />
    </section>
  )
}

export default App

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Typography, Button, TextField, Spacer } from 'londonmanager-legos'
import { setCookie } from '../utils/cookies.js'

import './Login.scss'

const formSchema = {
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

const apiUrl = 'https://api.londonmanager.pro/auth/signup'

export default function SignUp () {
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({
    ...formSchema
  })
  const [loading, setLoading] = useState(false)

  // Form Controls
  const toggleShowPassword = () => setShowPassword(prev => !prev)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      ...formSchema
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
        setCookie('idToken', responseData?.idToken.jwtToken)
        setCookie('refreshToken', responseData?.refreshToken.token)
        setCookie('accessToken', responseData?.accessToken.jwtToken)
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
    <>
      <Spacer height={10} />
      <Typography component='h1' type='title' size='xs'>
        Registrarse
      </Typography>
      <Spacer height={4} />
      <div className='text-inline'>
        <Typography component='h2' size='sm'>
          Ya tengo cuenta.
        </Typography>
        <Typography
          component='a'
          className='text-button'
          size='sm'
          href='/login'
        >
          Quiero iniciar sesión.
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
        <Spacer height={8} />
        <Controller
          name='repeat-password'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Repetir contraseña'
              type={showPassword ? 'text' : 'password'}
              icon={<EyeIcon aria-hidden />}
              iconAction={toggleShowPassword}
              errorMsg={errors.repeatPassword}
            />
          )}
        />
        <Spacer height={16} />
        <Typography className='text-gray' component='h4' size='sm'>
          Al hacer clic en &quot;Registrarme&quot;, aceptás los{' '}
          <a className='text-button'>Términos y condiciones</a>, la{' '}
          <a className='text-button'>Política de privacidad</a> y la{' '}
          <a className='text-button'>Política de cookies</a>.
        </Typography>
        <Spacer height={16} />
        <Button
          type='submit'
          label='Registrarme'
          fullWidth
          disabled={loading}
        />
      </form>
      {/* Fin del formulario */}

      <Spacer height={27} />
      <div className='divider' />
      <Spacer height={27} />

      <Button
        label='Registrarme con mi cuenta de Google'
        hierarchy='secondary'
        fullWidth
        disabled={loading}
      />
    </>
  )
}

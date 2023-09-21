import { useState } from 'react'
import { Controller, Form, useForm } from 'react-hook-form'

import { Typography, Button, TextField, Spacer } from 'londonmanager-legos'

import Logo from './assets/ldnman-logo.svg'
import BackgroundImage from './assets/ldnman-background.jpg'
import './App.scss'

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

const App = () => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword(prev => !prev)

  const apiURI = 'https://api.londonmanager.com/login'

  // Form
  const {
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

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
        <Typography component='h2' size='sm'>
          ¿No tenés cuenta? <a className='text-button'>Registrarte</a> es muy
          fácil.
        </Typography>
        <Spacer height={25} />

        {/* Formulario */}
        <Form
          className='form'
          action={apiURI}
          encType={'application/json'}
          onSuccess={() => {
            alert('Your application is updated.')
          }}
          onError={(err) => {
            console.log('error login:', err)
          }}
          control={control}
        >
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Campo requerido',
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
            }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder='Correo electrónico'
                errorMsg={
                  errors.email?.type === 'pattern'
                    ? 'Formato inválido'
                    : errors.email?.message
                }
              />
            )}
          />
          <Spacer height={8} />
          <Controller
            name='password'
            control={control}
            rules={{ required: 'Campo requerido' }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder='Contraseña'
                type={showPassword ? 'text' : 'password'}
                icon={<EyeIcon />}
                iconAction={toggleShowPassword}
                errorMsg={errors?.password && errors.password?.message}
              />
            )}
          />
          <Spacer height={16} />
          <Button type='submit' label='Iniciar sesión' fullWidth />
        </Form>
        {/* Fin del formulario */}

        <Spacer height={16} />
        <Typography component='a' className='text-button' size='sm'>
          No recuerdo mi contraseña
        </Typography>

        <Spacer height={27} />
        <div className='divider' />
        <Spacer height={27} />

        <Button
          label='Iniciar sesión con Google'
          hierarchy='secondary'
          fullWidth
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

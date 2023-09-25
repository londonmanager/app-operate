import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Typography, Button, TextField, Spacer } from 'londonmanager-legos'

import './Login.scss'

const formSchema = {
  email: ''
}

const apiUrl = 'https://api.londonmanager.pro/auth/login'

export default function ResetPassword () {
  const [errors, setErrors] = useState({
    ...formSchema
  })
  const [loading, setLoading] = useState(false)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      ...formSchema
    }
  })

  const onSubmit = async data => {
    
  }

  return (
    <>
      <Spacer height={10} />
      <Typography component='h1' type='title' size='xs'>
        Recuperar contraseña
      </Typography>
      <Spacer height={4} />
      <div className='text-inline'>
        <Typography component='h2' size='sm'>
          Ingresá tu correo electrónico y te enviaremos un email para que puedas restablecer tu contraseña.
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
        <Spacer height={16} />
        <Button
          type='submit'
          label='Enviar'
          fullWidth
          disabled={loading}
        />
      </form>
      {/* Fin del formulario */}

      <Spacer height={16} />
      <Typography component='a' href="/login" className='text-button margin-auto' size='sm'>
        Volver al inicio
      </Typography>
      <Spacer height={8} />
    </>
  )
}

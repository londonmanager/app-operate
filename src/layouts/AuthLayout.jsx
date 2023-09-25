import { Spacer, Typography } from 'londonmanager-legos'

import Logo from '../assets/ldnman-logo.svg'
import BackgroundImage from '../assets/ldnman-background.jpg'
import './AuthLayout.scss'

const AuthLayout = ({ children }) => (
  <section className='section-container'>
    <img src={Logo} loading='lazy' height={48} alt='London Manager' />
    <Typography className='color-white' component='h3' size='sm'>
      Sistema de Gestión On-Line
    </Typography>

    <Spacer height={38} />

    <div className='form-container'>{children}</div>

    {/* Background */}
    <img
      className='background-image'
      loading='lazy'
      src={BackgroundImage}
      aria-hidden='true'
    />
  </section>
)

export default AuthLayout

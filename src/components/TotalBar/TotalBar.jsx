import { Typography } from 'londonmanager-legos'
import './index.scss'
import { cashSvg, chequeSvg, clientSvg, descartarSvg, discountSvg, f1Icon, f2Icon, f3Icon, f4Icon, f5Icon, f6Icon, invoiceSvg } from './svgs'
import { numberFormat, onlyDecimals, onlyNumbers } from '../../helpers/numberFormat'

const MOCK_DATA = {
  total: 1928.5
}

const namespace = 'lm-total-bar'

const TotalBar = ({ actionCash, actionDelete }) => {
  return (
    <div className={namespace}>
      <div className={`${namespace}__total`}>
        {/* Descartar */}
        <button
          className={`${namespace}__button-cash ${namespace}__button-cash--error`}
        >
          <div className='icon'>{descartarSvg}</div>
          <div className='icon-right'>{f1Icon}</div>
        </button>

        {/* Descuento */}
        <button
          className={`${namespace}__button-cash ${namespace}__button-cash--alert`}
        >
          <div className='icon'>{discountSvg}</div>
          <div className='icon-right'>{f2Icon}</div>
        </button>

        {/* Cliente */}
        <button
          className={`${namespace}__button-cash ${namespace}__button-cash--primary`}
        >
          <div className='icon'>{clientSvg}</div>
          <Typography>Arián Fernández</Typography>
          <div className='icon-right'>{f3Icon}</div>
        </button>

        {/* Factura */}
        <button
          className={`${namespace}__button-cash ${namespace}__button-cash--primary`}
        >
          <div className='icon'>{invoiceSvg}</div>
          <Typography>Sin factura</Typography>
          <div className='icon-right'>{f4Icon}</div>
        </button>

        {/* Forma de Pago */}
        <button
          className={`${namespace}__button-cash ${namespace}__button-cash--primary`}
        >
          <div className='icon'>{chequeSvg}</div>
          <Typography>Cheque</Typography>
          <div className='icon-right'>{f5Icon}</div>
        </button>

        {/* Cobrar */}
        <button
          className={`${namespace}__button-cash ${namespace}__button-cash--success`}
        >
          <div className='icon'>{cashSvg}</div>
          <Typography>Cobrar</Typography>
          <div className='icon-right'>{f6Icon}</div>
        </button>
      </div>
    </div>
  )
}

export default TotalBar

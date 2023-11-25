import { TextField, Typography } from 'londonmanager-legos'
import { numberFormat } from '../../helpers/numberFormat'
import './index.scss'

const MOCK_ITEMS = [
  {
    qty: 2,
    title: 'Pizza Napolitana',
    description: 'Mozzarella, jamón y tomate',
    price: 1340.50
  },
  {
    qty: 1,
    title: 'Pizza Napolitana',
    description: 'Mozzarella, jamón y tomate',
    price: 1340.00
  },
  {
    qty: 4,
    title: 'Pizza Napolitana',
    description: 'Mozzarella, jamón y tomate',
    price: 1340.20
  }
]

const namespace = 'lm-sale-resume'

const SaleResume = () => {
  return (
    <div className={`${namespace}`}>
      <div className={`${namespace}__search-container`}>
        <TextField search placeholder='Buscar artículo' template='top-bar' />
      </div>
      <div className={`${namespace}__list-container`}>
        {MOCK_ITEMS.map((item, i) => (
          <li key={i}>
            <div className='qty'>
              <Typography size='md'>{item?.qty}</Typography>
            </div>
            <div className='text'>
              <Typography size='sm'>{item?.title}</Typography>
              <Typography size='sm'>{item?.description}</Typography>
            </div>
            <div className='price'>
              <Typography size='md'>{numberFormat(item?.price)}</Typography>
            </div>
            <div className='options'>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </div>
      <div className={`${namespace}__discounts-container`}></div>
    </div>
  )
}

export default SaleResume

import { Typography } from 'londonmanager-legos'
import './index.scss'

const MOCK_CATEGORIES = ['Entradas', 'Principales', 'Postres', 'Bebidas']
const MOCK_ARTICLES = [
  {
    img: 'https://cdn0.recetasgratis.net/es/posts/1/9/3/pizza_casera_31391_orig.jpg',
    title: 'Pizza Napolitana',
    description: 'Mozzarella, jamón y tomates',
    price: '1340.00'
  },
  {
    img: 'https://cdn0.recetasgratis.net/es/posts/1/9/3/pizza_casera_31391_orig.jpg',
    title: 'Hamburguesa Especial',
    description: 'Jamón, lechuga, tomate y...',
    price: '850.00'
  },
  {
    img: '',
    title: 'Especial de la casa',
    description: 'Arián se la come',
    price: '750.00',
    discountPrice: '940.00'
  },
  {
    img: 'https://cdn0.recetasgratis.net/es/posts/1/9/3/pizza_casera_31391_orig.jpg',
    title: 'Hamburguesa con cheddar',
    description: 'Doble carne 140g y cheddar',
    price: '530.00'
  }
]

const namespace = 'lm-articles-to-sale'

const ArticlesToSale = () => {
  return (
    <div className={namespace}>
      <div className={`${namespace}__categories-container`}>
        <Typography component='h4' className={`${namespace}__categories-title`}>
          Categorías
        </Typography>
        <ul>
          {MOCK_CATEGORIES.map((item, i) => (
            <li key={i}>
              <Typography component='button'>{item}</Typography>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${namespace}__articles-container`}>
        {MOCK_ARTICLES.map((item, i) => (
          <article key={i} className={`${namespace}__article-item`}>
            <div className='image-container'>
              {item?.img ? (
                <img src={item?.img} />
              ) : (
                <div className='no-image'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='41'
                    height='40'
                    viewBox='0 0 41 40'
                    fill='none'
                  >
                    <path
                      d='M31.9999 5H8.66659C6.82564 5 5.33325 6.49238 5.33325 8.33333V31.6667C5.33325 33.5076 6.82564 35 8.66659 35H31.9999C33.8409 35 35.3333 33.5076 35.3333 31.6667V8.33333C35.3333 6.49238 33.8409 5 31.9999 5Z'
                      stroke='#383838'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14.5012 16.6667C15.8819 16.6667 17.0012 15.5475 17.0012 14.1667C17.0012 12.786 15.8819 11.6667 14.5012 11.6667C13.1205 11.6667 12.0012 12.786 12.0012 14.1667C12.0012 15.5475 13.1205 16.6667 14.5012 16.6667Z'
                      stroke='#383838'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M35.332 25.0001L26.9986 16.6667L8.66528 35.0001'
                      stroke='#383838'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className='text-container'>
              <Typography size='sm'><strong>{item?.title}</strong></Typography>
              <Typography size='sm'>{item?.description}</Typography>
            </div>
            <div className='price-container'>
              <Typography><strong>${item?.price}</strong></Typography>
              <Typography size='xs'>{item?.discountPrice ? `$${item?.discountPrice}` : ''}</Typography>
              <div className='article-color' />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default ArticlesToSale

import { useParams } from 'react-router-dom'
import { HeaderSection } from 'londonmanager-legos'
import ArticlesToSale from '../components/ArticlesToSale/ArticlesToSale'
import SaleResume from '../components/SaleResume/SaleResume'
import TotalBar from '../components/TotalBar/TotalBar'
import { saleDropdownItems } from '../helpers/dropdown-items'
import styles from './Sale.module.scss'

export default function Sale ({ user }) {
  const { popID } = useParams()
  console.log('user',user)
  console.log(popID)
  
  return (
    <div className={styles.container}>
      <HeaderSection
        title='Vender'
        dropdownItems={saleDropdownItems}
        img={{
          src: 'https://londonmanager.vercel.app/_next/image?url=https%3A%2F%2Flondonmanager.com%2F2021%2Fimagenes%2Fpuntos_de_venta%2F1%2F18_06_2020-YeiNu-london-logo.png&w=1920&q=75'
        }}
      />
      <div className={styles.containerSecondary}>
        {/* Artículos */}
        <ArticlesToSale />
        {/* Venta */}
        <section className={styles.containerSale}>
          <SaleResume />
        </section>
      </div>
      <section className={styles.containerResume}>
        <TotalBar />
      </section>
    </div>
  )
}

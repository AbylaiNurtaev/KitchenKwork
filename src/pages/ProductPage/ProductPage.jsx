import React from 'react'
import s from './ProductPage.module.sass'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const {id} = useParams()
  return (
    <div className={s.container}>{id}
        <div className={s.slider}>
            <div className={s.mainImage}>
                <img src="" alt="" />
            </div>
            <div className={s.imageNavigation}>

            </div>
        </div>
    </div>
  )
}

export default ProductPage
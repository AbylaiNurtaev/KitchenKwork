import React from 'react'
import s from './Item.module.sass'

function Item({imgLink, text, href}) {
  return (
    <div className={s.container}>
        <a href={href}><img src={imgLink} alt="img" /></a>
        <p className={s.parText}>{text}</p>
    </div>
  )
}

export default Item
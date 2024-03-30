import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.jpg'
import s from './Header.module.sass'
import { Link, NavLink } from 'react-router-dom'
import links from '../../links.json'
import instIcon from '../../images/icons/inst.png'
import phoneIcon from '../../images/icons/phone.png'
import telegram from '../../images/icons/telegram.png'

function Header() {

  const [logoSize, setLogoSize] = useState('big')

  const handleScroll = () => {
    const newSize = window.scrollY > 50 ? 'small' : 'big'
    setLogoSize(newSize)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${s.block} ${s[logoSize]}`}>
      <div className={s.innerBlock}>
        <div className={s.logo}>
          <img src={logo} alt="logo" className={`${s.logoImage} ${s[logoSize]}`}/>
        </div>

        <div className={s.navigation}>
          {
            links.map((el) => {
              return (
                <div key={el.id} className={s.linkContainer}>
                <Link to={el.mainLink} className={s.link}>{el.mainName}</Link>
                  <div className={s.subLinks}>
                    {el.sublinks.map((link, index) => {
                      return (
                        <Link key={index} to={link.path} className={s.sublink}>{link.name}</Link>
                      )
                    })}
                  </div> 
                </div>
              )
            })
          }

        </div>


        <div className={s.contacts}>
          <img className={s.phoneIcon} src={phoneIcon} alt="phone" />
          <p className={s.phoneNumber}>+7 (778) 464-25-56 </p>
          <img className={s.instIcon} src={instIcon} alt="inst" />
          <img className={s.telegramIcon} src={telegram} alt="telegram" />
        </div>
      </div>
    </div>
  )
}

export default Header
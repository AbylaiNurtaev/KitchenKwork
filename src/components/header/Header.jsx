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
  const [burgerMenu, setBurgerMenu] = useState(false)

  const handleScroll = () => {
    const newSize = window.scrollY > 50 ? 'small' : 'big'
    setLogoSize(newSize)
  }

  const toggleBurgerMenu = () => {
    setBurgerMenu(prev => !prev)
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
          <img src={logo} alt="logo" className={`${s.logoImage} ${s[logoSize]}`} />
        </div>

        <div className={s.navigation}>
          {
            links.map((el) => {
              return (
                <div key={el.id} className={s.linkContainer}>
                  <Link to={el.mainLink} className={s.link}>{el.mainName}</Link>
                  <div className={s.subLinks}>
                    {el.sublinks ? el.sublinks.map((link, index) => {
                      return (
                        <Link key={index} to={link.path} className={s.sublink}>{link.name}</Link>
                      )
                    }) : null}
                  </div>
                </div>
              )
            })
          }

        </div>


        <div className={s.contacts}>
          <img className={s.phoneIcon} src={phoneIcon} alt="phone" />
          <p className={s.phoneNumber}>+7 (778) 464-25-56 </p>
          <img className={s.instIcon} src="https://cdn-icons-png.flaticon.com/512/25/25684.png" alt="inst" />
          <img className={s.telegramIcon} src={telegram} alt="telegram" />
          <img className={s.instIcon} src="https://play-lh.googleusercontent.com/IV105amnP9cWi05dNA0VmTAV0NWejwLGYhemUWSZnTCoBytF3zmGzyTwtBwY9U9eb2M" alt="telegram" />
        </div>


        <div className={s.burgerMenu}>
          <div className={burgerMenu ? s.opacity : s.nonOpacity}></div>
          <img onClick={toggleBurgerMenu} src={ burgerMenu ? "https://cdn-icons-png.flaticon.com/512/7124/7124232.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"} alt="-" />
          <div className={burgerMenu ? s.showedMenu : s.hiddenMenu}>
            <div className={s.navigation}>
              {
                links.map((el) => {
                  return (
                      <Link to={el.mainLink} key={el.id} className={burgerMenu ? s.link2 : s.nonLink}>{el.mainName}</Link>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
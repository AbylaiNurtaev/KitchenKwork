import React from 'react'
import logo from '../../images/logo.jpg'
import s from './Header.module.sass'
import { Link, NavLink } from 'react-router-dom'
import links from '../../links.json'

function Header() {

  return (
    <div className={s.block}>
      <div className={s.innerBlock}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={s.navigation}>
          {
            links.map((el) => {
              return (
                <Link key={el.id} to={el.mainLink} className={s.link}>{el.mainName}
                  <div className={s.subLinks}>
                    {el.sublinks.map((link, index) => {
                      return (
                        <Link key={index} to={link.path} className={s.sublink}>{link.name}</Link>
                      )
                    })}
                  </div>
                </Link>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import s from './footer.module.sass'
import links from '../../links.json'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.jpg'

function Footer() {
    const navigate = useNavigate()
    return (
        <div className={s.container}>
            <div className={s.innerContainer}>
                {
                    links.filter(elem => elem.sublinks != null).map((elem) => (
                        <div key={elem.id} className={s.column}>
                            <h2>{elem.mainName}</h2>
                            <div className={s.parTexts}>
                                {elem.sublinks && elem.sublinks.map((link, index) => (
                                    <p key={index} className={s.parText} onClick={() => { navigate(link.path) }}>{link.name}</p>
                                ))}
                            </div>
                        </div>
                    ))
                }
                <div className={s.column}>
                    <h2>Основные разделы</h2>
                    <div className={s.parTexts}>
                        <p className={s.parText}>Контакы</p>
                        <p className={s.parText}>О нас</p>
                        <p className={s.parText}>Портфолио</p>
                    </div>
                </div>
                <div className={s.column}>
                    <h2>Адрес</h2>
                    <div className={s.parTexts}>
                        <p className={s.parText}>Москва, 2-я Черногрязская 6 к2</p>
                        <p className={s.parText}>Часы работы
пн-сб с 10:00 до 19:00, вс с 11:00 до 18:00</p>
                        <p className={s.parText}>fason_kuhni@mail.ru</p>
                    </div>
                </div>

                <div className={s.logo}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
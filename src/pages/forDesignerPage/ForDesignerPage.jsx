import React from 'react'
import s from './ForDesignerPage.module.sass'
function ForDesignerPage() {
    return (
        <div className={s.container}>

            <div className={s.mainText}>
                <div className={s.wrapper}>
                    <h1>Мы открыты к сотрудничеству с архитекторами и дизайнерами интерьеров</h1>
                    <p>Одним из приоритетных направлений бизнеса для нас является предоставление дизайнерам комплексного подхода от проектирования и производства до доставки и установки мебели по индивидуальным проектам.</p>
                </div>
            </div>


            <div className={s.contacts}>
                <div className={s.wrapper}>
                    <div className={s.left}>
                        <h1>Персональная скидка и вознаграждение</h1>
                        <p>Обратитесь к руководителю компании Fason кухни, Хоняковой Ксении Владимировне</p>
                        <p>тел. +7 915 255 97 87 (писать в вотсап)</p>
                        <p>email: fason_kuhni@mail.ru</p>

                        <button>Свзяаться с руководителем</button>
                    </div>
                    <img className={s.right} src="https://fason-kuhni.ru/wp-content/uploads/2023/05/photo_2023-05-04_17-35-06.jpg" alt="" />
                </div>
            </div>

            <div className={s.numerable}>
                <div className={s.wrapper}>
                    <div className={s.block}>
                        <h1 className={s.mainNumber}>1</h1>
                        <p className={s.parText}>Регистрация в партнерской программе</p>
                    </div>
                    <div className={s.block}>
                        <h1 className={s.mainNumber}>2</h1>
                        <p className={s.parText}>Визуализация и расчет проекта</p>
                    </div>
                    <div className={s.block}>
                        <h1 className={s.mainNumber}>3</h1>
                        <p className={s.parText}>Договор на изготовление мебели</p>
                    </div>
                    <div className={s.block}>
                        <h1 className={s.mainNumber}>4</h1>
                        <p className={s.parText}>Агентское вознаграждение</p>
                    </div>
                </div>
            </div>

            <img className={s.bottomImage} src="" alt="" />
            <div className={s.bottomSide}>
                <h1>Почему с нами выгодно?</h1>
                <p className={s.p_1}>◎ Реализовываем проекты любой сложности</p>
                <p className={s.p_2}>◎ Широкий ассортимент материалов</p>
                <p className={s.p_3}>◎ Ежемесячное обновление акций для клиентов</p>
                <p className={s.p_4}>◎ Быстрые сроки изготовления мебели</p>
                <p className={s.p_5}>◎ Широкий выбор бытовой техники и аксессуаров для кухни</p>
                <p className={s.p_6}>◎ Выгодные условия сотрудничества с дизайнерами</p>
                <div className={s.btnWrapper}>
                    <button>Стать партнёром</button>
                </div>
            </div>

        </div>
    )
}

export default ForDesignerPage
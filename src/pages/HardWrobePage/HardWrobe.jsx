import React, { useEffect, useState } from 'react'
import s from './HardWrobe.module.sass'
import Button from '../../components/getConsultationButton/Button'
import firstImage from "../../images/шкафы/1.jpg"
function HardWrobe() {

    const[images, setImages] = useState([])

    useEffect(() => {
        for(let i = 2; i <= 10; i++){
            import(`../../images/шкафы/${i}.jpg`)
            .then(image => setImages((prev) => [...prev, image.default]))
            .catch((err) => console.error(err))
        }
    }, [])

  return (  
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.topTexts}>
                <h1>Шкафы</h1>
                <h2>Все виды шкафов на заказ</h2>
                <p>Гардеробные комнаты и системы хранения для вашего интерьера любой сложности. Шкафы встроенные и отдельностоящие от Merbau- внимание к пространству и пожеланиям заказчика, эргономика и современный дизайн.</p>
            </div>

            <div className={s.topDescription}>
                <div className={s.left}>
                    <h2>Материалы и решения для шкафов</h2>
                    <p>Проектируем и реализуем шкафы . Работаем с ЛДСП EGGER, МДФ, шпон, Используем системы алюминиевых профилей Mixal, GLIX, Lumix, VIX, TEATRIX, MIXBOX, фурнитуру BLUM и аксессуары для выдвижных ящиков итальянских производителей. Если вам нужна консультация или есть готовый проект для просчета воспользуйтесь формой.</p>
                    <Button/>
                </div>

                <div className={s.right}>
                    <img src={firstImage} alt="" />
                </div>
            </div>

            <div className={s.gallery}>
                {images.length > 1 ? images.map((elem) => 
                <img key={elem} src={elem} alt='img'/> 
            ): null}
            </div>

            <div className={s.bottomSide}>
                <div className={s.left}>
                    <img src="https://fason-kuhni.ru/wp-content/uploads/2021/03/komod5.jpg" alt="" />
                </div>

                <div className={s.right}>
                    <h1>Как заказать шкаф в Merbau</h1>
                    <p>Вы можете выслать проект  на почту или получить консультацию, если еще не определились с дизайном и материалами.  Ждем вас в нашем салоне по адресу ул. 2-Черногрязская 6/2. Мы поможем подобрать фурнитуру, наполнение и варианты отделок. <br/><br/> Подготовим эскизы и смету гардеробной. Срок изготовления зависит от сложности и в среднем составляет 8 недель. Далее наши монтажники установят изделие. Остались вопросы? Мы с радостью ответим на все.</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HardWrobe
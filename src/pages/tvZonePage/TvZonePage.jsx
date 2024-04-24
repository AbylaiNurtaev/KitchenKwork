import React, { useEffect, useState } from 'react'
import s from './tvZone.module.sass'
import Button from '../../components/getConsultationButton/Button'
import firstImage from "../../images/тв-зоны/1.jpg"
import lastImage from "../../images/тв-зоны/3.jpg"
function TvZonePage() {

    const[images, setImages] = useState([])

    useEffect(() => {
        for(let i = 1; i <= 9; i++){
            import(`../../images/тв-зоны/${i}.jpg`)
            .then(image => setImages((prev) => [...prev, image.default]))
            .catch((err) => console.error(err))
        }
    }, [])

  return (  
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.topTexts}>
                <h1>ТВ зоны</h1>
                <h2>Функциональное обустройство комнат для хранения</h2>
                <p>Гардеробные комнаты и системы хранения для вашего интерьера любой сложности. Гардеробные от Fason- внимание к пространству и пожеланиям заказчика, эргономика и современный дизайн.</p>
            </div>

            <div className={s.topDescription}>
                <div className={s.left}>
                    <h2>Материалы и решения для гардеробных</h2>
                    <p>Спроектируем и реализуем гардеробную. Работаем с ЛДСП, МДФ, шпон,  Используем системы алюминиевых профилей Mixal, GLIX, Lumix, VIX, TEATRIX, MIXBOX, фурнитуру BLUM и аксессуары для выдвижных ящиков BELAPOST. Если вам нужна консультация или есть готовый проект для просчета воспользуйтесь формой.</p>
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
                    <img src={lastImage} alt="" />
                </div>

                <div className={s.right}>
                    <h1>Как заказать мебель в Merbau</h1>
                    <p>Вы можете выслать проект  на почту или получить консультацию, если еще не определились с дизайном и материалами.  Ждем вас в нашем салоне по адресу ул. 2-Черногрязская 6/2. Мы поможем подобрать фурнитуру, наполнение и варианты отделок. <br/><br/> Подготовим эскизы и смету гардеробной. Срок изготовления зависит от сложности и в среднем составляет 8 недель. Далее наши монтажники установят изделие. Остались вопросы? Мы с радостью ответим на все.</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TvZonePage
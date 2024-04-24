import {React, useEffect, useState} from 'react'

import s from './ChildrenPage.module.sass'

import firstImage from '../../images/детские/4.jpg'
import lastImage from '../../images/детские/7.jpg'
import Button from '../../components/getConsultationButton/Button'

function ChildrenPage() {

    const[images, setImages] = useState([])

    useEffect(() => {
        for(let i = 1; i <= 9; i++){
            import(`../../images/детские/${i}.jpg`)
            .then(image => setImages((prev) => [...prev, image.default]))
            .catch((err) => console.error(err))
        }
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.topTexts}>
                <h1>Детские комнаты</h1>
                <p>Наша мебель для детской изготавливается из качественных материалов, которые отлично зарекомендовали себя за годы нашей работы. Во всех изделиях применяется идеальный тандем из массива и крашеного МДФ. Прекрасный вариант с точки зрения прочности, безопасности и внешнего вида.</p>
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

export default ChildrenPage
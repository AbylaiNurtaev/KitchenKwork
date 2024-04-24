import React, { useEffect, useState } from 'react'
import s from './Fasads.module.sass'
import fasadsList from "../../fasads.json"
function Fasads() {
  const [images, setImages] = useState([]);
  const bigFasads = ['ванкувер', "даллас", "детройт", "калифорния", "монреаль", "торонто", "филадельфиа"]
  const anotherStyle = ['версаль', "монблан", "орлеан", "париж 2", "париж", "прованс"]
  useEffect(() => {
    for(let i = 0; i <= fasadsList.fasads.length-1; i++){
      import(`../../images/фасады/${fasadsList.fasads[i]}.jpg`)
      .then(image => {
        if(bigFasads.includes(fasadsList.fasads[i])){
          setImages(prev => [{image: image.default, name: fasadsList.fasads[i], style: 'hint'}, ...prev])
        }
        else if(anotherStyle.includes(fasadsList.fasads[i])){
          setImages(prev => [...prev, {image: image.default, name: fasadsList.fasads[i], style: 'true'}])
        }
        else{
          setImages(prev => [...prev, {image: image.default, name: fasadsList.fasads[i]}])
        }
      }
      )
      .catch((err) => console.error(err, i))
    }
  }, [])
  return (
    <div className={s.container}>
        <h1 className={s.mainText}>Фасады</h1>
        <div className={s.middleSide}>
            <div className={s.left}>
            <h1>Материалы и решения для фасадов</h1>
            <div className={s.parBlock}>
                <p>В ассортименте  фасады изготовлены из массива дуба, ясеня, МДФ, фасады из МДФ в отделке натурального шпона более 30 видов. МДФ в эмали более 1000 цветов.</p>
                <p>На странице представлена не полная линейка наших фасадов. Для ознакомления приглашаем вас в наш шоу-рум.</p>
                <p>Остались вопросы? Получите консультацию</p>
            </div>
            <button>Получить консультацию</button>
            </div>
            <div className={s.right}>
              <img src="https://fason-kuhni.ru/wp-content/uploads/2021/04/fasade-min-800x500.jpg" alt="" />
            </div>
        </div>

        <div className={s.gallery}>
          {
            images.length > 1 ? (
            images.map((elem, index) => (
              <div key={index} style={elem.style == undefined || elem.style === 'true' ? {height: '500px'} : {height: '700px'}}>
                <img src={elem.image} id={elem.style === 'hint' ? s.hinted : null }
                style={elem.style === 'true' ? {height: '445px', objectFit: 'cover'} : null} alt={elem} />
                <p>{elem.name}</p>
              </div>
            ))
              ) : <h1>Loading..</h1>
          }
        </div>

        <div className={s.bottomWrapper}>
        <div className={s.bottomSide}>
            <div className={s.left}>
              <img src="https://fason-kuhni.ru/wp-content/uploads/2021/04/fasade-min.jpg" alt="img" />
            </div>
            <div className={s.right}>
              <h1>Как заказать мебель в Merbau</h1>
              <p>Вы можете выслать проект  на почту или получить консультацию, если еще не определились с дизайном и материалами.  Ждем вас в нашем салоне по адресу ул. 2-Черногрязская 6/2. Мы поможем подобрать фурнитуру, наполнение и варианты отделок.</p>
              <p>Подготовим эскизы и смету шкафа. Срок изготовления зависит от сложности и в среднем составляет 8 недель. Далее наши монтажники установят изделие. Остались вопросы? Мы с радостью ответим на все.</p>
              <button>Получить консультацию</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Fasads
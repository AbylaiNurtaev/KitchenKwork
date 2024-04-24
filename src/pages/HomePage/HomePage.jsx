import React, { useEffect } from 'react'
import s from './HomePage.module.sass'


function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className={s.container}>
      <img src="https://fason-kuhni.ru/wp-content/uploads/2021/04/hero-min.jpg" alt="photo" className={s.mainPhoto} />
      {/* <Item imgLink='https://i.1.creatium.io/9f/9d/60/1a4fc81e429ea8a401634bd6fb00fdc33a/640x360q8/laura_mila_vid1_ziti_cucine.jpg' text='LAURA & MILA' href='/products/1'/> */}
      <div className={s.countPrice}>
        <h2 className={s.mainText}>Расчитайте стоимость кухни</h2>
        <p className={s.parText}>Узнайте стоимость своей будущей кухни и закрепите за собой индивидуальную цену!</p>
        <button>Расчитать стоимость кухни</button>
      </div>

      <div className={s.middleSide}>
        <h2 className={s.main}>Кухни на заказ и мебель по индивидуальному проекту</h2>
        <p className={s.parText}>Собственная линейка фасадов, работаем со всеми материалами: МДФ, массив, шпон, пластик. Индивидуальные проекты и сотрудничество с дизайнерами.</p>
        <div className={s.blocks}>
          <div className={s.imageBlock}>
            <img src="https://fason-kuhni.ru/wp-content/uploads/2021/02/classic-min-800x500.jpg" alt="img" />
            <div className={s.name}>Современная классика</div>
            <div className={s.description}>Линейка фасадов из массива МДФ</div>
          </div>
          <div className={s.imageBlock}>
            <img src="https://fason-kuhni.ru/wp-content/uploads/2021/03/moderna-min-800x500.jpg" alt="img" />
            <div className={s.name}>Современные кухни</div>
            <div className={s.description}>Широкий выбор материалов отделки</div>
          </div>
        </div>

        <div className={s.graySide}>
          <div className={s.blocks}>
            <div className={s.block}>
              <img src="https://fason-kuhni.ru/wp-content/uploads/2021/02/designed-min-600x600.jpg" alt="" />
              <div>
                <h2>Дизайнерские кухни</h2>
                <p>Кухни по индивидуальному проекту</p>
              </div>
            </div>
            <div className={s.block}>
              <div>
                <h2>Шкафы</h2>
                <p>Все виды шкафов на заказ</p>
              </div>
              <img src="https://fason-kuhni.ru/wp-content/uploads/2021/02/wardrobe-min-600x600.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className={s.messageSide}>
          <h1 className={s.bigText}>Отправьте проект на просчет или задайте вопрос</h1>
          <p className={s.parText}>Наш специалист свяжется с вами для уточнения деталей по проекту и ответит на ваши вопросы.</p>
          <button>Написать</button>
        </div>



        <div className={s.tripleContainer}>
          <div className={s.wrapper}>

            <div className={s.leftSide}>
              <img src="https://fason-kuhni.ru/wp-content/uploads/2021/03/materials-min-600x600.jpg" alt="" />
              <div>
                <h2>Материалы и техника</h2>
                <p>Фасады, мойки, столешницы, техника, наполнение</p>
              </div>
            </div>

            <div className={s.rightSide}>
              <div className={s.topBlock}>
                <img src="https://fason-kuhni.ru/wp-content/uploads/2021/03/garderob-min-600x600.jpg" alt="" />
                <div>
                  <h2>Гардеробные</h2>
                  <p>Функционально обустройство комнат для хранения</p>
                </div>
              </div>
              <div className={s.bottomBlock}>
                <div>
                  <h2>Тумбы и комоды</h2>
                  <p>На заказ и готовые решения</p>
                </div>
                <img src="https://fason-kuhni.ru/wp-content/uploads/2021/03/komod-min-600x600.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>




        <div className={s.seeMore}>
          <h1>Смотрите также</h1>
          <div className={s.blocks}>
            <div className={s.block}>
              <img src="https://fason-kuhni.ru/wp-content/uploads/2021/03/kitchen_4-min-800x500.jpeg" alt="" />
              <h2>Кухня Акцент</h2>
              <p>Современная классика</p>
            </div>
            <div className={s.block}>
              <img src="https://fason-kuhni.ru/wp-content/uploads/2021/03/kitchen_4-min-800x500.jpeg" alt="" />
              <h2>Кухня Акцент</h2>
              <p>Современная классика</p>
            </div>
            <div className={s.block}>
              <img src="https://fason-kuhni.ru/wp-content/uploads/2021/03/kitchen_4-min-800x500.jpeg" alt="" />
              <h2>Кухня Акцент</h2>
              <p>Современная классика</p>
            </div>
          </div>
          <button>Каталог кухонь</button>
        </div>

        
      </div>
    </div>
  )
}

export default HomePage
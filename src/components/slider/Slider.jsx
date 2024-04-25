import React, { useEffect, useState } from 'react';
import s from './Slider.module.sass';
import { useNavigate } from 'react-router-dom';
import sliderArrow from '../../images/icons/slider_arrow.png'
import LazyLoad from 'react-lazyload';



function Slider({ data }) {
    const {type, name, titleText, parText} = data;
    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(0)



    const [item, setItem] = useState({
        titleText,
        parText
    })

    useEffect(() => {
        const loadImages = async() => {
            let promiseImages = []
            for(let i = 1; i <= 5; i++){
                promiseImages.push(
                    import(`../../images/монтажи1/${name}/${i}.jpg`)

                    .catch(() => undefined)
                )
            }
            let images = await Promise.all(promiseImages);
            images = images.filter((img) => img !== undefined).map(image => image.default)
            setItem(prev => ({...prev, images}))
        }
        loadImages();
    }, [data])

    const changeIndex = (e, index) => {
        if (currentImage + index == item.images.length) {
            setCurrentImage(0)
            
        } else if (currentImage + index < 0) {
            setCurrentImage(item.images.length - 1)
        }
        else {
            setCurrentImage(prev => prev + index);
        }
    }

    const handleChooseImage = (index) => {
        setCurrentImage(index)
    }

    // const data = 
    // { 'Адыгея': { titleText: 'Metida', parText: par },
    // 'Алина Балашиха': { titleText: 'Metida', parText: par },
    // 'Алина мытищи': { titleText: 'Metida', parText: par },
    // 'Архитектор Света': { titleText: 'Metida', parText: par },
    // 'Белая - Сваровски': { titleText: 'Metida', parText: par },
    // 'Грета': { titleText: 'Morotiema', parText: par },
    // 'Дембель': { titleText: 'Morotiema', parText: par },
    // 'денис_ольга': { titleText: 'Morotiema', parText: par },
    // 'Елена Анатольевна': { titleText: 'Morotiema', parText: par },
    // 'Зеленая': { titleText: 'Morotiema', parText: par },
    // 'Инфинити золото': { titleText: 'Morotiema', parText: par },
    // 'лазаревка': { titleText: 'Morotiema', parText: par },
    // 'Лена Королев': { titleText: 'Morotiema', parText: par },
    // 'Лорена': { titleText: 'Morotiema', parText: par },
    // 'Михаил': { titleText: 'Morotiema', parText: par },
    // 'Миша борода': { titleText: 'Morotiema', parText: par },
    // 'моя сестра': { titleText: 'Morotiema', parText: par },
    // 'Мытищи': { titleText: 'Morotiema', parText: par },
    // 'на гоголя': { titleText: 'Morotiema', parText: par },
    // 'Новые черемушки': { titleText: 'Morotiema', parText: par },
    // 'одинцово Лилия': { titleText: 'Morotiema', parText: par },
    // 'орест': { titleText: 'Morotiema', parText: par },
    // 'Румянцево Ольга': { titleText: 'Morotiema', parText: par },
    // 'с Витей': { titleText: 'Morotiema', parText: par }
    // }
    return (
        <div className={s.container}>
      <meta httpEquiv="Cache-Control" content="max-age=3600"></meta>

            {item ? (
                <div className={s.left}>
                    <div className={s.prew}>
                        <button onClick={(e) => { changeIndex(e, -1) }} className={s.leftButton}><img src={sliderArrow} alt="" /></button>
                        <img loading="lazy" src={item.images ? item.images[currentImage] : null} alt="preview" />
                        <button onClick={(e) => { changeIndex(e, 1) }} className={s.rightButton}><img src={sliderArrow} alt="" /></button>
                    </div>
                    <div className={s.rulet}>
                        {item.images ? (
                            item.images.map((image, index) => (
                                <img
                                    onClick={() => {handleChooseImage(index)}}
                                    src={image}
                                    key={index}
                                    alt={`image-${index}`}
                                    id={index == currentImage ? s.light : null}
                                    loading="lazy"
                                />
                            ))
                        ) : null}
                    </div>
                </div>
            ) : null}

            <div className={s.right}>
                <h2 className={s.title}>{item ? item.titleText : null}</h2>
                <p className={s.par}>{item ? item.parText : null}</p>
            </div>
        </div>
    );
}

export default Slider;

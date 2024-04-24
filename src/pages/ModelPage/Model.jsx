import React, { useEffect, useState } from 'react';
import s from './Model.module.sass';
import sliderArrow from '../../images/icons/slider_arrow.png'
import { useParams } from 'react-router-dom';

function Model() {
    const { type, model } = useParams();
    const [prewImage, setPrewImage] = useState();
    const [imageList, setImageList] = useState([prewImage]);

    const [currentImage, setCurrentImage] = useState(0)



    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchImages = async () => {
            try {
                const prew = await import(`../../images/кухни/${type} кухни/${model}/prew.jpg`);
                setPrewImage(prew.default);

                const imagePromises = [];
                for (let i = 1; i <= 5; i++) {
                    imagePromises.push(import(`../../images/кухни/${type} кухни/${model}/${i}.jpg`)
                        .catch(() => undefined));
                }

                const images = await Promise.all(imagePromises);
                const filteredImages = images.filter(img => img !== undefined);
                const imageUrls = filteredImages.map(img => img.default);
                setImageList(imageUrls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [type, model]);



    const changeIndex = (e, index) => {
        // let elem = e.currentTarget.parentNode.querySelector('img:nth-child(2)');
        // elem.classList.remove(s.animatedLeft)   
        // elem.classList.remove(s.animatedRight)
        // if(index === -1){
        //     elem.classList.add(s.animatedLeft)
        // }else if(index === 1){
        //     elem.classList.add(s.animatedRight)
        // }
        if (currentImage + index == imageList.length) {
            setCurrentImage(0)
        } else if (currentImage + index < 0) {
            setCurrentImage(imageList.length - 1)
        }
        else {
            setCurrentImage(prev => prev + index);
        }
    }

    const handleChooseImage = (index) => {
        setCurrentImage(index)
    }

    return (
        <div className={s.container}>
            <div className={s.slider}>
                <div className={s.leftSide}>
                    <button onClick={(e) => { changeIndex(e, -1) }} className={s.leftButton}><img src={sliderArrow} alt="" /></button>
                    {prewImage && <img className={s.mainImage} src={imageList[currentImage]} alt="Preview" />}
                    <button onClick={(e) => { changeIndex(e, 1) }} className={s.rightButton}><img src={sliderArrow} alt="" /></button>
                </div>
                <div className={s.rightSide}>
                    {imageList.length > 0 ? imageList.map((elem, index) => (
                        <img onClick={() => { handleChooseImage(index) }} id={index == currentImage ? s.light : null} className={imageList.length <= 3 ? s.tripleRide : s.moreThanTriple} key={index} src={elem} alt={`Image ${index}`} />
                    )) : null}
                </div>
            </div>
            <div className={s.lowContainer}>
                <div className={s.inner}>
                    <div className={s.leftWrapper}>
                        <div className={s.priceBlock}>
                            <h1 className={s.price}>70.000₽</h1>
                            <button>Заказать</button>
                        </div>
                        <p className={s.parText}>Проектируем и изготавливаем кухни и мебель по дизайн-проектам. Мебель со сложными фрезеровками, используем в отделках более ста видов шпона. Помогаем дизайнерам создать авторскую мебель, решаем сложные технологические задачи</p>
                    </div>
                    <div className={s.iconsBlock}>
                        <img src="https://i.1.creatium.io/94/bd/1e/20ad2356253df4dd4eb85a810ad08078f9/150x150q10/italian_ziti_icon_150x150.png" alt="" />
                        <img src="https://i.1.creatium.io/1d/63/5e/a2ae71a04d0c3c8f029fbacf7e4fe539e0/150x150q8/srok_ziti_icon_150x150.png" alt="" />
                        <img src="https://i.1.creatium.io/7c/85/94/110af60f49dc110e09cb9e4d77ad3dadf7/150x150q8/eco_ziti_icon_150x150.png" alt="" />
                        <img src="https://i.1.creatium.io/5c/8b/da/a6ec06ebb87ae425f7075f5420800e2d86/150x150q8/sena_ziti_icon_150x150.png" alt="" />
                        <img src="https://i.1.creatium.io/38/4f/5b/005c1ed849ecbc413f08948160bd9db942/150x150q8/sloi_ziti_icon_150x150.png" alt="" />
                        <img src="https://i.1.creatium.io/f2/34/b3/397bced0a15131cc1e05dd8337840f8b3f/150x150q8/matt_gloss_ziti_icon_150x150.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Model;

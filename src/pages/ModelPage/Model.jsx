import React, { useEffect, useState } from 'react';
import s from './Model.module.sass';
import sliderArrow from '../../images/icons/slider_arrow.png'
import { useParams } from 'react-router-dom';

function Model() {
    const { type, model } = useParams();
    const [prewImage, setPrewImage] = useState();
    const [imageList, setImageList] = useState([prewImage]);

    const[currentImage, setCurrentImage] = useState(0)

    

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

   

    const changeIndex = (index) => {
        console.log(currentImage + index);
        if(currentImage + index == imageList.length){
            setCurrentImage(0)
        }else if(currentImage + index < 0){
            setCurrentImage(imageList.length - 1)
        }
        else{
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
                    <button onClick={() => {changeIndex(-1)}} className={s.leftButton}><img src={sliderArrow} alt="" /></button>
                    {prewImage && <img className={s.mainImage} src={imageList[currentImage]} alt="Preview" />}
                    <button onClick={() => {changeIndex(1)}} className={s.rightButton}><img src={sliderArrow} alt="" /></button>
                </div>
                <div className={s.rightSide}>
                    {imageList.length > 0 ? imageList.map((elem, index) => (
                        <img onClick={() => {handleChooseImage(index)}} id={index == currentImage ? s.light : null} className={imageList.length <= 3 ? s.tripleRide : s.moreThanTriple} key={index} src={elem} alt={`Image ${index}`} />
                    )) : null}
                </div>
            </div>
        </div>
    );
}

export default Model;

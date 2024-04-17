import {React, useState, useEffect, Suspense} from 'react'
import s from "./KitchensTypePage.module.sass"
import { useParams } from 'react-router-dom';
import Prewie from '../../components/prewie/Prewie';

function KitchensTypePage() {
    const {type} = useParams()
    const [mainText, setMainText] = useState('');
    const [limit, setLimit] = useState(0)
    
    const defineMainText = () => {
    if (type === 'all') {
      setMainText('Кухни');
    } else if (type === 'classic') {
      setMainText('Неоклассические кухни');
      setLimit(5)
    } else if (type === 'designs') {
      setMainText('Дизайнерские кухни');
      setLimit(7)
    } else if (type === 'sovrkuhni') {
      setMainText('Современные кухни');
      setLimit(20)
    }
  };

  useEffect(() => {
    defineMainText();

    // Dynamically import the image
    
  });
  
    return (
        <div className={s.container}>
        <div className={s.mainText}>
          <h1>{mainText}</h1>
          <p>Проектируем и изготавливаем современные кухни из массива и МДФ. Линейка фасадов и возможность производства фасада по вашему дизайну.</p>
        </div>
  
        {mainText ? (
          <div className={s.designKitchens}>
            <Prewie type={mainText} letter={mainText[0].toLowerCase()} limit={limit} isParent={false}/>
          </div>
        ) : null}
      </div>
    );
}

export default KitchensTypePage
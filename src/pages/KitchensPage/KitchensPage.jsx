import React, { useEffect, useState, Suspense } from 'react';
import s from './Kitchen.module.sass';
import { useParams } from 'react-router-dom';
import Prewie from '../../components/prewie/Prewie';

import { useNavigate } from "react-router-dom";

function KitchensPage() {
  const navigate = useNavigate()

  return (
    <div className={s.container}>
      <div className={s.mainText}>
        <h1>Кухни</h1>
      </div>
      <div className={s.anotherBlocks}>
        <div className={s.anotherBlock} onClick={() => navigate('/kitchens/sovrkuhni')}>
          <img src="https://fason-kuhni.ru/wp-content/uploads/2021/03/moderna-min-600x600.jpg" alt="" />
          <h1>Современные кухни</h1>
        </div>
        <div className={s.anotherBlock} onClick={() => navigate('/kitchens/classic')}>
          <img src="https://fason-kuhni.ru/wp-content/uploads/2021/02/classic-min-600x600.jpg" alt="" />
          <h1>Неоклассические кухни</h1>
        </div>
        <div className={s.anotherBlock} onClick={() => navigate('/kitchens/designs')}>
          <img src="https://fason-kuhni.ru/wp-content/uploads/2021/02/designed-min-600x600.jpg" alt="" />
          <h1>Дизайнерские кухни</h1>
        </div>
      </div>
      <div> 
        <div className={s.blocks}>
          <Prewie type={"Дизайнерские кухни"} letter={"д"} limit={7} isParent={true}/>
          <Prewie type={"Неоклассические кухни"} letter={"н"} limit={5} isParent={true} />
          <Prewie type={"Современные кухни"} letter={"с"} limit={20} isParent={true} />
        </div>
      </div>
    </div>
  );
}

export default KitchensPage;

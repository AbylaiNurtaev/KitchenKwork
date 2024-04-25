import React from 'react';
import Slider from '../../components/slider/Slider';
import s from './PortfolioPage.module.sass';


function PortfolioPage() {
  let par =
    'Элегантное и изысканное решение для любителей сдержанной роскоши. Такая кухня сочетает в себе черты классики и современности, создавая атмосферу уюта и комфорта. Белый цвет придает кухне светлость и простор, а рамочный фасад добавляет благородства и изящества. Белая кухня в неоклассическом стиле может быть дополнена другими пастельными или глубокими оттенками, которые внесут яркость и контраст в интерьер.';

  let data = {
    montaj_1: {
      'Адыгея': { titleText: 'Metida', parText: par },
      'Алина Балашиха': { titleText: 'Metida', parText: par },
      'Алина мытищи': { titleText: 'Metida', parText: par },
      'Архитектор Света': { titleText: 'Metida', parText: par },
      'Белая - Сваровски': { titleText: 'Metida', parText: par },
      'Грета': { titleText: 'Morotiema', parText: par },
      'Дембель': { titleText: 'Morotiema', parText: par },
      'денис_ольга': { titleText: 'Morotiema', parText: par },
      'Елена Анатольевна': { titleText: 'Morotiema', parText: par },
      'Зеленая': { titleText: 'Morotiema', parText: par },
      'Инфинити золото': { titleText: 'Morotiema', parText: par },
      'лазаревка': { titleText: 'Morotiema', parText: par },
      'Лена Королев': { titleText: 'Morotiema', parText: par },
      'Лорена': { titleText: 'Morotiema', parText: par },
      'Михаил': { titleText: 'Morotiema', parText: par },
      'Миша борода': { titleText: 'Morotiema', parText: par },
      'моя сестра': { titleText: 'Morotiema', parText: par },
      'Мытищи': { titleText: 'Morotiema', parText: par },
      'на гоголя': { titleText: 'Morotiema', parText: par },
      'Новые черемушки': { titleText: 'Morotiema', parText: par },
      'одинцово Лилия': { titleText: 'Morotiema', parText: par },
      'орест': { titleText: 'Morotiema', parText: par },
      'Румянцево Ольга': { titleText: 'Morotiema', parText: par },
      'с Витей': { titleText: 'Morotiema', parText: par },
    },
    montaj_2: {
    }
  };

  let combinedData = { ...data.montaj_1, ...data.montaj_2 };
  return (
    <div className={s.container}>
      {Object.keys(combinedData).map((elem, index) => (
        <Slider
          key={index}
          data={{
            type: combinedData[elem].type,
            name: elem,
            titleText: combinedData[elem].titleText,
            parText: combinedData[elem].parText
          }}
        />
      ))}
    </div>
  );
}

export default PortfolioPage;

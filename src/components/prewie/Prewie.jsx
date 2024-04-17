import { React, Suspense, useEffect, useState } from 'react';
import s from './prewie.module.sass';
import { useNavigate } from 'react-router-dom';

function Prewie({ type, letter, limit, isParent}) {
  const [prew, setPrew] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate()
  useEffect(() => {
    setPrew([])
    for (let i = 1; i <= limit; i++) {
      import(`../../images/кухни/${type}/${i}-${letter}/prew.jpg`)
        .then((image) => {
          setPrew((prev) => [...prev, { image: image.default, name: i + `-${letter}` }]);
        })
    }
  }, [type]);

  return (
    <div className={s.container}>
      {
        isParent ? <h1>{type}</h1> : null
      }
      <div className={s.blocks}>
        {prew.length > 0 ? (
          prew.map((elem, index) => (
            <div key={index} className={s.block} onClick={() => { navigate(`/kitchens/${type.split(' ')[0]}/${elem.name}`) }}>
              <img className={s.image} key={index} src={elem.image} alt={`Kitchen ${index + 1}`} />
              <h3 className={s.name}>{elem.name}</h3>
            </div>
          ))
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <div>Loading...</div>
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default Prewie;

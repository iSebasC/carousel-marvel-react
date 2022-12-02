import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      id: '1',
      imagen:
        'https://i.annihil.us/u/prod/marvel/i/mg/5/04/5d5d4cbf869ff/clean.jpg',
    },
    {
      id: '2',
      imagen:
        'https://lumiere-a.akamaihd.net/v1/images/maractsminf001_cov_2a89b17b.jpeg?region=0%2C0%2C1844%2C2800',
    },
    {
      id: '3',
      imagen:
        'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/12/Estas-son-las-historietas-de-DC-Comics-que-mas-esperamos-este-2022-compressed.jpg?resize=1280%2C1944&quality=80&ssl=1',
    },
  ];

  const mod = (n, m) => {
    let result = n % m;
    //Devolver un valor positivo
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
    }, 3000);
  }, [index]);

  return (
    <div className="App">
      <div className="carousel">
        {cards.map((item, i) => {
          const indexleft = mod(index - 1, cards.length);
          const indexright = mod(index + 1, cards.length);

          let className = '';

          if (i === index) {
            className = 'card card--active';
          } else if (i === indexright) {
            className = 'card card--right';
          } else if (i === indexleft) {
            className = 'card card--left';
          }

          return (
            <img
              key={item.id}
              src={item.imagen}
              alt="Comic"
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Jokes.css';

const JokesPage = ({ onBack }) => {
  const [currentJoke, setCurrentJoke] = useState({});
  const [usedJokes, setUsedJokes] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [showPunchline, setShowPunchline] = useState(false);

useEffect(() => {
  setJokes([
    {
      id: 1,
      label: "¿Cómo conviertes a un cocodrilo en una burra?",
      punchline: "Lo encierras en una jaula hasta que se aburra."
    },
    {
      id: 2,
      label: "¿Dónde bailan los ciegos?",
      punchline: "En la pista de braile"
    },
    {
        id: 3,
        label: "Hubo un accidente de cereales",
        punchline: "Choco Crispy y se lasitmo Zu Carita"
    },
    {
        id: 4,
        label: "¿Por qué los mariscos vienen del mar?",
        punchline: "Por que si vinieran de Francia serían franciscos"
    },
    {
        id: 5,
        label: "¿Cómo se inventó el chorizo?",
        punchline: "Un señor cortó su pantalon y short-hizo"
    },
    {
        id: 6,
        label: "¿Cómo se inventó el chorizo?",
        punchline: "Un señor cortó su pantalon y un short-hizo"
    },
    {
        id: 7,
        label: "¿Qué hace una abeja en el gimnasio?",
        punchline: "Zumbaaa jajaja"
    },
    {
        id: 7,
        label: "¿Qué hace una abeja en el gimnasio?",
        punchline: "Zumbaaa jajaja"
    },
    {
        id: 8,
        label: "¿Con qué sacan fotos los peces?",
        punchline: "Con un camaron"
    },    
    {
        id: 9,
        label: "Una vez un señor se compro una moto honda",
        punchline: "Se subió y se ahogó por que era onda"
    },
    {
        id: 10,
        label: "¿Te sabes el chiste del pocoyo?",
        punchline: "Tampocoyo"
    },
    {
        id: 11,
        label: "¿De que´se murió Jack Sparrow?",
        punchline: "De un disparrow"
    },
    {
        id: 12,
        label: "¿Cuál es el unico número que no se vende?",
        punchline: "El noventa JAJAJJA"
    },
    {
        id: 13,
        label: "Le dijeron un monton de veces que no jugara a la ruleta rusa",
        punchline: "Pero le entro por un oido y le salió por el otro"
    },
    {
        id: 14,
        label: "¿Cómo va Batman a su funeral?",
        punchline: "Batieso"
    },
    {
        id: 15,
        label: "Si los zombies entran a tu casa",
        punchline: "¿Zombienvenidos?"
    },
    {
        id: 16,
        label: "¿Qué es verde y rápido?",
        punchline: "Una lechuga en moto"
    },
    {
        id: 17,
        label: "Jesucristo cuenta un chiste y todos se rien",
        punchline: "Por la gracia del señor"
    },
    {
        id: 18,
        label: "¿Cuál es la diferencia entre el amor y el sida?",
        punchline: "Que el sida es para toda la vida ;("
    },
    {
        id: 18,
        label: "¿Cuál es la diferencia entre el amor y el sida?",
        punchline: "Que el sida es para toda la vida ;("
    },
    {
        id: 19,
        label: "Había una vez una olla que no quería ser olla",
        punchline: "Entonces fue olla a presión"
    },
    {
        id: 20,
        label: "¿Cómo se dice veterinario en ingles?",
        punchline: "Dogtor"
    },
    {
        id: 21,
        label: "Mi PC pesa doce kilos, ¿Cómo lo sabes?",
        punchline: "Por que la pc"
    },
    {
        id: 22,
        label: "¿Qué hace un taco en una cama?",
        punchline: "Tacostao"
    },
    {
        id: 23,
        label: "Si dos zombies cuentan chistes",
        punchline: "¿Zombienchistosos?"
    },
    {
        id: 24,
        label: "¿Cuál es la diferencia entre un terremoto y un volcan?",
        punchline: "Que el terremoto ensucia y el volcan lava"
    },
    {
        id: 25,
        label: "¿Por qué el caracol fue a la biblioteca?",
        punchline: "Por que esta baboso"
    },
    {
        id: 26,
        label: "¿Cuál es el dulce favorito de los curas?",
        punchline: "Los huevitos del kinder"
    },
    {
        id: 27,
        label: "¿Qué le regalaron a una niña sin brazos?",
        punchline: "No sé, no ha podido abrirlo"
    },
    {
        id: 28,
        label: "¿Qué es una caja que va al gimnasio?",
        punchline: "Una caja fuerte"
    },
    {
        id: 29,
        label: "Intenete conquistar a una programadora",
        punchline: "Pero no se deJava"
    },
    {
        id: 30,
        label: "¿Cuál es el unico pan que se lava?",
        punchline: "El pantalon"
    },
    {
        id: 31,
        label: "¿Doctor, doctor tengo el cuerpo lleno de pelos, que padezco?",
        punchline: "Padece usted un osito"
    },
    {
        id: 32,
        label: "¿Cuál es el corte de pelo mas caro?",
        punchline: "La quimioterapia"
    },
    {
        id: 33,
        label: "¿Por qué el niño del Teleton siempre esta feliz?",
        punchline: "Porque su vida va sobre ruedas"
    },
    {
        id: 34,
        label: "¿En qué se parece un niño pobre a un aguacate?",
        punchline: "En que ambos maduran envueltos en periodico"
    },
    {
        id: 35,
        label: "¿Por qué el papa Juan Pablo murió con la boca abierta?",
        punchline: "Porque estaba esperando la venida del señor"
    },
    {
        id: 36,
        label: "¿Por qué una niña murió de camino al cine?",
        punchline: "Porque no vió el trailer"
    },
    {
        id: 37,
        label: "¿Cuál es la fruta mas graciosa?",
        punchline: "La naranjajaja"
    },
    {
        id: 38,
        label: "Una vez le tome una foto a los niños del teleton",
        punchline: "Pero creo que me salió incompleta JAJAJJAJA"
    },
    {
        id: 39,
        label: "¿Qué hace una vaca en el escenario?",
        punchline: "Vacantar"
    },
    {
        id: 40,
        label: "¿Qué tienen en común Miguel Ángel y Kurt Cobain? ",
        punchline: "Que los dos usaros sus cerebros para pintar el techo"
    },
    {
        id: 41,
        label: "¿Cuál es la planta que da miedo? ",
        punchline: "El bamBU"
    },
    {
        id: 42,
        label: "¿Por qué hablas con ese zapato? ",
        punchline: "Porque dice converse"
    },
    {
        id: 43,
        label: "¿Cómo termina un mago despues de comer? ",
        punchline: "Magordito"
    },
    {
        id: 44,
        label: "¿Por qué no se puede engañar a un bebe abortado?",
        punchline: "Porque no nació ayer"
    },
    {
        id: 45,
        label: "¿En qué se parece una iglesia abandonada a un niño con cancer?",
        punchline: "En que ninguno tiene cura"
    },
    {
        id: 46,
        label: "¿Qué le dijo un pollo policia a otro pollo policia?",
        punchline: "Necesitamos apoyo"
    },
]);
}, []);

useEffect(() => {
    handleNewJokeClick();
  }, [jokes]);

  const getRandomJoke = () => {
    const availableJokes = jokes.filter(joke => !usedJokes.includes(joke.id));
    if (availableJokes.length === 0) {
      setUsedJokes([]);
      return jokes[0]; 
    }
    const randomIndex = Math.floor(Math.random() * availableJokes.length);
    return availableJokes[randomIndex];
  };

  const handleNewJokeClick = () => {
    const joke = getRandomJoke();
    if (joke) {
      setCurrentJoke(joke);
      setShowPunchline(false);
      setUsedJokes(prevUsedJokes => [...prevUsedJokes, joke.id]); 
    } else {
      console.log("No hay más chistes disponibles");
    }
  };
  

  const handlePunchlineClick = () => {
    setShowPunchline(true);
  };

  return (
    <div className="container">
      <h1 className="title">
         ¡Ahí te va un chiste!
      </h1>
      <div className="joke-container">
        {currentJoke && (
          <div>
            <p className="joke">{currentJoke.label}</p>
            {!showPunchline && <button className="punchline-button" onClick={handlePunchlineClick}>Punchline</button>}
            {showPunchline && (
              <div>
                <p className="joke">{currentJoke.punchline}</p>
                <button className="new-joke-button" onClick={handleNewJokeClick}>Nuevo chiste</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JokesPage;
import React, {useEffect, useState} from 'react';

import Hero from "./components/Hero";
import Marvel from "./components/Marvel";
import GetList from "./components/GetList";

import {MarvelList} from "./initData/Marveldata";
import {DCList} from "./initData/DCdata";

import {getPhotos} from "./api/getPhotos";

import './App.css';

function App() {
    const [heroes, setHeroes] = useState({marvel: [{}], dc: [{}]});

 const initHeroes =  async () => {
    const infoPhotos = await getPhotos();

     setHeroes({
         dc: DCList.map((dcHero, i)  =>
             new Hero(
                 dcHero.name,
                 dcHero.description,
                 infoPhotos[i + MarvelList.length].urls.small,
             )),
         marvel: MarvelList.map((hero, index)  =>
            new Marvel(
                hero.name,
                hero.description,
                infoPhotos[index].urls.small,
             )),
         });
  }

   useEffect( () => {
     initHeroes()
         .catch(()=>{
         console.log('Error')
     })
   },[]);


    return (
      <div className="App">
          <GetList title="DC" list={heroes.dc}/>
          <GetList title="Marvel" list={heroes.marvel} />

    </div>
  );
}

export default App;

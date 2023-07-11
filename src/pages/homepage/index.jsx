import React, { useEffect, useState } from 'react';
import { getHomePage } from '../../api';
import { Preloader } from '../../components/Preloader';
import './style.css'
function Home(){
  const [homePage, setHomePage] = useState({});
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    getHomePage().then((data) => {
        setHomePage(JSON.parse(data[0].homepage));
        // console.log(JSON.parse(data[0].homepage))

        
        setLoading(false);
    });
}, []);

return (
  <main className='container'>
  {loading ? <Preloader /> : homePage.headerBotm.menu.map((el, indx) => {
    return <p key={indx}>{el}</p>
  })

  }
</main>
)
}
export {Home}
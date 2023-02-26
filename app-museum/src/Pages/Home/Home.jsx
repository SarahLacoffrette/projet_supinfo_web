import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Navigation from '../../Components/Navigation/Navigation';
import Loading from '../Loading/Loading';
import { useState } from 'react';
import './Home.css';

const Home = () =>{

    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&q=middle%20ages';
    const [show, setShow] = useState(false);

    setTimeout(() => {
        setShow(true);
      }, 2000);

    return(
        <div>
            <Header/>
            <div style={{display: show ? 'none' : 'block'}}>
                    <Loading/>
            </div>
            <div style={{display: show ? 'block' : 'none'}}>
                <div>
                    <h2>Bienvenue sur le site du musée SupKnowledge</h2>
                    <video id="background-video" autoPlay loop muted src="https://api-www.louvre.fr/sites/default/files/videos/video_1_1_2560/video.mp4"/>
                    <div className="button_more">
                        <Button url="a_propos" name="En savoir plus"/>
                    </div>
                </div>
                <section className="footer">
                    <Navigation url={url} title="Quelques oeuvres"/>
                </section>
            </div>
            
           
        </div>
    )
}

export default Home;
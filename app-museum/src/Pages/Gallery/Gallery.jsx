import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";
import Loading from '../Loading/Loading';
import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const url_A = 'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&q=castle';
    const url_B = 'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=10&q=mummy';
    const url_C = 'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=17&q=sculpturing';
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
                <div className="banner_gallery">
                    <h4 className="title_section">NOTRE SÉLÉCTION DE NOTRE GALERIE DU MUSÉE DU SUPKNOWLEDGE</h4>
                </div>
                <div className="section_gallery">
                    <section className="container_nav">
                        <Navigation url={url_A} title="Peintures de chateaux"/>
                    </section>
                    <section className="container_nav">
                        <Navigation url={url_B} title="Momies d'Egypte"/>
                    </section>
                    <section className="container_nav">
                        <Navigation url={url_C} title="Sculptures anciennes"/>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
import Header from "../../Components/Header/Header";
import './About.css';

const About = () => {

    return(
        <div>
            <Header/>
            <div className="banner">
                <h4 className="title_section">L'ÉTABLISSEMENT PUBLIC DU MUSÉE DU SUPKNOWLEDGE</h4>
            </div>
            <div className="container_about">
                <div className="container_about_left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Statue-2925351.png" alt="image_musee"
                    height="600"
                    width="450"/>
                </div>
                <div className="container_about_right">
                    <h4 className="title_about">Notre mission </h4>
                    <hr/>
                    <p className="text_about">
                    Bienvenue au musée SupKnowledge !<br/>
                    <br/>
                    Notre musée est un lieu fascinant où vous pouvez explorer l'histoire, l'art et la culture d'une manière unique. Nous avons une collection variée d'objets et d'œuvres d'art qui racontent l'histoire de notre monde, depuis l'Antiquité jusqu'à nos jours. Notre musée est un endroit idéal pour tous les amateurs d'art, d'histoire, de culture et de savoir.<br/>
                    <br/>
                    Notre collection est organisée en plusieurs expositions, chacune avec un thème différent. Nous avons des expositions permanentes, qui sont constamment mises à jour et enrichies, ainsi que des expositions temporaires, qui sont souvent des collaborations avec d'autres musées et institutions culturelles. Nous organisons également des événements spéciaux, des conférences, des ateliers et des visites guidées pour les visiteurs de tous les âges.<br/>
                    <br/>
                    Notre personnel amical et compétent se fera un plaisir de répondre à toutes vos questions et de vous guider tout au long de votre visite. Nous sommes également heureux de fournir des informations sur nos expositions et nos événements à venir.<br/>
                    <br/>
                    Nous espérons que votre visite au musée SupKnowledge sera une expérience inoubliable et que vous repartirez avec une nouvelle appréciation pour l'histoire, l'art et la culture.<br/>
                    <br/>
                    Merci de votre visite !<br/>
                    </p>
                </div>
            </div>
            <br/> 
        </div>
    )
}

export default About;


import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import '../Home/Home.css';

const NoFound = () =>{
  return(
        <div>
            <Header/>
            <div>
                <div>
                    <h2>Oups ! Cette page est introuvable</h2>
                    <video id="background-video" autoPlay loop muted src="https://api-www.louvre.fr/sites/default/files/videos/video_1_1_2560/video.mp4"/>
                    <div className="button_more">
                        <Button url="" name="Retour"/>
                    </div>
                </div>          
            </div>          
        </div>
    )
}

export default NoFound;
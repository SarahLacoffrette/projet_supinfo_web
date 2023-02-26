import { useEffect, useState } from 'react';
import '../Navigation/Navigation.css';

const Artwork = (props) => {
    var [artwork, setData] = useState("data");
    const [state, setState] = useState(false); 
    var [dataArtist, setDataArtist] = useState("data");   

    useEffect(() => {
        if(props.state){
            searchArtwork(props.url);
        }
    });
    
    async function searchArtwork(props){
        try{
            var item;
            await fetch(props)
                .then(reponse => reponse.json())
                .then(data => item = data)
                .then(() => setData(item))
                .then(() => artwork = item);
            setState(true);
            convertArtistName();
            return("done")
        }catch(e){
            return("erreur");
        }
        
    }

    function display(item){
        //console.log(item);
        try {
            var result = JSON.parse(JSON.stringify(item));
            if(result === ""){
                result = "---"
            }
            return(result);
          } catch (err) {
            console.log('Error: ', err.message);
          }  
    }

    function displayImage(item){    
        try {
            var result = JSON.parse(JSON.stringify(item));
            if(result === ""){
                result = "https://img.freepik.com/vecteurs-premium/vecteur-icone-image-par-defaut-page-image-manquante-pour-conception-site-web-application-mobile-aucune-photo-disponible_87543-11093.jpg"
            }
            return(result);
            } catch (err) {
            console.log('Error: ', err.message);
            }  
    }

    function active(e, value){
        e.preventDefault();
        window.location.href = "/details?objectId=" + display(artwork.objectID) + "&artist=" + dataArtist;
    }

    function convertArtistName(){
        const name = artwork.artistDisplayName;
       try{
            if(typeof name === "string"){
                let rename = name;
                rename = rename.replace(" ", "%20");
                rename = rename.replace(" ", "%20");
                setDataArtist(rename);
            }else{
                console.log("error");
            }
       }catch (err) {
        console.log('Error: ', err.message);
      }
    }

    if(state){
        return(
            <div className="section_art" onClick={active} id={dataArtist}>
                <div><img src={displayImage(artwork.primaryImage)}
                alt={display(artwork.title)} className="image_art" id={display(artwork.objectID)}/></div>
                <div className="artwork"><span className="smallArtTitle">{display(artwork.title)}</span></div>
            </div>
        )
    } 
   
    
}

export default Artwork;
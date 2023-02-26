import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import './Annexe.css';
import Header from '../../Components/Header/Header';

const Annexe = () =>{

    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
    var listDatas;
    var listObjectIDs;
    var listUrls;
    //var show = false; 

    const [show, setShow] = useState(false);
    var [data, setData] = useState("data");

    useEffect(() => {
        console.log('Premier rendering !');
        fetch(url)
            .then(response => response.json())
            .then(data => {listDatas = data})
            .then(() => searchObjectIDs());
            //.then(data => console.log(data.objectIDs));
        //console.log(listObjectIDs);

      }, []);

    function searchObjectIDs(){
        listObjectIDs = listDatas.objectIDs;
        console.log(listObjectIDs);
        constructDatabase();
    }

    function constructDatabase(){
        listUrls = listObjectIDs.map(value => url + '/' + value);
        test(listUrls);
        searchArtwork(listUrls[12]);
    }

    function test(item){
        for(let i = 0; i < 10; i++){
            console.log(item[i]);
        }
        
    }

    async function searchArtwork(props){
        var item;
        await fetch(props)
            .then(reponse => reponse.json())
            .then(data => item = data)
            .then(() => setData(item))
            .then(() => console.log(item))
            .then(() => data = item)
        setShow(true)   
    }

    function display(item){
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

    return(
        <div>
            <Header/>
            <div>
                <div style={{display: show ? 'none' : 'block'}}>
                    <Loading/>
                </div>
                <div id="result" style={{display: show ? 'block' : 'none'}}>
                    <div className="container">
                        <div className="container_image"><img src={displayImage(data.primaryImage)}
                            alt={display(data.title)}
                            height="400"
                            width="500"/>
                        </div>
                        <div className="container_details">
                            <h3>{display(data.title)}</h3><br/>
                            <span className="label"><b>Date :</b> {display(data.objectDate)}</span><br/>
                            <span className="label"><b>Dimension :</b> {display(data.dimensions)}</span><br/>
                            <span className="label"><b>Géogrpahie :</b> {display(data.state)}</span><br/>
                            <span className="label"><b>Musée : </b>{display(data.repository)}</span><br/>
                            <span className="label"><b>Artiste :</b> {display(data.artistDisplayName)}<br/>
                            {display(data.artistDisplayBio)}<br/>
                            </span>
                            <span className="label"><b>Culture :</b> {display(data.culture)}</span><br/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Annexe;
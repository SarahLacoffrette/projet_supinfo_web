import './Navigation.css';
import { useEffect, useState } from "react";
import Artwork from '../Artwork/Artwork';

const Navigation = (props) => {

    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
    const url_department = props.url;
    var listDatas;
    var listObjectIDs;
    const [show, setShow] = useState(false);
    var [data, setData] = useState([]);
    
  
    useEffect(() => {
        console.log('Premier rendering !');
        fetch(url_department)
            .then(response => response.json())
            .then(item => {listDatas = item})
            .then(() => searchObjectIDs());
      }, []);

    function searchObjectIDs(){
        listObjectIDs = listDatas.objectIDs;
        constructDatabase();
    }

    function constructDatabase(){
        const allListUrls = listObjectIDs.map(value => url + '/' + value);
        sortListUrl(allListUrls);
    }

    function sortListUrl(item){
        for(let i = 0; i < 10; i++){
           setData(current => [...current, item[i]]);
        }  
        setShow(true);
    }

    return(
        <div> 
            <span className="text_section_art">{props.title} :</span>
                <div className="nav_artwork">
                    {data.map(url => {
                        return <Artwork url={url} state={show}/>;
                    })}
                </div>
        </div>
    )
}

export default Navigation;
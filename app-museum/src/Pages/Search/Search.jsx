import './Search.css';
import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";
import { useState, useEffect } from 'react';

const Search = () => {

    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';
    var listDatas;
    var [listDepartments, setListDepartments] = useState([]);
    var [department, setDepartment] = useState("");
    var [displayName, setDisplayName] = useState("");

    useEffect(() => {
        console.log('Premier rendering !');
        fetch(url)
            .then(response => response.json())
            .then(item => {listDatas = item})
            .then(() => searchDepartments());
      }, []);

    function searchDepartments(){
        setListDepartments(listDatas.departments);
        listDepartments = listDatas.departments;        
    }

    function getValue(e) {
        e.preventDefault();
        department = document.getElementById("department-select").value;
        displayName = document.getElementById("searchBar").value;
        setDepartment(document.getElementById("department-select").value);
        setDisplayName(document.getElementById("searchBar").value);
        window.location.href = "/search?department=" + department + "&q=" + displayName;
    }

    const queryParameters = new URLSearchParams(window.location.search);
    const queryDepartment = queryParameters.get("department");
    const queryText = queryParameters.get("q");

    return(
        <div>
            <Header/>
            <div className='container_search' >
                <div className="banner_gallery">
                    <h4 className="title_section">NOTRE GALERIE DU MUSÉE DU SUPKNOWLEDGE</h4>
                </div>
                <div className="wrap">
                    
                    <select className='department-select' name="department" id="department-select">
                        <option value="">--Choisir un type--</option>
                        {listDepartments.map(value => {
                            return(<option value={value.departmentId}>{value.displayName}</option>)
                        }
                        )}
                    </select>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <div className="search">
                        <form className="search" onSubmit={getValue}>
                            <input type="text" id="searchBar" className="searchTerm" placeholder="What are you looking for?"/>
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search" ><span className="material-symbols-outlined">search</span></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div id="resultSearch">
                    <Navigation url={"https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=" + queryDepartment + "&q=" + queryText} title="Résultat des recherches "/>;
                </div>
            </div>   
        </div>
    )
}

export default Search;
import './Header.css';

const Header = () =>{
    return(
        <div>
            <navbar class="menu">
                <div>
                    <h1 className="title_website">Musée SupKnowledge</h1>
                </div> 
                <div id="nav">
                    <ul>
                        <li class="btn"><a class="active" href="/">Home</a></li>
                        <li class="btn"><a href="/a_propos">A propos</a></li>
                        <li class="btn"><a href="/galerie">Galerie</a></li>
                        <li class="btn"><a href="/search">Rechercher</a></li>
                        <li class="btn"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </navbar>
        </div>
    )
}

export default Header;
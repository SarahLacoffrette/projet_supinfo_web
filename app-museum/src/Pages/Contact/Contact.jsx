import Header from "../../Components/Header/Header";
import './Contact.css';

const Contact = () => {

    return(
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <Header/>
            <div className="container_contact">
                <div className="container_form_left">
                    <form>
                        <input className="shield" type="text" id="name" name="name" value="Name"/><br/>
                        <input className="shield" type="text" id="email" name="email" value="Email"/><br/>
                        <textarea className="shield shield_message" type="text" id="message" name="message" value="Message"/><br/>
                        <input type="submit" id="submit" className="submit_form" name="submit" value="Send"/><br/>
                    </form>
                </div>
                <div className="container_information_right">
                    <hr/>
                    <p className="text_contact">
                        <span class="material-symbols-outlined icon_contact">distance</span>
                        City, State</p>
                    <p className="text_contact">  
                        <span class="material-symbols-outlined icon_contact">call</span>
                        +33 0 00 00 00 00</p>
                    <p className="text_contact">
                        <span class="material-symbols-outlined icon_contact">mail</span>
                        mail@gmail.com</p>
                    <hr/>
                </div>
            </div>
            

        </div>
    )
}

export default Contact;
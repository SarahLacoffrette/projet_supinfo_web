import './Button.css';

const Button = (props) => {
    const url = "http://localhost:3000/" + props.url;
    return(
        <a class="bn31" href={url}><span class="bn31span">{props.name}</span></a>
    )
}

export default Button;
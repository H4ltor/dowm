// import Cards from "../Components/Cards";
import './Valeurs.css';
import Cards from "../Components/Cards";
export default function Valeurs()
{
    return(

        <div>
            <div className="container">
                <h1 className="title">Mon Titre</h1>
                <div className="content">
                    <p>Mon texte ici</p>
                    <img src="chemin/vers/mon/image.jpg" alt="Mon image" />
                </div>
            </div>
            {/*<Cards/>*/}
        </div>
    )
}
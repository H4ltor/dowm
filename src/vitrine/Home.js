import Cards from "../Components/Cards";
import logo from '../../../dowm/src/assets/logo.png';
export default function Home() {
    return(
        <div>
            <video controls width="100%" style={{padding: "24px", marginTop: "90px"}}>
                <source src="chemin/vers/la/video.mp4" type="video/mp4" />
            </video>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ margin: '0', padding: "120px" }}>
                        Bienvenue chez Dynasty Of Wo/men, une marque de vêtements créée à Toulouse et fondée par Emeraude, une créatrice passionnée ! Notre marque est plus qu'un simple label de mode - nous sommes un mouvement, un engagement et un mode de vie.

                    Merci de votre visite sur notre site web. Nous avons hâte de vous voir porter nos vêtements et de faire partie de notre mouvement !</p>
            </div>
            <div className="container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <p style={{ margin: '0' }}>Nous croyons en l'inclusivité, la multi-culturalité, la transparence et l'humanité. Ces valeurs sont profondément enracinées dans notre ADN, et se reflètent dans chaque produit que nous proposons. Nous sommes fiers de lutter contre l'appropriation culturelle en mettant en avant l’appréciation culturelle et de sensibiliser les consciences sur l'importance de prendre en compte et d'accepter les cultures des personnes qui nous entourent. Nous croyons que la mode peut être un outil puissant pour célébrer ces cultures et promouvoir l'échange interculturel.

                        Notre première collection mettra en avant un pays d'Asie que nous aimons et respectons profondément. Nous sommes impatients de vous présenter nos créations, qui célèbrent la beauté et la richesse de cette culture unique.

                        Chez Dynasty Of Wo/men, nous croyons que chaque T-shirt peut raconter une histoire. Nous espérons que nos produits vous inspireront et vous permettront de raconter votre propre histoire - une histoire qui célèbre l'unicité de chaque individu et la richesse de chaque culture.</p>
                </div>
                <div style={{ marginRight: '1rem' }}>
                    <img
                        src={logo} // Remplacez par l'URL de votre photo
                        alt="Example" // Remplacez par une description appropriée de la photo
                        style={{ width: "329px", height: '379px', padding: "12px" }} // Remplacez les valeurs de largeur, hauteur et bordure selon vos besoins
                    />
                </div>
            </div>
        </div>
        </div>
    )
}
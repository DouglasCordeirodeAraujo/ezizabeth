import React from "react";
import logoFacepe from "/src/assets/FACEPE.png";
import Img from "/src/assets/governo-de-pernambuco.png";
import logoSect from "/src/assets/logo-sect.png";
import logoInova from "/src/assets/logo-inovagil.png";
import logoEte from "/src/assets/logo-ETE.png";
import '/src/Footer.css';

function Footer(){
    return(
        <>
        <footer className="rodape">
            <img className="img_Pe" src={Img} alt="Governo do estado de pernambuco" />
                <img className="img_Facepe" src={logoFacepe} alt="Logo Facepe" />
                <img className="img_Sect" src={logoSect} alt="secretaria de ciencia de tecnologia" />
                <img className="img_Ete" src={logoEte} alt="ETE - Advogado José David Gil Rodrigues" />
                <div className="img_Inova">
                <img src={logoInova} alt="Logo InovaGil" />
                <p>INOVAGIL</p>
                </div>
        </footer>
        </>
    )
}

export default Footer;
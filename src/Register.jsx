import React from "react";
import '/src/Register.css'

function Register(){
    return(
        <>
        <div className="contener">
            <form className="formulario">
                <h1>Cadastre-se</h1>
                <div className="formulario-conteudo">
                    <label>e-mail:</label>
                    <input type="Text" />
                    <label >senha:</label>
                    <input type='password' />
                </div>
                <button>Cadastrar</button>
            </form>
        </div>
        </>
    )
}

export default Register;
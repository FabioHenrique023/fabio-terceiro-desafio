import './login.css';
import LogoCompasso from "../imagens/compasso.svg";

function Login(){
    return (
        <div className='container'>
            <div className='login-welcome'>
                    <h1 className='welcome'>Welcome,</h1>
                    <p className='paragrafo-login'>
                    To continue browsing safely, log in to the network.
                    </p> 
                    <p className='login'>
                    Login
                    </p> 
            </div>
            <div className='logo'>
                <img src={LogoCompasso} alt="Imagem compasso" id='logo-compasso'/>
            </div>
        </div>
    )
}

export default Login;
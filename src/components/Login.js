import './login.css';
import LogoCompasso from "../imagens/compasso.svg";
import PassIcon from "../imagens/pass-icone.svg";
import UserIcon from "../imagens/user-icone.png";

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
                    <form>
                        <grid container spacing={2}>
                            <grid item xs={6} md={12}>
                                <input type="text" name="email" placeholder='your e-mail'/>
                                <img src={UserIcon} id='icon-user'/>
                            </grid>
                            <grid item xs={6} md={12}>
                                <input type="password" name="password" placeholder='password'/>
                                <img src={PassIcon}/>
                            </grid>
                        </grid>
                        <input type="submit" value="Log in" className='btn-submit'/>
                    </form>
            </div>
            <div className='logo'>
                <img src={LogoCompasso} alt="Imagem compasso" id='logo-compasso'/>
            </div>
        </div>
    )
}

export default Login;
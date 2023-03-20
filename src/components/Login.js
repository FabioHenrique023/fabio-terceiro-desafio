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
                    <form>
                        <grid container spacing={2}>
                            <div>
                                <input type="email" name="email" placeholder='your e-mail' className='email'/>
                            </div>
                            <div>
                                <input type="password" name="password" placeholder='password' className='senha'/>
                            </div>
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
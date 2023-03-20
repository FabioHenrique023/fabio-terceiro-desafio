import './register.css';
import LogoCompasso from "../imagens/compasso.svg";

function Register(){
    return (
        <div className='container'>
            <div className='register-welcome'>
                    <h1 className='welcome'>Welcome,</h1>
                    <p className='paragrafo-register'>
                    Please, register to continue.
                    </p> 
                    <form>
                        <grid container spacing={12}>
                        <div>
                            <input type="text" name="name" placeholder='Your first name' />
                            <input type="text" name="sobrenome" placeholder='Your last name' />
                            <input type="date" name="data" placeholder='MM/DD/YYYY' />
                            <input type="country" name="country" placeholder='Your Country' />
                            <input type="city" name="city" placeholder='Your City' />
                            <input type="email" name="email" placeholder='A valid e-mail here' />
                            <input type="password" name="password" placeholder='password'/>
                            <input type="password" name="confirme-pass" placeholder='Confirm your password'/>
                        </div>
                        </grid>
                        <input type="submit" value="Register Now" className='btn-submit'/>
                    </form>
            </div>
            <div className='logo'>
                <img src={LogoCompasso} alt="Imagem compasso" id='logo-compasso'/>
            </div>
        </div>
    )
}

export default Register;
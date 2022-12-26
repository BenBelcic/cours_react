import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    return <div className='lmj-banner'>
        <img src={logo} alt='la maison jungle' className='lmj-logo' />
                <h1>La maison jungle</h1>
           </div>
}

export default Banner
import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {

    const [inputValue, setInputValue] = useState('')

    // la value est la value de l'événement de l'input
    function handleInput(e) {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    // si quand on clic a coté, la value de l'input n'inclue pas de @, alors alert
    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    // le footer aura 2 phrases et l'input le placeholder, son event onChange renverra la fonction handleInput qui récupérera sa value, l'event onBlur renverra la fonction handleBlur 
    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>

            <input
                placeholder='Entrez votre mail ici'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />

        </footer>
    )
}

export default Footer
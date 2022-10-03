import './style.scss'

function TextInput(props ) {
    return (
        <div className="campo-texto">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder='Digite o seu nome' />
        </div>
    )
}

export default TextInput
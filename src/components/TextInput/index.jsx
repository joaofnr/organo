import './style.scss'

function TextInput(props) {

   return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                type="text" 
                required={props.required}
                placeholder={props.placeholder} 
                value={props.value}
                onChange={e => props.handleChange(e.target.value)}
                />
        </div>
    )
}

export default TextInput
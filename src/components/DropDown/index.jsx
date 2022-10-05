import './style.scss'

function DropDown(props) {
    return (
        <div className="campo-lista">
            <label>
                {props.label}
            </label>
            <select 
                required={props.required}
                value={props.value}
                onChange={e => props.handleChange(e.target.value)}>
                <option value="">Selecione...</option>
                {
                    props.lista.map( 
                        item => { return(<option 
                            value={item.value}
                            key={item.value}
                            >
                                {item.name}
                            </option>)}
                    )
                }
            </select>
        </div>
    )
}

export default DropDown
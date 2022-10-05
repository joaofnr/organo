import './style.scss'

function Button(props) {
    return (
        <button className='btn-submit'>{props.children}</button>
    )
}

export default Button
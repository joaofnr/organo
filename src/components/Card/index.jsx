import './style.scss'

function Card({nome, area, bgColor}) {
    return (
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor:bgColor}}>
                <img src='https://via.placeholder.com/150' alt=''/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{area}</h5>
            </div>
        </div>
    )
}

export default Card
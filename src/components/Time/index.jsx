import Card from '../Card'
import './style.scss'

function Time(props) {
    return (
        (props.integrantes.length > 0) && <section className='team' style={{
            backgroundColor:props.secondaryColor,
            color:props.primaryColor
            }}>
            <h3>{props.nome}</h3>
            <div className="integrantes">
                {
                    props.integrantes.map( i => {
                        return (
                            <Card bgColor={props.primaryColor} key={i.nome} nome={i.nome} area={i.atuacao} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Time
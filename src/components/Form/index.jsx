import { useState } from 'react'
import Button from '../Button'
import DropDown from '../DropDown'
import TextInput from '../TextInput'
import './style.scss'

function Form (props) {
    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [atuacao, setAtuacao] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addIntegrante({
            nome, 
            apelido, 
            atuacao
        })
        setNome('')
        setApelido('')
        setAtuacao('')
    }

    return (
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <h2>Preenche esses campos aí</h2>
                <TextInput 
                    label="Nome" 
                    required="required" 
                    value={nome}
                    handleChange={value => setNome(value)}
                    placeholder="Digite seu nome" />
                <TextInput 
                    label="Apelido" 
                    value={apelido}
                    handleChange={value => setApelido(value)}
                    placeholder="Digite seu apelido" />
                <DropDown 
                    label="Atuação" 
                    required="required" 
                    value={atuacao}
                    handleChange={value => setAtuacao(value)}
                    lista={props.times} />
                <Button>VAI!</Button>
            </form>
        </section>
    )
}

export default Form
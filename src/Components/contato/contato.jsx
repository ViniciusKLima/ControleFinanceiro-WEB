import './contato.css'

function Contato() {
    const jasonSpan = [
    {
        icone: "#",
        texto: "Conte com a gente para tirar dúvidas e mellhorar sua experiência"
    },
    {
        icone: "#",
        texto: "Dúvidas sobre o funcionamento do app"
    },
    {
        icone: "#",
        texto: "Sugestões de melhorias"
    },
    {
        icone: "#",
        texto: "Relatar problemas ou erros"
    },
    {
        icone: "#",
        texto: "Feedback sobre a experiência"
    },
    {
        icone: "#",
        texto: "Parcerias ou colabolações"
    }
]

    return (
        <section id="contato" className='d-flex'>
            <div className='textos-contato'>
                <h4>Conte com a gente para tirar dúvidas e mellhorar sua experiência</h4>
                <div className='itens-contato'>
                    {jasonSpan.map((item, index) => (
                        <div className='item-contato' key={index}>
                            <i className={`bi bi-check-lg icone-contato`}></i>
                            <span>{item.texto}</span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Contato;
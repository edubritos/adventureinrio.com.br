const Contact = () => (
    <div id="contact">
        <h2 className="titles">Contato</h2>
        <p>
            Entre em contato por e-mail, telefone, Whatasapp ou redes sociais e
            faça seu orçamento ou tire suas dúvidas!
        </p>
        <div className="icons">
            <a href="https://www.facebook.com/Adventureinrio/" target="_blank">
                <img src="../static/icons/facebook.png" height="80" width="80" alt="Facebook" />
            </a>
            <a href="https://twitter.com/adventureinrio" target="_blank">
                <img src="../static/icons/twitter.png" height="80" width="80" alt="Twitter" />
            </a>
            <a href="mailto:adventureinrio@gmail.com" target="_blank">
                <img src="../static/icons/email.png" height="80" width="80" alt="E-mail" />
            </a>
            <a href=" https://wa.me/+5521972927252" target="_blank">
                <img src="../static/icons/whatsapp.png" height="95" width="95" alt="Whatasapp" />
            </a>
        </div>
    </div>
)

export default Contact
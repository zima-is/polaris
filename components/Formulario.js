import styles from '../styles/Formulario.module.css'

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Formulario = () => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <div className={styles.illustration}>
                        <img src='/illustrations/pack-basico.webp' alt='' width="261.775px" height="185px" />
                    </div>
                    <h1>Estamos aquí para ti</h1>
                    <p className={styles.phoneLink}><a href="https://wa.me/34602256136" target="_blank">< FontAwesomeIcon icon={faWhatsapp} />602 256 136</a></p>
                    <p>En Polaris encontrarás siempre a un profesional al otro lado del teléfono que <span className={styles.bolder}>te guiará.</span></p>
                    <p>Si lo prefieres puedes escribirnos a través del formulario.</p>
                    <p className={styles.bolder}><a href="mailto:test@test.com">polarisdata@polarisdata.es</a></p>
                </div>
            </div>
            <div className={styles.formWrapper}>
                    <form className={styles.form} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <p className={styles.honeypotHidden}>
                            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                        </p>
                    
                        <label htmlFor='name' value='Nombre' className={styles.name}>NOMBRE</label>
                        <input id='name' name="name" type="text" className={styles.nameInput}/>
                        
                        <label htmlFor='email' value='Email' required className={styles.email}>EMAIL</label>
                        <input id='email' name="email" type="email" className={styles.emailInput}/>

                        <label htmlFor='message' className={styles.message}>MENSAJE</label>
                        <textarea id='message' name="message" className={styles.messageTextArea}/>

                        <div className={styles.checkboxDiv}>
                            <input type="checkbox" htmlFor='conditions' required className={styles.conditionsInput}/>
                            <label id='conditions' name="conditions" className={styles.conditions}>
                                He leído y acepto las condiciones.
                            </label>
                        </div>
                        <p className={styles.legal}>De conformidad con lo establecido en el REGLAMENTO (UE) 2016/679 de protección de datos de carácter personal, le informamos que los datos que usted nos facilite serán incorporados al sistema de tratamiento titularidad de PolarisData 2320 SL con CIF B67239020 y domicilio social C/ Conde Güell, 54 4º 1ª, y Agora Recursos Humanos SL CIF B31756901 con domicilio social sito en Travessera de Les Corts, 232 de la ciudad de Barcelona (08014) con la finalidad de atenderle y enviarle la información comercial de los productos y servicios que nos requiere. Se procederá a tratar los datos de manera lícita, leal, transparente, adecuada, pertinente, limitada, exacta y actualizada. Mientras no nos comunique lo contrario, entenderemos que sus datos no han sido modificados y que usted se compromete a notificarnos cualquier variación. En caso de que fuera necesario comunicar sus datos a otros destinatarios, puede consultar más información en la política de privacidad disponible en la web. <br/>
                            De acuerdo con los derechos que le confiere la normativa vigente podrá ejercer sus derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos de carácter personal, así como revocar el consentimiento prestado, dirigiendo su petición a la dirección postal indicada o al correo electrónico polarisdata@polarisdata.es. Igualmente puede dirigirse a nosotros para cualquier aclaración en relación con este formulario o en relación al tratamiento de sus datos.<br/><br/>
                            En caso de no aceptación el formulario no podrá ser enviado ni grabado y sus datos no serán tratados.
                        </p>

                        <button type='submit'>Enviar</button>
                    </form>

            </div>
        </div>
    );
}
 
export default Formulario;
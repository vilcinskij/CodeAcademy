import './ContactMap.css'
import Iframe from 'react-iframe'

export default function ContactMap(props) {
    return (
        <div className="contact-map">
            <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.2278145273085!2d23.883217715461836!3d54.89892358033366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72205aa4de41f%3A0x7f361f52f2ba980b!2sKauno%20pilis!5e0!3m2!1slt!2slt!4v1662011924953!5m2!1slt!2slt"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                Referrerpolicy="no-referrer-when-downgrade"
                >
            </Iframe>
        </div>
    )
}
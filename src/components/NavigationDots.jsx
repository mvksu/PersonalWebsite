import { BsTwitter, BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"

export default function SocialMedia({ active }) {
    return (
        <div className="app__navigation">
            {["home", "about", "contact", "work", "skills", 'testimonials'].map((item, index) => (
                <a href={`#${item}`} key={item + index} className="app__navigation-dot" style={active === item ? { backgroundColor: '#313BAC' } : {}} />
            ))}
        </div>
    )
}
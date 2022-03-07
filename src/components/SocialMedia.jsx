import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"

export default function SocialMedia() {
    return (
        <div className="app__social">
            <div>
                <BsGithub />
            </div>
            <div>
                <FaFacebookF />
            </div>
            <div>
                <BsLinkedin/>
            </div>
        </div>
    )
}
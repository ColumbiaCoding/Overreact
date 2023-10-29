// import { profileImage } from "../images/ProfileImage.png";
import profileImage from "../assets/images/ProfileImage.png"
import '../style.css';

export default function AboutMe() {

    return (
        <>
            <div className="wrap">

                <img fluid src={profileImage} alt="profile picture" width="200px" />
                <p className="Abt">
                    My name is Gabriel, I currently work as a Product Owner represent the interests of the stakeholders and ensure that the development team builds a product that delivers maximum value to the customer or end-users. I've devloped applications, and digital tools designed to support and enhance various aspects of the exploration, production, refining, and distribution of energy resources.
                </p>
            </div>
        </>

    );
}
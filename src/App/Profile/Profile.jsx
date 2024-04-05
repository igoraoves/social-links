import './Profile.css'

const Profile = ({image, name, location, role, alt}) => {
    return(
        <>
            <img src={image} alt={alt} />
            <h3>{name}</h3>
            <p>{location}</p>
            <q>{role}</q>
        </>
    )
}

export default Profile;
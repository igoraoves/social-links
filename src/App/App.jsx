import './App.css'
import Container from './Container/Container'
import Profile from './Profile/Profile'
import jessicaImage from '../../images/avatar-jessica.jpeg'
import Button from './Button/Button'

const App = () => {
    return(
        <Container>
            <Profile
                image={jessicaImage}
                name="Jessica Randall"
                location="London, United Kingdom"
                role="Full Stack Developer"
            />
            <Button 
                link="https://www.github.com/GabigoldoSenai"
                name="GitHub"
            />
            <Button
                link="https://www.linkedin.com/in/igoralveslink"
                name="LinkedIn"
            />
        </Container>
    )
}

export default App;
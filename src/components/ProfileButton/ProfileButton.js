import Button from '../Button/Button'
import './ProfileButton.css'

const ProfileButton = ({ to, img, name }) => {
  return (
    <Button to={to}>
      <img src={img} alt={name} className="profileImg" /> {name}
    </Button>
  )
}

export default ProfileButton

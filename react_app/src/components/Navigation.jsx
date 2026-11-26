import { Link, useNavigate } from 'react-router-dom'
import { getToken, logOut } from '../service/AuthService'


const nav = {
  display: "flex",
  gap: " 10px",
  padding: "10px"
}

const item = {
  flexGrow: 0
}

const itemL = {
  flexGrow: 1,
  textAlign: "center"
}

const Navigation = () => {
  const navigate = useNavigate();
  const token = getToken();

  let handleLogOut = () => {
    logOut();
    navigate("/login");
  }

  if (token) {
    return (
      <nav style={nav}>
        <Link style={item} to="home">Home</Link>
        <p style={itemL}>Dashboard</p>
        <Link style={item} to="login" onClick={handleLogOut}>Ausloggen</Link>
      </nav>
    )
  }
}

export default Navigation
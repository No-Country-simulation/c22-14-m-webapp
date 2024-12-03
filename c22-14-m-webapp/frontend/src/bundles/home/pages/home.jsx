import { Link, Typography } from "../../common/components/components"
import { AppRoute } from '../../common/constants/constants'
import NavBar from "../../common/components/navbar"

const Home = () => {
  return (
    <>
        <NavBar />
        <Typography variant="h1">Telemedicina App</Typography>
        <Typography variant="h2">Telemedicina App</Typography>
        <Typography variant="h3">Telemedicina App</Typography>
        <Typography variant="h4">Telemedicina App</Typography>
        <Typography variant="h5">Telemedicina App</Typography>
        <Typography variant="h6">Telemedicina App</Typography>
        <Link underline="none" href={AppRoute.SIGN_UP}>Registrarse</Link>
    </>
  )
}

export { Home }

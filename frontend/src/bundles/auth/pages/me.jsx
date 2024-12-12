import { useSelector } from "../../common/hooks/hooks.js"

const Me = () => {
  const user = useSelector((state) => state.user.user)
  return (
    <div>hola {user && user.firstName}</div>
  )
}

export { Me }
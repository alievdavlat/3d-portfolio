import { useSelector } from "react-redux"


const useAuth = () => {
  const {account} = useSelector(state => state.admin)

  return account
}

export default useAuth
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({ currentUser }) => {
  return currentUser?.id.length > 0 ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes

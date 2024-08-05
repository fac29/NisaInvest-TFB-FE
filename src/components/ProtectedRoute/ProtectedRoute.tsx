import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../lib/auth'

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const checkUser = async () => {
      const user = await getCurrentUser()
      if (user) {
        setUser(user)
      } else {
        navigate('/login')
      }
    }
    checkUser()
  }, [navigate])

  if (!user) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default ProtectedRoute
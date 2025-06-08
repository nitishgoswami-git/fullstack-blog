import { useEffect } from 'react'
import './App.css'
import conf from './conf/conf'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    authService.getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }))
        } else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch])
  if (loading) {
    return <div className='min-h-screen flex flex-wrap'>Loading...</div>
  }
}

export default App

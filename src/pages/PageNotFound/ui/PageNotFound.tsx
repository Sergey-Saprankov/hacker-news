import { useNavigate } from 'react-router-dom'

export const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Page not found</h2>
      <button onClick={() => navigate('/')}>Go back to the main page</button>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>An error has occurred</h2>
      <button onClick={() => navigate('/')}>Go back to the main page</button>
    </div>
  )
}

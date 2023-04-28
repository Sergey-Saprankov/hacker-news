import { useNavigate } from 'react-router-dom'

import { Path } from 'shared/constants/path/Path'

export const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>An error has occurred</h2>
      <button onClick={() => navigate(Path.HOME)}>Go back to the main page</button>
    </div>
  )
}

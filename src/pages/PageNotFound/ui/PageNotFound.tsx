import { useNavigate } from 'react-router-dom'

import { Path } from 'shared/constants/path/Path'

export const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Page not found</h2>
      <button onClick={() => navigate(Path.HOME)}>Go back to the main page</button>
    </div>
  )
}

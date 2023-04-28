import { Route, Routes } from 'react-router-dom'

import { News } from 'pages/News'
import { NewsList } from 'pages/NewsList'
import { PageNotFound } from 'pages/PageNotFound'
import { Path } from 'shared/constants/path/Path'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Path.HOME} element={<NewsList />} />
      <Route path={Path.NEWS} element={<News />} />
      <Route path={Path.PAGE_NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  )
}

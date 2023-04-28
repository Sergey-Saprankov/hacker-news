import { Route, Routes } from 'react-router-dom'

import { News } from 'pages/News'
import { NewsList } from 'pages/NewsList'
import { PageNotFound } from 'pages/PageNotFound'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<NewsList />} />
      <Route path={'news/:id'} element={<News />} />
      <Route path={'*'} element={<PageNotFound />} />
    </Routes>
  )
}

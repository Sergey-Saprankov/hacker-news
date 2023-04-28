import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { fetchNews } from '../model/services/fetchNews'

import cls from './News.module.scss'

import { getNewsState } from 'pages/News/model/selectors/getNewsState/getNewsState'
import { useAppDispatch } from 'shared/lib/useAppDispatch'

export const News = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const news = useSelector(getNewsState)

  useEffect(() => {
    if (!id) return
    dispatch(fetchNews({ newsId: id }))
  }, [id, dispatch])

  console.log(news)

  return (
    <div className={cls.AloneNews}>
      <button className={cls.btn} onClick={() => navigate(-1)}>
        назад
      </button>
      <h2 className={cls.title}>{news.title}</h2>
      <a href={news.url}>{news.url}</a>
      <div>{news.time}</div>
      <div>{news.by}</div>
      <div>{news.descendants}</div>
      {/*<Comments kids={news.kids} />*/}
    </div>
  )
}

import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getNewsListState } from '../model/selectors/getNewsListState/getNewsListState'
import { fetchNewsList } from '../model/services/fetchNewsList'
import { ItemsSchema } from '../model/types/NewListSchema'

import cls from './NewsList.module.scss'

import { useAppDispatch } from 'shared/lib/useAppDispatch'

export const NewsList = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [update, setUpdate] = useState(false)
  const newsList = useSelector(getNewsListState)

  useEffect(() => {
    if (!newsList.length || update) {
      dispatch(fetchNewsList())
      setUpdate(false)
    }
    const interval = setInterval(() => {
      dispatch(fetchNewsList())
    }, 60000)

    return () => {
      clearInterval(interval)
    }
  }, [dispatch, newsList, update])

  if (!newsList.length) {
    return <div>loading</div>
  }

  return (
    <div className={cls.NewsList}>
      <div className={cls.innerWrapper}>
        <button className={cls.btn} onClick={() => setUpdate(true)}>
          update
        </button>
        <ol>
          {newsList.map((news: ItemsSchema, i: number) => (
            <li onClick={() => navigate(`news/${news.id}`)} value={i + 1} key={news.id}>
              <span className={cls.title}>{news.title}</span>
              <div className={cls.blockInfo}>
                <div>{news.score}</div>
                <div>{`by ${news.by}`}</div>
                <div>{news.time}</div>
                <div>{news.descendants}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

import cls from './Header.module.scss'

export const Header = () => {
  return (
    <header className={cls.Header}>
      <div className={cls.innerWrapper}>
        <h1 className={cls.title}>Hacker News</h1>
      </div>
    </header>
  )
}

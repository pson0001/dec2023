import c from './no-page.module.scss'

const NoPage = () => {
  return (
    <>
      <div className={c.pageContainer}>
        <div className={c.page}>
          <h2>Oops! The page you're looking for seems to be missing.</h2>
        </div>
      </div>
    </>
  )
}

export default NoPage

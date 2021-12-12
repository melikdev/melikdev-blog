export const getStaticProps = async () => {

  const res = await fetch('http://localhost:5000/blogs')
  const data = await res.json()

  return {
    props: { blogs: data }
  }

}

import Blogs from '../components/Blogs'

const Home = ({ blogs }) => {

  return (
    <div className="home">
      <Blogs blogs={blogs} />
    </div>
  )
}

export default Home

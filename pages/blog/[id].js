export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/blogs')
    const data = await res.json()

    const paths = data.map(blog => {
        return {
            params: { id: blog.id.toString() }
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('http://localhost:5000/blogs/' + id)
    const data = await res.json()

    return{
        props: { blog: data }
    }
}

const Details = ({ blog }) => {
    return (
        <div className="text-center space-y-10 mt-6">
            <h1 className="font-bold text-3xl">{blog.title}</h1>
            <p className="max-w-5xl m-auto">{blog.body}</p>
        </div>
    )
}

export default Details

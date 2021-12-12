import Link from "next/link"

const Blogs = ({ blogs }) => {
    return (
        <div className="grid-page">
            {blogs.map(blog => (
                <Link href={'/blog/' + blog.id} key={blog.id}>
                    <a className="bg-secondary p-6 hover:text-gray-500">
                        <h1 className="font-bold text-lg">{blog.title}</h1>
                        <p>{blog.body}</p>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Blogs

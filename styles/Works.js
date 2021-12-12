const Works = ({ works }) => {
    return (
        <div className="px-20 grid grid-cols-1 gap-4 max-w-sm m-auto text-center">
            {works.map(work => (
                <div className="bg-secondary p-10" key={work.id}>
                    <h1 className="font-bold text-xl p-2">{ work.title }</h1>
                    <p>{ work.body }</p>
                </div>
            ))}
        </div>
    )
}

export default Works

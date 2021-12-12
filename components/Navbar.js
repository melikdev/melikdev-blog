import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex justify-center p-5 mb-10 gap-5 bg-secondary">
            <Link href="/"><a className="font-title  mr-5 font-bold font-nunito hover:text-gray-500">Melik Unesi</a></Link>
            <div className="flex gap-5">
                <Link href="/"><a className="hover:text-gray-500">Home</a></Link>
                <Link href="/about"><a className="hover:text-gray-500">About</a></Link>
                <Link href="/works"><a className="hover:text-gray-500">Works</a></Link>
            </div>
        </div>
    )
}

export default Navbar

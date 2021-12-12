export const getStaticProps = async () => {
    
    const res = await fetch('http://localhost:5000/works')
    const data = await res.json()

    return{
        props: { works: data }

    }
} 

import Works from '../components/Works'

const works = ({ works }) => {
    return (
        <div>
            <Works works={works} />
        </div>
    )
}

export default works

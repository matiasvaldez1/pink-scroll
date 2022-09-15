import { useState } from 'react'

function LloraMateo() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count => count + 1)}>
            Mateo lloro {count}
        </button>
    )
}
export default LloraMateo
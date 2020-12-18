import React from 'react'
import { Link }  from 'react-router-dom'

export default function Home() {

    return (
        <div>
            <div>
                <h2>Your favorite food, delivered while coding</h2>
                <Link to='/pizza'>
                    <button>Build Pizza</button>
                </Link>
            </div>
        </div>
    )
}

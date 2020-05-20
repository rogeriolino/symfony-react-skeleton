import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context'

type Props = {
    brand: string
}

export const Menu: React.FC<Props> = ({ brand }) => {
    // TODO athenticated user menu
    const { state } = React.useContext(AppContext)
    
    return (
        <div>
            <h1>{brand}</h1>
            <hr />
            <Link to="/">Home</Link>
        </div>
    )
}
import React from 'react'

export const Loader = () => {
    return (
        <div className='loader'>
            <img src={process.env.PUBLIC_URL + '/images/832.svg'} alt='Loader' />
        </div>
    )
}
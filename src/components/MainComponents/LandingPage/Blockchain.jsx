import React from 'react'
import bgImg from '../../../assets/images/blockchain-bg.png'

const Blockchain = () => {
    return (
        <>
            <div style={{ backgroundColor: 'black' }}>
                <div className="w-full h-[580px] flex items-center justify-center"
                    style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    bc
                </div>
            </div>

        </>
    )
}

export default Blockchain

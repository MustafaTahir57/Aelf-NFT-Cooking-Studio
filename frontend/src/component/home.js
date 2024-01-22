import React from 'react'
import Accordion from './accordion'

function Home({ connectWallet, provider }) {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center mt-4'>
                <div className='col-md-10 text-start mt-2'>
                    <h1 className='phase-h1'>GEO: travel to earn</h1>
                    <p className='phase-p'>GEO is a decentralized "travel-to-earn" platform
                        based on the aelf ecosystem. We will generate a
                        dedicated G-DID for each platform user to aggregate
                        their entire on-chain information and manage it
                        personalizedly. By leveraging blockchain technology, we transform travel content into digital assets: users
                        can record and showcase personalized travel content
                        on the platform and also earn profits by publishing
                        GEOverse NFT-experience posts.
                    </p>

                    <p className='date-p'>2023/11/27 14:00 - 2024/01/29 05:00 GMT+05:00</p>
                </div>
                <div className='col-md-10'>
                {connectWallet ? (
                    <Accordion connectWallet={connectWallet} provider={provider} />
                ) : (
                    <div className="disabled-container">
                        <span className="disabled-text">Please connect wallet to see your progress</span>
                        <div className="disabled-accordion">
                            <Accordion />
                        </div>
                    </div>
                )}
                </div>
                

            </div>
        </div>
    )
}

export default Home
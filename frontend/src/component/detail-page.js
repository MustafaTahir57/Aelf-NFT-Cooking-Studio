import React, { useState } from 'react'

function DetailPage() {
    const [chosenEmoji, setChosenEmoji] = useState(null);
 
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log(emojiObject.target);
    };
    return (
        <div className='container mt-5'>
            <div className='row text-start d-flex justify-content-center mt-2'>
                <div className='col-md-10'>
                    <h1 className='phase-h1'>GEO Twitter </h1>
                    <p className='Curated-p mt-3'>Curated by AELF</p>
                    <p className='phase-p mt-4'>GEO Twitter members who have GEO role.</p>
                </div>
                <div className='col-md-10 mt-5'>
                    <span className='Call-p '>Call-to-Action</span>
                    <br />
                    <a href='https://twitter.com/aelfblockchain?lang=en' target='_blank' className='link-a'>https://twitter.com/aelfblockchain?lang=en</a>
                    <div className='row mt-5'>
                        <div className='col-md-3 mt-3'>
                            <span className='Type-p'>ID Type</span>
                            <br />
                            <span className='DISCORD-a'>Twitter</span>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <span className='Type-p'>Cred Type</span>
                            <br />
                            <span className='DISCORD-a '>Twitter MEMBER</span>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <span className='Type-p'># of Holders</span>
                            <br />
                            <span className='DISCORD-a'>31385</span>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <span className='Type-p'>Last Update Time</span>
                            <br />
                            <span className='DISCORD-a'>15/01/2024, 23:56:36</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HiPlusCircle, HiX } from "react-icons/hi";
import Picker from "emoji-picker-react";
function Post({ connectWallet }) {

    const [post, setPost] = useState([])
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log(emojiObject.target);
    };
    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    const closePicker = () => {
        // setChosenEmoji(null);
        setShowPicker(false);
    };
    const getPost = async () => {
        try {
            let array = []
            
            let result = await axios.get("http://localhost:8000/api/post")
            result?.data.forEach(element => {
                if (element?.wallet_id === connectWallet) {
                    console.log("result", element);
                    const dateTime = new Date(element.createdAt);
                    const formattedDateTime = new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        timeZone: 'UTC',
                    }).format(dateTime);
                    let data = {
                        date: formattedDateTime,
                        url: element?.url,
                        text: element?.text,
                        reaction: element?.allow_reaction,
                        image: element?.image
                    }
                    array.push(data);
                }

                setPost(array)
            });
        } catch (e) {
            console.log("e", e);
        }
    }

    useEffect(() => {
        getPost()
    }, [connectWallet])


    return (
        <div className='container'>
            <div className='row mt-3'>
                <h1 className='phase-h1'>Posts Details</h1>
                <div className='mt-5 d-flex '>
                    {
                        connectWallet ?
                            post.length > 0 ?
                                post.map((item, index) => {
                                    return (
                                        <div className='col-md-4 box-card m-1 mb-3' key={index}>
                                            <img src={item.image} width="70%"/>
                                            <h4 className='post-no mt-3'>Post No. {index + 1}</h4>
                                            <div className='box-card-url mt-3'>
                                                <span className='span-url-2'>URL</span>
                                                <span className='span-url'>{item.url}</span>
                                                <p className='span-p mt-3'>{item.text}</p>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center mt-3 mb-2'>
                                                <div style={{ position: "relative" }}>
                                                    <HiPlusCircle size={25} onClick={togglePicker} />
                                                    {showPicker && (
                                                        <div
                                                        style={{
                                                            position: "absolute",
                                                            top: "100%", // adjust as needed
                                                            left: 0,
                                                            zIndex: 1000, // adjust as needed
                                                          }}
                                                        >
                                                            <Picker onEmojiClick={onEmojiClick} />
                                                            <HiX size={20} onClick={closePicker} />
                                                        </div>
                                                    )}
                                                    {chosenEmoji && (
                                                        <span>
                                                            <img style={{ width: "15px" }} src={chosenEmoji.target.src} alt="chosen emoji" />
                                                        </span>
                                                    )}
                                                </div>


                                                <span className='post-date-span'>{item.date}</span>
                                            </div>
                                        </div>
                                    )
                                })
                                : <div className='data-found'> No Data Found</div>

                            : <div className='data-found'>
                                Please Connect Wallet First
                            </div>
                    }
                </div>


            </div>
        </div>
    )
}

export default Post
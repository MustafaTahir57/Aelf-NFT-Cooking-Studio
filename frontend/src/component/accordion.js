import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Picker } from 'emoji-mart';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Accordion({ connectWallet, provider }) {
    const [twitterLink, setTwitterLink] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const [allowReaction, setAllowReaction] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(true)
    
    const navigate = useNavigate()
    const hanldePost = async () => {
        try {
            let imageArray = [
                "https://i.ibb.co/Tq1Z2PX/vecteezy-burger-logo-design-vector-template-fast-food-logo-badge-25865635.jpg",
                "https://i.ibb.co/4PvyqyS/Whats-App-Image-2024-01-18-at-2-53-21-AM.jpg",
                "https://i.ibb.co/5YrRjQx/Whats-App-Image-2024-01-18-at-2-52-02-AM.jpg",
                "https://i.ibb.co/L1sYZb7/Whats-App-Image-2024-01-18-at-2-51-52-AM.jpg"
            ]
            const randomIndex = Math.floor(Math.random() * imageArray.length);
            let imageArrayss = imageArray[randomIndex]
        let  data = {
            wallet_id: connectWallet,
            url: twitterLink,
            text: textAreaValue,
            allow_reaction: allowReaction,
            image: imageArrayss
        }
        
       let result = await axios.post("https://long-gold-eel-slip.cyclic.app/api/post", data)
         if(result){
            setButtonDisable(false)
            setTwitterLink('')
            setTextAreaValue('')
            setAllowReaction(false)
            navigate("/post")
         }

        } catch (e) {
            console.log("e", e);
        }
    }

    const hanldeCreatePost = async()=>{
        try{
           console.log("provider", provider);
           const chain = await provider?.getChain("AELF");
        //    if (!chain) throw new Error("No chain");
 
           console.log("chain", chain);
           const nftContract = await chain?.getContract("ASh2Wt7nSEmYqnGxPPzp4pnVDU4uhj1XW9Se5VeZcX2UDdyjx");
           

        //    const createInput = {
        //     Symbol: "NFT", 
        //     Owner: connectWallet,
        //     Issuer: connectWallet,
        //   };
          
        //   console.log("1111111111111", nftContract);
        //   const result = await nftContract?.callSendMethod("Create", connectWallet);
        //   console.log("result", result);
        }catch(e){
            console.log("e", e);
        }
    }

    return (
        <div className='container mb-4'>
            <nav class="accordion arrows">

                <input type="radio" name="accordion" id="cb1" />
                <section class="box">
                    <label class="box-title" for="cb1">NFT cooking studio task</label>
                    <label class="box-close" for="acc-close"></label>
                    <div class="box-content">

                    GEO: a decentralized "travel-to-earn" platfor
                        <br />
                        <Link to="/details"><span class="btn btn-details mt-3">Details >></span></Link>
                    </div>
                </section>
                <input type="radio" name="accordion" id="cb2" />
                <section class="box">
                    <label class="box-title" for="cb2">Create Post</label>
                    <label class="box-close" for="acc-close"></label>
                    <div class="box-content">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Twitter Repost Link</Form.Label>
                            <Form.Control type="text" placeholder="Enter Link" style={{ display: "block" }}
                                value={twitterLink}
                                onChange={(e) => setTwitterLink(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder='Write text' rows={3}
                                value={textAreaValue}
                                onChange={(e) => setTextAreaValue(e.target.value)}
                            />
                        </Form.Group>
                        <div>

                            <div className='d-flex align-items-center'>
                                <label for="form-checkbox">Allow Reaction</label>
                                <input type="checkbox" class="form-checkbox me-5" id="form-checkbox"
                                    checked={allowReaction}
                                    onChange={(e) => setAllowReaction(e.target.checked)}
                                />
                            </div>
                        </div>
                        <div className=' d-flex justify-content-end mt-3'>

                        <button className='btn btn-connect' onClick={hanldePost}>Create Post</button>
                        </div>
                    </div>
                </section>
                <input type="radio" name="accordion" id="acc-close" />
            </nav>
            {/* <button className='btn btn-connect' onClick={hanldeCreatePost} disabled={buttonDisable}>Create Post</button> */}
        </div>
    )
}

export default Accordion
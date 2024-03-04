import React, { useState } from "react";

function Meme(props) {
    const [isEdit, setIsEdit] = useState(false)
    const [memeUpdate, setMemeUpdate] = useState({
        topText: props.topText,
        bottomText: props.bottomText,
        randomUrl: props.randomUrl
    });

    function updateMeme() {
        props.updateMeme(props.index, memeUpdate)
        setIsEdit(prev => !prev);
    }

    function memeUpdateChanges(event) {
        const { name, type, checked, value } = event.target;
        setMemeUpdate(prevText => {
            return {
                ...prevText, [name]: type === "checkbox" ? checked : value
            }
        });
    }

    function refreshImage() {
        const allMemes = props.memesData;
        const memeIndex = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[memeIndex].url;
        setMemeUpdate(prevImage => {
            return {
                ...prevImage, randomUrl: url
            }
        });
    }

    function editMeme() {
        return setIsEdit(prev => !prev)
    }
    function cancel() {
        return setIsEdit(prev => !prev)
    }

    const backgroundColor = {
        backgroundColor: "orange",
        maxWidth: "88%",
        color: "blue",
        padding: "1px 20px",
        border: "1px solid black"
    }

    return (
        <div className="editMeme">
            {!isEdit && <div style={backgroundColor}>
                <h3 className="editMeme--font">Top Text: {props.topText}</h3>
                <img src={props.randomUrl} alt="" className="displayMeme" />
                <h3 className="editMeme--font">Bottom Text: {props.bottomText}</h3>
                <button className="editMeme--button" onClick={editMeme}>Edit</button> <button className="editMeme--button" onClick={props.delete}>Delete</button>
            </div>}
            {isEdit && <div className="editMeme" style={backgroundColor}>
                <h3 className="editMeme--font">Top Text:<input
                    value={memeUpdate.topText}
                    name="topText"
                    onChange={memeUpdateChanges}
                />
                </h3>
                <div>
                    <button onClick={refreshImage} className="buttonImage">Refresh Meme</button>
                </div>
                <img src={memeUpdate.randomUrl} alt="" className="memeUpdate" />
                <h3 className="editMeme--font"> Bottom Text <input
                    value={memeUpdate.bottomText}
                    name="bottomText"
                    onChange={memeUpdateChanges}
                /> </h3>
                <button onClick={updateMeme}>Update</button>
                <button onClick={cancel}>Cancel</button>
            </div>}
        </div>
    )
}

export default Meme
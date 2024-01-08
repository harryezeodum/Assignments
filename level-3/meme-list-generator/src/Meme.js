import React, { useState } from "react";

function Meme(props) {
    const [isEdit, setIsEdit] = React.useState(false)
    const [memeUpdate, setMemeUpdate] = useState({
        topText: props.topText,
        bottomText: props.bottomText,
        randomUrl: props.image
    });

    function updateMeme() {
        props.updateMeme(props.index, memeUpdate)
        setIsEdit(prev => !prev);
    }

    function memeUpdateChanges(event) {
        const { name, value } = event.target;
        setMemeUpdate(prevText => {
            return {
                ...prevText, [name]: value
            }
        });
    }

    function refreshImage() {
        const allMemes = props.memesData.memes;
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

    return (
        <div className="editMeme">
            <h3>Top Text: {props.topText}</h3>
            <img src={props.image} alt="" className="displayMeme" />
            <h3>Bottom Text: {props.bottomText}</h3>
            <button onClick={editMeme}>{isEdit ? "Cancel" : "Edit"}</button> <button onClick={() => props.delete(props.index)}>Delete</button>
            {isEdit && <div className="editMeme">
                <h3>Top Text:<input
                    value={memeUpdate.topText}
                    name="topText"
                    onChange={memeUpdateChanges}
                />
                </h3>
                <div>
                    <button onClick={refreshImage} className="buttonImage">Refresh Meme</button>
                </div>
                <img src={memeUpdate.randomUrl} alt="" className="memeUpdate" />
                <h3> Bottom Text <input
                    value={memeUpdate.bottomText}
                    name="bottomText"
                    onChange={memeUpdateChanges}
                /> </h3>
                <button onClick={updateMeme}>Update</button>
            </div>}
        </div>
    )
}

export default Meme
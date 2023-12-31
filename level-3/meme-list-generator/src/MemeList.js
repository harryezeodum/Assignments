import React, { useState, useEffect } from "react";
import axios from "axios";
import Meme from "./Meme";

function MemeList() {
    const [memesData, setMemesData] = useState([{}]);
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomUrl: "https:\/\/i.imgflip.com\/1ur9b0.jpg"
    });
    const [memeSubmit, setMemeSubmit] = useState([]);

    function updateMeme(memeIndex, update) {
        setMemeSubmit(prevMemes => prevMemes.map((meme, index) => index !== memeIndex ? meme : update))
    }

    function memeChanges(event) {
        const { name, value } = event.target;
        setMeme(prevText => {
            return {
                ...prevText, [name]: value
            }
        });
    }

    function memesSubmit(event) {
        event.preventDefault();
        setMemeSubmit(prevState => {
            return [
                ...prevState, meme
            ]
        });
        setMeme({
            topText: "",
            bottomText: "",
            randomUrl: "https:\/\/i.imgflip.com\/1ur9b0.jpg"
        })
    }

    function refreshImage() {
        const allMemes = memesData.memes;
        const memeIndex = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[memeIndex].url;
        setMeme(prevImage => {
            return {
                ...prevImage, randomUrl: url
            }
        });
    }

    function deleteMeme(id) {
        const updatedMemeList = memeSubmit.filter((meme, index) => index !== id);
        setMemeSubmit(updatedMemeList);
    }

    // useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes", {
    //         method: "get"
    //     })
    //         .then(data => data.json())
    //         .then(resolve => setMemesData(resolve.data))
    //         .catch(error => console.log(error));
    // }, [])

    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then(resolve => setMemesData(resolve.data.data))
            .catch(error => console.log(error));
    }, [])

    const listOfMemeImages = memeSubmit.map((meme, index) => {
        return (
            <li key={index}>
                <Meme
                    topText={meme.topText}
                    bottomText={meme.bottomText}
                    index={index}
                    image={meme.randomUrl}
                    delete={deleteMeme}
                    memeSubmit={memesSubmit}
                    memesData={memesData}
                    updateMeme={updateMeme}
                />
            </li>
        )
    })

    return (
        <div>
            <h2>Meme List Generator</h2>
            <div className="button">
                <button onClick={refreshImage} className="buttonImage">Refresh Meme Image</button>
            </div>
            <div>
                <h3 className="memeTopText">{meme.topText}</h3>
                <img src={meme.randomUrl} alt="" className="memeImage" />
                <h3 className="memeBottomText">{meme.bottomText}</h3>
            </div>
            <form className="form" onSubmit={memesSubmit}>
                <input
                    placeholder="TopText"
                    className="topText"
                    name="topText"
                    value={meme.topText}
                    onChange={memeChanges}
                />
                <input
                    placeholder="BottomText"
                    className="bottomText"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={memeChanges}
                />
                <button className="formButton">Submit</button>
            </form>
            <div>
                <ol>{listOfMemeImages}</ol> <hr />
            </div>
        </div>
    )
}
export default MemeList
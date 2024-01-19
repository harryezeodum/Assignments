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
        const { name, type, checked, value } = event.target;
        setMeme(prevText => {
            return {
                ...prevText, [name]: type === "checkbox" ? checked : value
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
        const allMemes = memesData;
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
            .then(resolve => setMemesData(resolve.data.data.memes))
            .catch(error => console.log(error));
    }, [])

    const listOfMemes = memeSubmit.map((meme, index) => {
        return (
            <li key={index}>
                <Meme
                    topText={meme.topText}
                    bottomText={meme.bottomText}
                    index={index}
                    randomUrl={meme.randomUrl}
                    delete={() => deleteMeme(index)}
                    memeSubmit={memesSubmit}
                    memesData={memesData}
                    updateMeme={updateMeme}
                />
            </li>
        )
    })

    return (
        <div className="body">
            <h2 className="title">Meme List Generator</h2>
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
                    required
                />
                <input
                    placeholder="BottomText"
                    className="bottomText"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={memeChanges}
                    required
                />
                <button className="formButton">Submit</button>
            </form>
            <div>
                <ol>{listOfMemes}</ol> <hr />
            </div>
        </div>
    )
}
export default MemeList
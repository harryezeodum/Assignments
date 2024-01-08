import React from "react";
import Friend from "./Friend";

function FriendList(props) {

    const friendLists = props.friends.map((friend, index) => <Friend key={index} name={friend.name} age={friend.age} pet={friend.pets}/>)
    return (
        <div>
            <h2>Friend List</h2> <hr/>
            <ol>{friendLists}</ol>
        </div>
    )
}
export default FriendList
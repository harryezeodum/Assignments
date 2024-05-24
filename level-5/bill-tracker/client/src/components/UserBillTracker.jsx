import React, { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";

function UserBillTracker() {
    const userContext = useContext(UserContext);

    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const currentDate = moment();

    function userBillTrackerDetail(id) {
        navigate(`/userbilltracker/${id}`);
        //userContext.getUserBillTrackers();
    }

    const allBillTrackers = userContext.userState.billtracker.map((billtracker, index) => {
        return [
            <a href="">
                <li className="" key={index} onClick={() => userBillTrackerDetail(billtracker._id)}>
                    <span className="due"><strong>{moment(billtracker.date).diff(currentDate, "days") < 0 ? `${Math.abs(moment(billtracker.date).diff(currentDate, "days"))} days Past Due` : `Due ${moment(billtracker.date).fromNow()}`}</strong></span>
                    <h3>{billtracker.billName}</h3>
                    <span> <strong>${billtracker.amount}</strong> </span>
                </li> <hr />
            </a>
        ]
    });

    return (
        < div >
            {userContext.userState.token && !userContext.userState.user.isAdmin && <div className="billtrackerlist">
                <Link to="/addbill"><button className="button">Add a New Bill Tracker</button></Link>
                <h2 className="welcome">Welcome {userContext.userState.user.username.toUpperCase()}!</h2>
                {allBillTrackers.length > 0 && <h2 className="billtracker-title">{userContext.userState.user.username.toUpperCase()}'s Bill Tracker{allBillTrackers.length === 1 ? "" : "s"}</h2>}
                <ol>
                    {allBillTrackers}
                </ol>
            </div>}
        </div >
    )
}
export default UserBillTracker
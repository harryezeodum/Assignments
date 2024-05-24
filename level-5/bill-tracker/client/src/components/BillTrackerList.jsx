import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { UserContext } from "./UserContextProvider";
import { Link } from "react-router-dom";

function BillTrackerList() {
    const userContext = useContext(UserContext);

    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const currentDate = moment();

    // function billTrackerDetail(id) {
    //     navigate(`/allbilltrackers/${id}`);
    // }

    const allBillTrackers = userContext.userState.billtracker.map((billtracker, index) => {
        return [
            <div>
                <li className="" key={index} onClick={() => billTrackerDetail(billtracker._id)}>
                    <span className="due"><strong>{moment(billtracker.date).diff(currentDate, "days") < 0 ? `${Math.abs(moment(billtracker.date).diff(currentDate, "days"))} days Past Due` : `Due ${moment(billtracker.date).fromNow()}`}</strong></span>
                    <h3>{billtracker.billName}</h3>
                    <span> <strong>${billtracker.amount}</strong> </span>
                </li> <hr />
            </div>
        ]
    });

    return (
        <div>
            {userContext.userState.token && <div className="billtrackerlist">
                <Link to="/adminsignup"><button className="button">Create an Admin Account</button></Link>
                <h2 className="welcome">Welcome {userContext.userState.user.username.toUpperCase()}!</h2>
                <ol>
                    {allBillTrackers}
                </ol>
            </div>}
        </div>
    )
}
export default BillTrackerList
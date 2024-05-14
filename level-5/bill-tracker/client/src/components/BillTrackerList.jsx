import React, { useContext, useState } from "react";
import { BillTrackerContext } from "./BillTrackerContextProvider";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function BillTrackerList() {
    const context = useContext(BillTrackerContext);
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const currentDate = moment();
    console.log(currentDate);

    function billTrackerDetail(id) {
        navigate(`/allbilltrackers/${id}`);
    }

    const allBillTrackers = context.billTrackerData.map((billtracker, index) => {
        return [
            <a href="">
                <li className="" key={index} onClick={() => billTrackerDetail(billtracker._id)}>
                    <span className="due"><strong>{ moment(billtracker.date).diff(currentDate, "days") < 0 ? `${Math.abs(moment(billtracker.date).diff(currentDate, "days"))} days Past Due` : `Due ${moment(billtracker.date).fromNow()}`}</strong></span>
                    <h3>{billtracker.billName}</h3>
                    <span> <strong>${billtracker.amount}</strong> </span>
                </li> <hr />
            </a>
        ]
    });

    return (
        <div>
            <div className="billtrackerlist">
                {allBillTrackers.length > 0 && <h2 className="billtracker-title">All Bill Trackers</h2>}
                <ol>
                    {allBillTrackers}
                </ol>
            </div>
        </div>
    )
}
export default BillTrackerList
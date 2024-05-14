import React, { useContext } from "react";
import { BillTrackerContext } from "./BillTrackerContextProvider";

function BillTrackerForms() {
    const context = useContext(BillTrackerContext);

    return (
        <div>
            <div className="bill-title">
                <h1>Welcome to our Bill Tracker Homepage</h1>
                <p className="bill-text">Your ultimate tool for managing your finances effortlessly! Stay organized and in control of your expenses with our intuitive interface. Easily track your bills, set reminders, and monitor your spending all in one convenient place. Say goodbye to missed payments and hello to financial peace of mind. Start managing your bills smarter today!</p>
            </div>
            <h2 className="bill-text1">Add a Bill below</h2>
            <form className="form" onSubmit={context.billTrackerSubmitForm}>
                <label className="form-title">Bill Name:</label>
                <input
                    className="form-input"
                    placeholder="Bill Name"
                    name="billName"
                    onChange={context.billTrackerChanges}
                    value={context.billTrackerForm.billName}
                    required
                />

                <label className="form-title">Amount:</label>
                <input
                    className="form-input"
                    type="number"
                    placeholder="Amount"
                    name="amount"
                    onChange={context.billTrackerChanges}
                    value={context.billTrackerForm.amount}
                    required
                />

                <label className="form-title">Category:</label>
                <select
                    className="form-input"
                    name="category"
                    onChange={context.billTrackerChanges}
                    value={context.billTrackerForm.category}
                    required
                >
                    <option value="">---Choose---</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Internet and Cable">Internet and Cable</option>
                    <option value="Auto">Auto</option>
                    <option value="Mortgage">Mortgage</option>
                    <option value="Sport/Gym">Sport/Gym</option>
                    <option value="Electric/Gas">Electric/Gas</option>
                    <option value="Insurance">Insurance</option>
                </select>

                <label className="form-title">Date:</label>
                <input
                    className="form-input"
                    type="date"
                    name="date"
                    onChange={context.billTrackerChanges}
                    value={context.billTrackerForm.date}
                    required
                />

                <button className="form-input">Add</button>
            </form>
        </div>
    )
}
export default BillTrackerForms
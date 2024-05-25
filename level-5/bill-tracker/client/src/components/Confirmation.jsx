import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
    return (
        <div className="confirmation">
            <p>We're thrilled to inform you that your request to integrate a bill tracker feature into your account has been successfully implemented! Now, managing your expenses and staying on top of your bills will be more seamless than ever. With this new addition, you can effortlessly track your recurring payments, set reminders for due dates, and gain a clearer understanding of your financial commitments.
            </p>
            <p> Whether you're keeping track of monthly utilities, subscription services, or upcoming payments, this tool is designed to empower you with greater control over your finances. We hope this enhancement enriches your experience on our platform and contributes to your financial well-being.
            </p>
            <p>
                Thank you for choosing our website for your financial management needs. Should you have any questions or feedback, please don't hesitate to reach out to our support team. We're here to assist you every step of the way. <span>Please click on <Link to="/userbilltracker"><strong className="confirmation-link"> My Bill Trackers</strong></Link> to see a list of Bills.</span>
            </p>
        </div>
    )
}

export default Confirmation
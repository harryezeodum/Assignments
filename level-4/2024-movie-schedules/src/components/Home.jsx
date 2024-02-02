import React from "react";
import January from "./January";
import February from "./February";
import March from "./March";
import April from "./April";
import May from "./May";
import June from "./June";
import July from "./July";
import August from "./August";
import September from "./September";
import October from "./October";
import November from "./November";
import December from "./December";

function Home() {
    return (
        <div className="home">
            <h1 className="home--title">2024 New MOVIES SCHEDULE</h1>
            <p>Official theatrical release schedule for all upcoming films in the year <strong>2024</strong>. We tediously check and update this list to make sure the dates are 100% accurate. We also list both wide and limited release dates to the best of our abilities. If you notice any missing film(s), please <a href="/contact">let us know</a>. Click on the link below to go directly to a month</p>
            <span><a href="#jan" className="home--months">Jan</a> • </span> <span><a href="#feb" className="home--months">Feb</a> • </span> <span> <a href="#mar" className="home--months">Mar</a> • </span> <span> <a href="#apr" className="home--months">Apr</a> • </span> <span> <a href="#may" className="home--months">May</a> • </span> <span> <a href="#jun" className="home--months">Jun</a> • </span> <span> <a href="#jul" className="home--months">Jul</a> • </span> <span> <a href="#aug" className="home--months">Aug</a> • </span> <span> <a href="#sep" className="home--months">Sep</a> • </span> <span> <a href="#oct" className="home--months">Oct</a> • </span> <span> <a href="#nov" className="home--months">Nov</a> • </span> <span> <a href="#dec" className="home--months">Dec</a> </span> <br />
            <p>
                <strong>Bold</strong> = <strong>Nationwide Release</strong>  (Non-Bold = <em>Limited or Streaming</em>)
            </p>
            <hr />
            <em>Release dates subject to change. Click each title for movie info </em> <br />

            <January /> <hr />
            <February /> <hr />
            <March /> <hr />
            <April /> <hr />
            <May /> <hr />
            <June /> <hr />
            <July /> <hr />
            <August /> <hr />
            <September /> <hr />
            <October /> <hr />
            <November /> <hr />
            <December /> <br /> <br />
        </div>
    )
}
export default Home
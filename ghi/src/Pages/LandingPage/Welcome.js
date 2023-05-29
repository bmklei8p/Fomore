import logo from "../../media/fomore-dark.png"


function Welcome() {
    return (
        <div className="Welcome-content">
            <br />
            <br />
            {/* <img
                alt="Fomore title"
                src={logo}
                className="welcome-title"
            ></img> */}
            <h1 style={{fontSize: '4rem'}}>Fomore</h1>
            <p>Welcome to FOMORE! The quickest way manage your itineraries.</p>
            <p>
                To get started, sign up or log in, and create your first itinerary.
            </p>
            <p>
                Search events or create your own, and add them to your itinerary.
            </p>
            <div>
                <button style={{backgroundColor: "darkgreen"}} className="btn btn-primarygit  btn-lg">Explore as guest</button>
                <button style={{backgroundColor: "darkgreen"}} className="btn btn-primary btn-lg">Sign up</button>
            </div>
        </div>
    )
}

export default Welcome;
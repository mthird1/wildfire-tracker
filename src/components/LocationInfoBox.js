const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
    <li>ZIP: <strong>{ info.zip }</strong></li>
    <li>AGENCY: <strong>{ info.agency }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox

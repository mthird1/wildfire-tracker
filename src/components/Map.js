import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ openRequestsData, center, zoom }) => {

    console.log(openRequestsData)
    const markers = openRequestsData.map((or, index) => {
             return <LocationMarker key={index} lat={or.lat} lng={or.lon} onClick={() => {
                fetchDetails(or.id);
              }} />
               })

    

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCZUeBLkLAH4T-cEGwa8TEklBJ5WwQNssI' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
        </div>
    )  
}

    const [openRequestDetailData, setOpenRequestDetailData] = useState([])
    const [locationInfo, setLocationInfo] = useState(null)
const fetchDetails = (id) => {


    useEffect(() => {
        const fetchOpenRequests = async () => {
          const res = await fetch('https://stage.system.careportal.org/api/map/request-details?id=' + id) 
          const openRequestDetailData = await res.json()
    
          setOpenRequestDetailData(openRequestDetailData)
          setLocationInfo({ zip: res.zip, agency: res.agency })
        }
    
        fetchOpenRequests()
      }, [])    
    
      return (
          <div>
           {locationInfo && <LocationInfoBox info={locationInfo} />}
          </div>
      )
  };


Map.defaultProps = {
    center: {
        lat: 39.1155,
        lng: -94.6268
    },
    zoom: 6
}

export default Map

import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [openRequestsData, setOpenRequestsData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchOpenRequests = async () => {
      setLoading(true)
      const res = await fetch('https://stage.system.careportal.org/api/map/open-requests')
      const openRequestsData = await res.json()

      setOpenRequestsData(openRequestsData)
      setLoading(false)
    }

    fetchOpenRequests()
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map openRequestsData={openRequestsData} /> : <Loader /> }
    </div>
  );
}

export default App;

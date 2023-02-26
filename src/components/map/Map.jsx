import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const Map = () => {
    return (
        <MapContainer center={[22.654833, 75.768945]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[22.654833, 75.768945]}>
                <Popup>
                    Tadaa! Here's where I live
                </Popup>
            </Marker>
            <div className='map-content'>
                <h3 className='switch__color'>Divyansh Sharma</h3>
                <span>A.K.A - Dev</span>
                <br />
                <span>Location: Rau, Indore</span>
                <br />
                <span> Email: sharmadivyansh327@gmail.com</span>

            </div>
        </MapContainer>
    )
}

export default Map
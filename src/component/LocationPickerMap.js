import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '300px',
};

const center = {
    lat: 28.6139, // default to Delhi
    lng: 77.2090,
};

const LocationPickerMap = ({ onLocationSelect }) => {
    const [marker, setMarker] = useState(null);

    const handleClick = (e) => {
        const coords = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        };
        setMarker(coords);
        onLocationSelect(coords);
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={marker || center}
                zoom={marker ? 14 : 10}
                onClick={handleClick}
            >
                {marker && <Marker position={marker} />}
            </GoogleMap>
        </LoadScript>
    );
};

export default LocationPickerMap;

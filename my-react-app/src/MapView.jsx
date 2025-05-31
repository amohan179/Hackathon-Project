import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView() {
  return (
    <MapContainer center={[40.7128, -74.006]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={[40.7128, -74.006]}>
        <Popup>New York City</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
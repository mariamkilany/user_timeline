import { AppContext } from "@/providers/AppProvider";
import { EventData } from "@/types";
import {
  durationFormat,
  extractLatLng,
  formatAMPM,
} from "@/utils/functions/functions";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";

function MapMarker({ event }: { event: EventData }) {
  const { setSelectedEvent, hoveredEvent, setHoveredEvent } =
    useContext(AppContext);
  const [markerOptions, setMarkerOptions] = useState<any>(null);
  const { lat, lng } = extractLatLng(event.lat_long);

  useEffect(() => {
    setMarkerOptions({
      icon: {
        url: "/assets/placeholder.png",
        scaledSize: new window.google.maps.Size(40, 40),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(10, 10),
      },
    });
  }, []);

  return (
    <Marker
      key={event.id}
      position={{ lat, lng }}
      title={event.item_value}
      options={markerOptions}
      onMouseOver={() => setHoveredEvent(event)}
      onMouseOut={() => setHoveredEvent(null)}
      onClick={() => setSelectedEvent(event)}
    >
      {hoveredEvent === event && (
        <InfoWindow onCloseClick={() => setHoveredEvent(null)}>
          <div style={{ color: "black" }}>
            <h2 className="font-bold">{event.place_name}</h2>
            <h3>{event.category}</h3>
            <hr />
            <p className="font-medium py-2">
              {durationFormat(event.activity_duration_formatted)}
            </p>
            <hr />
            <p>
              {formatAMPM(new Date(event.start_ts))} to{" "}
              {formatAMPM(new Date(event.end_ts))}
            </p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}

export default MapMarker;

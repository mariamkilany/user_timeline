"use client";
import { useState, useEffect, useContext, useMemo } from "react";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { extractLatLng } from "@/utils/functions/functions";
import { AppContext } from "@/providers/AppProvider";
import { EventData } from "@/types";
import MapMarker from "./MapMarker";
import { darkModeStyles } from "./styles";

export default function Map() {
  const { dayEvents, setSelectedEvent, hoveredEvent, setHoveredEvent } =
    useContext(AppContext);
  const libraries = useMemo(() => ["places"], []);

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapBounds, setMapBounds] = useState<google.maps.LatLngBounds | null>(
    null
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  useEffect(() => {
    if (map && dayEvents?.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      dayEvents.forEach((event: EventData) => {
        const { lat, lng } = extractLatLng(event.lat_long);
        bounds.extend(new window.google.maps.LatLng(lat, lng));
      });
      setMapBounds(bounds);
      map.fitBounds(bounds);
    }
  }, [map, dayEvents]);

  const handleLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <GoogleMap
      zoom={18}
      center={
        mapBounds
          ? mapBounds.getCenter().toJSON()
          : { lat: 27.672932021393862, lng: 85.31184012689732 }
      }
      mapTypeId={google.maps.MapTypeId.TERRAIN}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      onLoad={handleLoad}
      options={{ styles: darkModeStyles }}
    >
      {dayEvents?.map((event: EventData) => {
        return <MapMarker event={event} key={event.id} />;
      })}
    </GoogleMap>
  );
}

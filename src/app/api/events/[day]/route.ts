import supabase from "@/utils/supabase/server";

function extractDatePart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

async function getLocationInfo(latlong: string) {
  const [lat, lng] = latlong.split(",").map(parseFloat);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FOURSQUARE_AUTH_TOKEN as string,
    },
  };

  const res = await fetch(
    `https://api.foursquare.com/v3/places/nearby?ll=${lat},${lng}&limit=1`,
    options
  );
  const data = await res.json();
  return data;
}

const GET = async (req: Request, context: any) => {
  const { params } = context;
  const { data: events } = await supabase.from("Places").select();

  const filteredEvents = events!.filter((event) => {
    const eventStartDate = extractDatePart(new Date(event.start_ts));
    const eventEndDate = extractDatePart(new Date(event.end_ts));
    const selectedDay = extractDatePart(new Date(Number(params.day)));

    if (
      (eventStartDate <= selectedDay && eventEndDate >= selectedDay) ||
      (eventStartDate.getTime() === selectedDay.getTime() &&
        eventEndDate.getTime() === selectedDay.getTime())
    ) {
      return true;
    }

    return false;
  });
  const withFoursquare = await Promise.all(
    filteredEvents.map(async (event) => {
      const locationInfo = await getLocationInfo(event.lat_long);
      if (locationInfo)
        return {
          ...event,
          place_name: locationInfo.results[0]?.name,
          category: locationInfo.results[0]?.categories[0].name,
          icon:
            locationInfo.results[0]?.categories[0].icon.prefix +
            "64" +
            locationInfo.results[0]?.categories[0].icon.suffix,
        };
      else
        return {
          ...event,
        };
    })
  );
  return Response.json(withFoursquare);
};

export { GET };

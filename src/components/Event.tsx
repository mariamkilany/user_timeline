import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "@/providers/AppProvider";
import { formatAMPM, durationFormat } from "@/utils/functions/functions";

const Event = () => {
  const { selectedEvent } = useContext(AppContext);

  return (
    <Box
      component={"div"}
      className="border dark:border-gray-200 border-gray-800 rounded p-4"
    >
      <h3 className="text-lg font-semibold mb-4 text-center">Event Details</h3>
      {selectedEvent ? (
        <Stack direction={"column"} spacing={2}>
          <div className="flex items-center">
            <img
              src={selectedEvent.icon}
              alt="location_icon"
              className="w-8 h-8 mr-2"
            />
            <h5 className="text-base font-medium">
              {selectedEvent.place_name}
            </h5>
          </div>
          <div>
            <h5 className="font-medium">Category: {selectedEvent.category}</h5>
            <h5 className="font-medium">
              Start Time: {formatAMPM(new Date(selectedEvent.start_ts))}
            </h5>
            <h5 className="font-medium">
              End Time: {formatAMPM(new Date(selectedEvent.end_ts))}
            </h5>
            <h5 className="font-medium">
              Duration:{" "}
              {durationFormat(selectedEvent.activity_duration_formatted)}
            </h5>
          </div>
        </Stack>
      ) : (
        <p className="text-sm text-center text-gray-500">No Event Selected</p>
      )}
    </Box>
  );
};

export default Event;

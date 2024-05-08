"use client";
import { AppContext } from "@/providers/AppProvider";
import { useContext } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export const DaySelector = () => {
  const { day, setDay } = useContext(AppContext);
  const minDate = dayjs("2024-03-01");
  const maxDate = dayjs("2024-03-05");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Basic date picker"
          slotProps={{
            textField: {
              helperText: "MM/DD/YYYY",
            },
          }}
          value={day}
          onChange={(newValue) => setDay(newValue)}
          minDate={minDate}
          maxDate={maxDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

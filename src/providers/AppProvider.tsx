"use client";
import { EventData } from "@/types";
import dayjs, { Dayjs } from "dayjs";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export const AppContext = createContext<any>(null);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [day, setDay] = useState<Dayjs | null>(dayjs("2024-03-01"));
  const [dayEvents, setDayEvents] = useState<[EventData] | []>([]);
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<EventData | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const fetchDayEvents = async () => {
      setLoading(true);
      const data = await fetch("/api/events/" + day);
      const dayEvents = await data.json();
      setLoading(false);
      setDayEvents(dayEvents);
    };
    fetchDayEvents();
  }, [day]);

  const contextValue = {
    day,
    setDay,
    dayEvents,
    loading,
    setSelectedEvent,
    selectedEvent,
    hoveredEvent,
    setHoveredEvent,
    mobileOpen,
    setMobileOpen,
    isClosing,
    setIsClosing,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

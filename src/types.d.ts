interface EventData {
  id: number;
  start_ts: string;
  end_ts: string;
  item_value: string;
  lat_long: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  description: string;
  activity_duration_seconds: number;
  activity_duration_hours: number;
  activity_duration_formatted: string;
  place_name: string;
  category: string;
  icon: string;
}

export { EventData };

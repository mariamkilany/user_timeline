import supabase from "@/utils/supabase/server";

const GET = async () => {
  const { data: events } = await supabase.from("Places").select();
  return Response.json(events);
};

export { GET };

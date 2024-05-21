"use server";

import { createClient } from "@/utils/supabase/server";

const checkUserLoggedIn = async () => {
  "use server";
  const supabase = createClient();
  await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};
export default checkUserLoggedIn;

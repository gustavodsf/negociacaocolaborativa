import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export default function SignOut() {
  
  const logout = async () => {
    "use server"
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/theme")
  }

  return (
    <form>
      <button formAction={logout} className="text-white/30 hover:text-white transition duration-100 ease-in-out">
        Logout
      </button>
    </form>
  )
}
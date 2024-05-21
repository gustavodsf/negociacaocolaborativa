import { createClient } from "@/utils/supabase/server";
import { DoorOpen } from "lucide-react";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";

export default async function SignOut() {
  const supabase = createClient();
  const { data: { user }, } = await supabase.auth.getUser();
  const { email } = user ?? { email: ''};

  const logout = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/theme");
  };

  return (
    <>
      { user &&
        <div className="absolute top-0 right-0 flex flex-row p-2 items-center">
          <span className="font-semibold mr-2">
            Bem vindo! { email ?? '' }
          </span>
          <form>
          <Button onPress={logout} >
            <DoorOpen size={24}/>
          </Button>
          </form>
      </div> 
      }
    </>
  );
}

"use client";

import { getUserEmail, logout } from "@/actions/login";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@nextui-org/react";
import { DoorOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function SignOut() {
  const [email, setEmail] = useState<string | undefined>();

  const signOut = () => {
    logout();
    setEmail(undefined);
  };

  useEffect(() => {
    getUserEmail().then((userEmail) => {
      setEmail(userEmail);
    });
  }, []);

  return (
    <>
      {email && (
        <div className="absolute right-0 top-0 flex flex-row items-center p-2">
          <span className="mr-2 font-semibold text-gray-600">
            Bem vindo! {email ?? ""}
          </span>
          <form>
            <button formAction={signOut}>
              <DoorOpen size={24} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

"use server";

import { redirect } from "next/navigation";

export async function navigate(data: { id: string }) {
  redirect(`/perspectiva/${data["id"]}`);
}

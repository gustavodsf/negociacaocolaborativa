import { createClient } from "@/utils/supabase/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();
  const searchParams = request.nextUrl.searchParams;
  const theme = searchParams.get("theme");
  const response = await supabase.from("comments").select().eq("theme", theme);
  const { data: getData, error: getError } = response;

  if (getError) {
    return new Response(JSON.stringify({ message: getError.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response(JSON.stringify(getData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: NextRequest) {
  const supabase = createClient();
  const comment = await request.json();
  const { data: postData, error: postError } = await supabase
    .from("comments")
    .insert(comment)
    .select();

  if (postError) {
    return new Response(JSON.stringify({ message: postError.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response(JSON.stringify(postData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(request: NextRequest) {
  const supabase = createClient();
  const searchParams = request.nextUrl.searchParams;
  const theme = searchParams.get("theme");
  const comment_id = searchParams.get("comment_id");
  const response = await supabase
    .from("comments")
    .delete()
    .eq("theme", theme)
    .eq("id", comment_id + "");
  const { data: getData, error: getError } = response;

  if (getError) {
    return new Response(JSON.stringify({ message: getError.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response(JSON.stringify({ message: "success" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(request: Request) {
  const supabase = createClient();
  const { commentId: editcommentId, payload } = await request.json();

  const { data: patchData, error: patchError } = await supabase
    .from("comments")
    .update({ payload })
    .eq("id", editcommentId)
    .select();
  if (patchError) {
    return new Response(JSON.stringify({ message: patchError.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response(JSON.stringify(patchData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

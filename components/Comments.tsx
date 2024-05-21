import Head from "next/head";
import { toast } from 'react-hot-toast'
import { createClient } from "@supabase/supabase-js";
import { ChangeEvent, FormEvent, useState } from "react";

import useSWR, { mutate } from "swr";
import { CircleCheck, CircleX, Pencil, Reply, Trash, X } from "lucide-react";
import { getUserEmail } from "@/actions/login";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL + "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY + "";
export const supabase = createClient(supabaseUrl, supabaseKey);

interface CommentParams {
  id: string;
  created_at: string;
  updated_at: string;
  username: string;
  payload: string;
  reply_of?: string;
}

interface EditCommentParams {
  id: string;
  payload: string;
}

const fetcher = (url: string) => fetch(url, { method: "GET" }).then((res) => res.json());

const addCommentRequest = (url: string, data: any) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

const editCommentRequest = (url: string, data: any) =>
  fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

const deleteCommentRequest = (url: string, id: string, theme:string) =>
  fetch(`${url}?comment_id=${id}&theme=${theme}`, { method: "DELETE" }).then((res) => res.json());

export default function Comments({ theme } : { theme: string}) {
  const { data: commentList, error: commentListError } = useSWR<CommentParams[]>(`/api/comments?theme=${theme}`, fetcher);
  const [comment, setComment] = useState<string>("");
  const [editComment, setEditComment] = useState<EditCommentParams>({
    id: "",
    payload: "",
  });
  const [replyOf, setReplyOf] = useState<string | null>(null);

  const onChangeEditComment = (event: ChangeEvent<HTMLInputElement>) => {
    const payload = event.target.value;
    setEditComment({ ...editComment, payload });
  };

  const confirmEdit = async () => {
    const editData = {
      payload: editComment.payload,
      commentId: editComment.id,
    };
    if (typeof commentList !== "undefined") {
      mutate(
        `api/comments?theme=${theme}`,
        commentList.map((comment) => {
          if (comment.id === editData.commentId) {
            return { ...comment, payload: editData.payload };
          }
        }),
        false
      );
      const response = await editCommentRequest(`api/comments?theme=${theme}`, editData);
      if (response[0].created_at) {
        mutate(`api/comments?theme=${theme}`);
        toast.success("Comentário atualizado com sucesso!!");
        setEditComment({ id: "", payload: "" });
      }
    }
  };

  const confirmDelete = async (id: string) => {
    const ok = window.confirm("Delete comment?");
    if (ok && typeof commentList !== "undefined") {
      mutate(
        `api/comments?theme=${theme}`,
        commentList.filter((comment) => comment.id !== id),
        false
      );
      const response = await deleteCommentRequest("/api/comments", id, theme);
      if (response[0].created_at) {
        mutate(`api/comments?theme=${theme}`);
        toast.success("Comentário removido com sucesso!!");
      }
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = await getUserEmail()
    const newComment = {
      user_email: email,
      payload: comment,
      reply_of: replyOf,
      theme: theme
    };
    if (typeof commentList !== "undefined") {
      mutate(`api/comments?theme=${theme}`, [...commentList, newComment], false);
      const response = await addCommentRequest("/api/comments", newComment);
      if (response[0].created_at) {
        mutate(`api/comments?theme=${theme}`);
        toast.success("Comentário adicionado com sucesso!!");
        setComment("");
      }
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const commentValue = event.target.value;
    setComment(commentValue);
  };

  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <div className="pt-36 flex justify-center">
        <div className="min-w-[600px]">
          <h1 className="text-4xl font-bold ">Comments</h1>
          <form onSubmit={onSubmit} className="mt-8 flex gap-8">
            <div className="w-full">
              {replyOf && (
                <div className="flex gap-4 my-2 items-center justify-start">
                  <div className="flex items-center justify-start gap-2">
                    <Reply className="w-4 text-gray-600 rotate-180" />
                    <p className="font-extralight italic text-gray-600 text-sm">
                      {commentList?.find((comment) => comment.id === replyOf)?.payload ?? ""}
                    </p>
                  </div>
                  <button onClick={() => setReplyOf(null)} title="Cancel">
                    <X className="w-4 text-gray-600" />
                  </button>
                </div>
              )}
              <input
                onChange={onChange}
                value={comment}
                type="text"
                placeholder="Add a comment"
                className="p-2 border-b focus:border-b-gray-700 w-full outline-none"
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-green-500 rounded-lg text-white">
              Submit
            </button>
          </form>
          <div className="flex flex-col gap-4 pt-12">
            {(commentList ?? [])
              .sort((a, b) => {
                const aDate = new Date(a.created_at);
                const bDate = new Date(b.created_at);
                return +aDate - +bDate;
              })
              .map((comment) => (
                <div key={comment.id} className="border rounded-md p-4">
                  {comment.reply_of && (
                    <div className="flex items-center justify-start gap-2">
                      <Reply className="w-3 text-gray-600 rotate-180" />
                      <p className="font-extralight italic text-gray-600 text-xs">
                        {commentList?.find((c) => c.id === comment.reply_of)?.payload ?? ""}
                      </p>
                    </div>
                  )}
                  <p className="font-semibold mb-2">
                    {comment.username}
                    {comment.updated_at !== comment.created_at && (
                      <span className="ml-4 text-sm italic font-extralight">edited</span>
                    )}
                  </p>
                  <div className="flex items-center gap-2 justify-between">
                    {comment.id === editComment.id ? (
                      <input
                        type="text"
                        value={editComment.payload}
                        onChange={onChangeEditComment}
                        className="pb-1 border-b w-full"
                      />
                    ) : (
                      <p className="font-light">{comment.payload}</p>
                    )}
                    <div className="flex gap-2">
                      {editComment.id === comment.id ? (
                        <>
                          <button
                            type="button"
                            onClick={confirmEdit}
                            disabled={editComment.payload === comment.payload}
                            title="Confirm"
                          >
                            <CircleCheck
                              className={`${
                                editComment.payload === comment.payload ? `text-gray-300` : `text-green-500`
                              } w-6`}
                            />
                          </button>
                          <button type="button" onClick={() => setEditComment({ id: "", payload: "" })} title="Cancel">
                            <CircleX className="w-6 text-gray-600" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              setEditComment({
                                id: comment.id,
                                payload: comment.payload,
                              })
                            }
                            title="Edit comment"
                          >
                            <Pencil className="w-6" />
                          </button>
                          <button onClick={() => confirmDelete(comment.id)} title="Delete comment">
                            <Trash className="w-6" />
                          </button>
                          <button onClick={() => setReplyOf(comment.id)} title="Reply to comment">
                            <Reply className="w-6 rotate-180" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

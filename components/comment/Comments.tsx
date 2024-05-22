import { getUserEmail } from "@/actions/login";
import { createClient } from "@supabase/supabase-js";
import { CircleCheck, CircleX, Pencil, Reply, Trash, X } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useSWR, { mutate } from "swr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL + "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY + "";
export const supabase = createClient(supabaseUrl, supabaseKey);

interface CommentParams {
  id: string;
  created_at: string;
  updated_at: string;
  user_email: string;
  payload: string;
  reply_of?: string;
}

interface EditCommentParams {
  id: string;
  payload: string;
}

const fetcher = (url: string) =>
  fetch(url, { method: "GET" }).then((res) => res.json());

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

const deleteCommentRequest = (url: string, id: string, theme: string) =>
  fetch(`${url}&comment_id=${id}`, { method: "DELETE" }).then((res) =>
    res.json(),
  );

export default function Comments({ theme }: { theme: string }) {
  const GET_COMMENT_URL = `/api/comments?theme=${theme}`;
  const { data: commentList, error: commentListError } = useSWR<
    CommentParams[]
  >(GET_COMMENT_URL, fetcher);
  const [comment, setComment] = useState<string>("");
  const [editComment, setEditComment] = useState<EditCommentParams>({
    id: "",
    payload: "",
  });
  const [replyOf, setReplyOf] = useState<string | null>(null);
  const [email, setEmail] = useState<string | undefined>();

  useEffect(() => {
    getUserEmail().then((userEmail) => {
      setEmail(userEmail);
    });
  }, []);

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
        GET_COMMENT_URL,
        commentList.map((comment) => {
          if (comment.id === editData.commentId) {
            return { ...comment, payload: editData.payload };
          }
        }),
        false,
      );
      const response = await editCommentRequest(GET_COMMENT_URL, editData);
      if (response[0].created_at) {
        mutate(GET_COMMENT_URL);
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
        false,
      );
      const { message } = await deleteCommentRequest(
        GET_COMMENT_URL,
        id,
        theme,
      );
      if (message) {
        mutate(GET_COMMENT_URL);
        toast.success("Comentário removido com sucesso!!");
      }
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = await getUserEmail();
    const newComment = {
      user_email: email,
      payload: comment,
      reply_of: replyOf,
      theme: theme,
    };
    if (typeof commentList !== "undefined") {
      mutate(GET_COMMENT_URL, [...commentList, newComment], false);
      const response = await addCommentRequest(GET_COMMENT_URL, newComment);
      if (response[0].created_at) {
        mutate(GET_COMMENT_URL);
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
    <>
      <div className="w-full justify-center p-1">
        <h1 className="font-theGreat text-xl font-semibold ">Comentários</h1>
        {email && (
          <form onSubmit={onSubmit} className="mt-2 flex gap-1">
            <div className="w-full">
              {replyOf && (
                <div className="my-2 flex items-center justify-start gap-4">
                  <div className="flex items-center justify-start gap-2">
                    <Reply className="w-4 rotate-180 text-gray-600" />
                    <p className="text-sm font-extralight italic text-gray-600">
                      {commentList?.find((comment) => comment.id === replyOf)
                        ?.payload ?? ""}
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
                placeholder="Adicionar comentário"
                className="w-full rounded-sm border-b p-2 outline-none focus:border-b-gray-700"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-colabBlue px-4 py-2 text-white"
            >
              Postar
            </button>
          </form>
        )}
        <div className="flex flex-col gap-2 pt-2">
          {(commentList ?? [])
            .sort((a, b) => {
              const aDate = new Date(a.created_at);
              const bDate = new Date(b.created_at);
              return +aDate - +bDate;
            })
            .map((comment) => (
              <div key={comment.id} className="rounded-md border bg-white p-2">
                {comment.reply_of && (
                  <div className="flex items-center justify-start gap-2">
                    <Reply className="w-3 rotate-180 text-gray-600" />
                    <p className="text-xs font-extralight italic text-gray-600">
                      {commentList?.find((c) => c.id === comment.reply_of)
                        ?.payload ?? ""}
                    </p>
                  </div>
                )}
                <p className="font-semibold">
                  {comment.updated_at !== comment.created_at && (
                    <span className="ml-1 text-sm font-extralight italic">
                      alterado
                    </span>
                  )}
                </p>
                <div className="flex items-center justify-between gap-2">
                  {comment.id === editComment.id ? (
                    <input
                      type="text"
                      value={editComment.payload}
                      onChange={onChangeEditComment}
                      className="w-full border-b pb-1"
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
                              editComment.payload === comment.payload
                                ? `text-gray-300`
                                : `text-green-500`
                            } w-6`}
                          />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setEditComment({ id: "", payload: "" })
                          }
                          title="Cancel"
                        >
                          <CircleX className="w-6 text-gray-600" />
                        </button>
                      </>
                    ) : (
                      <>
                        {comment?.user_email === email && (
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
                              <Pencil className="w-4" />
                            </button>
                            <button
                              onClick={() => confirmDelete(comment.id)}
                              title="Delete comment"
                            >
                              <Trash className="w-4" />
                            </button>
                            <button
                              onClick={() => setReplyOf(comment.id)}
                              title="Reply to comment"
                            >
                              <Reply className="w-4 rotate-180" />
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

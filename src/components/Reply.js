import React from "react";
import * as api from "../fetch";

export default function Reply(props) {
  const upvote = () => {
    api
      .post(`questions/${props.slug}/answers/${props.answer._id}/upvote`)
      .then((data) => {
        props.updateQuestion();
      });
  };
  const removeUpvote = () => {
    api
      .del(`questions/${props.slug}/answers/${props.answer._id}/upvote`)
      .then((data) => {
        props.updateQuestion();
      });
  };

  return (
    <div className="reply flex justify-between">
      <div className="author flex">
        <svg
          className="w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          />
        </svg>
        <h4>{props.answer.author.username}</h4>
      </div>
      <div className="body">
        <p>{props.answer.body}</p>
      </div>
      {props.answer.upvotes.includes(props.userId) ? (
        <button onClick={removeUpvote} className="flex">
          <p>{props.answer.upvotes.length}</p>
          <svg
            className="w-5 text-blue-500 hover:shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <button onClick={upvote} className="flex">
          <p>{props.answer.upvotes.length}</p>
          <svg
            className="w-5 hover:shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

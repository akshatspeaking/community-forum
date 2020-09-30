import React from "react";
import { NavLink } from "react-router-dom";

export default function Postcard(props) {
  return (
    <NavLink to={`/thread/${props.slug}`}>
      <div className="postcard my-5 shadow-md hover:shadow-lg p-5 max-w-lg">
        <div className="">
          <div className="">
            <h3 className="font-bold">{props.title}</h3>
          </div>
          <div className="flex justify-between my-2">
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
              <h4>{props.author.username}</h4>
            </div>
            <div className="replies flex">
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <p className="mx-2">{props.answers?.length || "0"}</p>
            </div>
          </div>
        </div>
        <p>{props.description.slice(0, 70)}..</p>
      </div>
    </NavLink>
  );
}

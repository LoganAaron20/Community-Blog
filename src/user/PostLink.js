import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Post from "./Post";

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post }) => {
  const { url } = useRouteMatch();
  const { postID } = useParams();
  // console.log(path);
  return (
    <div>
      <li className="list-group-item text-truncate">
        <Link to={`${url + '/' + post.id}`}>{post.title}</Link>
      </li>
    </div>
  );
};

export default PostLink;

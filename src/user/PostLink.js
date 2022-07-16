import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import Post from "./Post";

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post }) => {
  const { path } = useRouteMatch();
  const { postID } = useParams();
  // console.log(path);
  return (
    <div>
      {/* <Switch>
        <Route path={`${path}/${postID}`}>
          <Post posts={post} />
        </Route>
      </Switch> */}
      <li className="list-group-item text-truncate">
        <a href={`${path}/${post.id}`}>{post.title}</a>
      </li>
    </div>
  );
};

export default PostLink;

import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import UserProfile from "../user/UserProfile";

/*
  TODO: Change the link below to go to the user route, using the user's ID.
  /users/:userId
*/

export const Card = ({ user = { posts: [] } }) => {
  // const { path } = useRouteMatch();
  // console.log(path);
  return (
    <>
      {/* <Switch>
        <Route path={"/users/:userId"}>
          <UserProfile user={user} />
        </Route>
      </Switch> */}

      <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
        <div className="border p-4 h-100 d-flex flex-column">
          <h2 className="font-weight-lighter flex-fill">
            <a href={`/users/${user.id}`}>{user.name}</a>
          </h2>
          <a href={`/users/${user.id}/posts`} className="mt-2">
            {user.posts.length} Posts »
          </a>
        </div>
      </article>
    </>
  );
};

export default Card;

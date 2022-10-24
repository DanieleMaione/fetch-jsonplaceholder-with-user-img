import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Picture from "../components/PictureUploader/Picture";
import { styleUsers } from "./HomePage";

export const Users = () => {
  const [users1, setUsers] = useState<Array<styleUsers>>([]);
  const location = useLocation();

  const getUsers = () => {
    const data = location.state.users;
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  });

  const { username } = useParams();

  return (
    <>
      {users1.map((elm: styleUsers) => {
        if (elm.username.toString() === username)
          return (
            <div key={elm.id}>
              <h1> Username: {elm.username}</h1>
              <Picture />
              <h1>Name: {elm.name}</h1>
              <h2>Email: {elm.email}</h2>
              <h3>
                Address: <br />
                City: {elm.address.city} <br />
                Street: {elm.address.street} <br />
                Suite: {elm.address.suite} <br />
                ZipCode: {elm.address.zipcode} <br />
              </h3>
              <h4>
                Phone: {elm.phone} <br />
                WebSite: {elm.website}
              </h4>
              <h5>
                Company: <br />
                Name: {elm.company.name} <br />
                CatchPhrase: {elm.company.catchPhrase} <br />
                Bs: {elm.company.bs}
              </h5>
            </div>
          ); else return null;
      })}
    </>
  );
};

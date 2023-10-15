import React from "react";
import useApi from "../../hooks/useApi";

const Coba = () => {
  const endpoint = "api/v1/all-user";
  const { data, loading, error } = useApi(endpoint);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data && data.data ? (
        data.data.map((user, i) => (
          <div key={i}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* ... render other user details */}
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Coba;

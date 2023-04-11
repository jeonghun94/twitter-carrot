import useUser from "../lib/client/useUser";

export default () => {
  const { user, isLoading } = useUser();
  console.log(user, "user");
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      {user ? (
        <>
          <h1>Welcome {user.name}!!</h1>
          <h2>Your email is: {user.email}</h2>
        </>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </>
  );
};

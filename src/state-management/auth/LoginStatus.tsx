import useAuthStore from "./store";

const LoginStatus = () => {
  const { user, signIn, signOut } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => signOut()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => signIn("miguel")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;

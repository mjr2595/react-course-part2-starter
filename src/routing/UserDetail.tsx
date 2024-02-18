import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  return <p>User ID: {params.id}</p>;
};

export default UserDetail;

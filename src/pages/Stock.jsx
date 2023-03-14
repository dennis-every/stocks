import { useParams, Outlet } from 'react-router-dom';

const Stock = () => {
  const { slug } = useParams();

  return (
    <>
      <h1>{slug}</h1>
      <Outlet />
    </>
  );
};

export default Stock;

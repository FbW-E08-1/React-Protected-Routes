import { useContext } from 'react';

import MyContext from '../../context/MyContext';

const Home = () => {
  const { data } = useContext(MyContext);

  return (
    <section>
      {data.authorized ? (
        <h1>Home Page Welcome back {data.user}</h1>
      ) : (
        <h1>Home Page</h1>
      )}
    </section>
  );
};

export default Home;

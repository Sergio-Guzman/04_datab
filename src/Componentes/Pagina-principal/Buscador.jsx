import React, { useState, useEffect } from 'react';

const Buscador = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const URL = 'https://fakestoreapi.com/products';

  const showData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    showData();
  }, []);

  return (
    <div className='content'>
      <input type='text' value={search} onChange={handleSearch} />
      {filteredUsers.map((user) => (
        <div className='card el-wrapper' key={user.id}>
          <div className='box-up'>
            <img className='img' src={user.image} alt={user.title} />
            <div className='info-inner'>
              <span className='p-name'>{user.title}</span>
            </div>
          </div>
          <div className='card-body box-down'>
            <div className='h-bg'>
              <div className='h-bg-inner'></div>
              <a className='cart' href='.'>
                <span className='price'>{user.price}€</span>
                <span className='add-to-cart'>
                  <span className='txt'>Agregar al carrito</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buscador;

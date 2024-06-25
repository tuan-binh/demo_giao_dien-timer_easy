import { useState } from 'react';

function InputChange() {
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('before ', data);
    setData([...data, e.target.search.value]);

    e.target.search.value = '';
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <>
      {console.log('after ', data)}
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="search" id="" placeholder="search" />
        <input type="submit" />
      </form>
      {data.map((item, index) => (
        <li key={index}>
          {item} <i className="fa-solid fa-pen"></i>{' '}
          <i onClick={() => handleDelete(index)} className="fa-solid fa-trash"></i>
        </li>
      ))}
    </>
  );
}

export default InputChange;

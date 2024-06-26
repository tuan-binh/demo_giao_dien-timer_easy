import { useState } from 'react';

function InputChange() {
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);
  const [indexUpdate, setIndexUpdate] = useState(-1);
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

  const viewEdit = (index) => {
    console.log(index);
    let dataEdit = data[index];
    setDataEdit(dataEdit);
    setIndexUpdate(index);
  };

  const handleChangeDataEdit = (e) => setDataEdit(e.target.value);

  const handleEdit = (e) => {
    e.preventDefault();
    const newData = [...data];
    newData[indexUpdate] = dataEdit;
    setData(newData);
    setDataEdit('');
    setIndexUpdate(-1);
  };

  return (
    <>
      {indexUpdate >= 0 ? (
        <form action="" onSubmit={handleEdit}>
          <input type="text" value={dataEdit} onChange={handleChangeDataEdit} />
          <input type="submit" value="UPDATE" />
        </form>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="search" />
          <input type="submit" value="ADD" />
        </form>
      )}

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <i onClick={() => viewEdit(index)} className="fa-solid fa-pen"></i>
            <i onClick={() => handleDelete(index)} className="fa-solid fa-trash"></i>
          </li>
        ))}
      </ul>
    </>
  );
}

export default InputChange;

import React, { useEffect, useState } from "react";
import "../../App.css";

const List = ({ items,onRemoveItem }) => {
  const [listData, setListData] = useState(items);
  
  //update the List we fetched from form/user input
  useEffect(() => {
    setListData(items);
  }, [items]);

  const handleTotal = () => {
    return listData.reduce((total, item) => total + item.amount, 0);
  };

  const handleDelete = (index) => {
    const newList = listData.filter((item, i) => i !== index);
    setListData(newList);
    if (onRemoveItem) {
      onRemoveItem(index);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Desc</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {listData.map((item, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.amount}</td>
            <td>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => handleDelete(index)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <th colSpan={4}>Total</th>
          {/* <td></td>
          <td></td>
          <td></td> */}
          <td>{handleTotal()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default List;

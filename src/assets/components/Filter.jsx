import React, { useState } from "react";

const Filter = ({ listItem, onChangeCategory, newList }) => {
  
  const handleCategory = (e) => {
    onChangeCategory(e.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="category" className="form-label">
        Category
      </label>
      <select 
      className="form-select"
       id="category"
       value={listItem}
       onChange={handleCategory}
       >
        <option value="select-all">Select All</option>
        <option value="Grocery">Grocery</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default Filter;

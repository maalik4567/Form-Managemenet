//App.jsx
import React,{useState} from 'react'
import Form from './assets/components/Form'
import List from './assets/components/List'
import Filter from './assets/components/Filter'

const App = () => {

  const [formData, setFormData] = useState([]);
  const [selectCategory,setSelectCategory] = useState('select-all');

  const submitHandler = (values) => {
    setFormData([...formData, values]);
    //setFilteredData([...formData, values]); 
    //console.log(values);
  };  

  const handleRemoveItem = (index) => {
    const newList = [...formData];
    newList.splice(index, 1);
    setFormData(newList);
  };

  const filterByCategory = (category) => {
      if(category==='select-all'){
        return formData;
      }
      return formData.filter((item)=>item.category===category);
  }
 
  const filteredItems = filterByCategory(selectCategory);

  // console.log("selected Category",selectCategory);
  // console.log("filtered Items",filteredItems);

  return (
    <div className="container">
        <h3>Form Component</h3>
        <hr />
        <Form onSubmit={submitHandler}/>
        <h3>Filter Component</h3>
        <hr />
        <Filter 
        listItem={selectCategory}
        onChangeCategory={setSelectCategory}
        newList={filteredItems}
        />
        <h3>List Component</h3>
        <hr />
        <List items={filteredItems} onRemoveItem={handleRemoveItem}/>
     </div>
  )
}

export default App

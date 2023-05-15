import React, { useState, useEffect } from "react";
import { MultiSelect } from "@mantine/core";

function Test() {
    var data = [{name:"ALmaz"}, {name:"Kambarov"}]
    var [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const handleApplyFilter = ()=>{
    const filter = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filter)
  }


  return (
    <div>
      <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
      <ul>
        {filteredData.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
      <button onClick={handleApplyFilter}>Apply</button>
    </div>
  );
}
export default Test
// import React, { useState, useEffect } from "react";
// import Select from "react-select";

// const options = [
//   { value: "apple", label: "Apple" , id:1},
//   { value: "banana", label: "Banana", id:2},
//   { value: "orange", label: "Orange", id:3}
// ];

// function Test() {
//   const [selectedOption, setSelectedOption] = useState(null);

//   useEffect(() => {
//     const storedValue = localStorage.getItem("selectedOption");
//     if (storedValue) {
//       setSelectedOption(JSON.parse(storedValue));
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedOption) {
//       localStorage.setItem("selectedOption", JSON.stringify(selectedOption));
//     }
//   }, [selectedOption]);

//   const handleSelectChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   return (
//     <Select
//       value={selectedOption}
//       options={options}
//       onChange={handleSelectChange}
//     />
//   );
// }
// export  default Test
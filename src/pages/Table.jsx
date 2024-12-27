import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Table = ({data2}) => {
  // to remove
  const [data, setData] = useState([
    { id: 1, name: 'Alice', age: 25, role: 'Developer' },
    { id: 2, name: 'Bob', age: 30, role: 'Designer' },
    { id: 3, name: 'Charlie', age: 22, role: 'Tester' },
    { id: 4, name: 'Diana', age: 28, role: 'Manager' },
  ]);

  return (
    <div className="p-6 min-h-screen flex flex-col justify-start items-center mt-[10vh]">
      <Link to='/'>Go Back</Link>
      <table className="min-w-full ">
        <thead className="">
          <tr>
            <th
              className="py-3 px-4"
            >
              ID
            </th>
            <th
              className="py-3 px-4"
            >
              Name
            </th>
            <th
              className="py-3 px-4"
            >
              Age
            </th>
            <th
              className="py-3 px-4"
            >
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}
            >
              <td className="py-3 px-4">{row.id}</td>
              <td className="py-3 px-4">{row.name}</td>
              <td className="py-3 px-4">{row.age}</td>
              <td className="py-3 px-4">{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
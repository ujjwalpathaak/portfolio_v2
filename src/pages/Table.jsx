import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../components/ExternalLink';
import Heading from '../components/Heading';
import personalInformation from '../config.json'; // Fixed typo here
import SkillTag from '../components/SkillTag';

const Table = ({ data2 }) => {
  const [data, setData] = useState([
    { id: 1, name: 'Alice', age: 25, role: 'Developer' },
    { id: 2, name: 'Bob', age: 30, role: 'Designer' },
    { id: 3, name: 'Charlie', age: 22, role: 'Tester' },
    { id: 4, name: 'Diana', age: 28, role: 'Manager' },
  ]);

  return (
    <div className="flex flex-col font-averia justify-start items-center w-[100vw] h-[100vh]">
      <div className="h-[20vh] w-3/4 flex gap-2 flex-col justify-end">
        <ExternalLink text="← Go Back" link="/" />
        <Heading heading="All Projects" type="name" />
      </div>

      <div className="h-[80vh] max-w-3/4 w-full mt-6 flex overflow-x-auto justify-center text-sm lg:text-md">
        <table className="w-full lg:w-3/4">
          <thead className="sticky top-0 bg-white border-y z-10">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Repository</th>
            </tr>
          </thead>
          <tbody>
            {personalInformation.project_archive.map((row) => ( // Fixed typo here
              <tr key={row.id} className="border-y">
                <td className="py-3 px-4">{row.name}</td>
                <td className="py-3 px-4 text-xs lg:text-sm flex-col break-all lg:break-normal">
                  {row.description}
                <div className="lg:py-3 mt-1 hidden lg:flex flex-row items-center flex-wrap">
                  {row.technology.map((tech, index) => (
                    <React.Fragment key={index}>
                      <div className="lg:hidden flex justify-center">
                        <SkillTag small={true} technology={tech} />
                      </div>
                      <div className="hidden lg:flex justify-center">
                        <SkillTag technology={tech} />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                </td>
                <td className="py-3 px-4">
                  <a
                    href={row.github}
                    rel="noreferrer noopener"
                    className="italic inline-block w-fit relative text-black transition duration-300 group hover:bg-yellow-300"
                  >
                    Go to link
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
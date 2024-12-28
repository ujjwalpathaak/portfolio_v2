import React, { useState } from "react";
import ExternalLink from "../components/ExternalLink";
import Heading from "../components/Heading";
import personalInformation from "../config.json"; // Fixed typo here
import SkillTag from "../components/SkillTag";

const Table = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-start font-averia">
      <div className="ml-6 flex h-[20vh] w-full flex-col justify-end gap-2 lg:ml-0 lg:w-3/4">
        <ExternalLink text="← Go Back" link="/" />
        <Heading heading="All Projects" type="name" />
      </div>

      <div className="max-w-3/4 lg:text-md mt-6 flex h-[80vh] w-full justify-center overflow-x-auto text-sm">
        <table className="w-full lg:w-3/4">
          <thead className="sticky top-0 z-10 border-y bg-white">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left hidden lg:block ">Description</th>
              <th className="px-4 py-3 text-left">Repository</th>
            </tr>
          </thead>
          <tbody>
            {personalInformation.project_archive.map(
              (
                row, // Fixed typo here
              ) => (
                <tr key={row.id} className="border-y">
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="flex-col break-all px-4 py-3 text-xs hidden lg:block lg:break-normal lg:text-sm">
                    {row.description}
                    <div className="mt-1 hidden flex-row flex-wrap items-center lg:flex lg:py-3">
                      {row.technology.map((tech, index) => (
                        <React.Fragment key={index}>
                          <div className="flex justify-center lg:hidden">
                            <SkillTag small={true} technology={tech} />
                          </div>
                          <div className="hidden justify-center lg:flex">
                            <SkillTag technology={tech} />
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={row.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group relative inline-block w-fit italic text-black transition duration-300 hover:bg-yellow-300"
                    >
                      Go to link
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

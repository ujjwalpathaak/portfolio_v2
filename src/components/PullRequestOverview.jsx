import React from 'react';

const PullRequestsOverview = ({ details, highlight_details }) => {
    const detailsArray = details.split("\n");
    const highlightDetails = highlight_details;

    return (
        <div>
            <table>
                <tbody>
                    {detailsArray.map((detail, index) => {
                        const prNumber = detail.split(" - ")[0];
                        const newdetail = detail.split(" - ")[1];
                        return (
                            <tr key={prNumber}>
                                <td className='flex justify-start'>
                                    <a
                                        key={index}
                                        href={highlightDetails[prNumber]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative font-medium"
                                        style={{
                                            position: "relative",
                                            fontWeight: "400",
                                            color: "#242323",
                                        }}
                                    >
                                        <span className="relative z-10 underline">{prNumber}</span>
                                        <span className="absolute inset-0 z-0 origin-left scale-x-0 transform bg-yellow-300 transition-transform duration-300 group-hover:scale-x-100"></span>
                                    </a>
                                        <span className='mx-1 text-text'>-</span>
                                </td>
                                <td>
                                    <p className=' text-text'>
                                        {newdetail}
                                    </p>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PullRequestsOverview;
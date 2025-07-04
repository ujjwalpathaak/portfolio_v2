import React from 'react'
import HighlightText from './HighlightText'

const Article = ({
  title,
  description,
  link_img,
  link,
  image
}) => {
  return (
    <div className="mb-10 flex flex-col items-start lg:flex-row" key={name}>
      <div className="mb-3 w-full lg:mb-6 lg:mr-6 lg:w-1/3">
        <img className="" src={image} alt={name}></img>
      </div>
      <div className="w-full lg:w-2/3">
        <h6 className="flex items-center justify-between text-xl font-bold text-heading">
          <div>{title}</div>
          <div className="flex gap-2">
            <a
              href={link}
              target="_blank"
              className="group relative overflow-hidden p-1"
            >
              <span className="absolute inset-0 -translate-x-full transform bg-yellow-300 transition-transform duration-300 group-hover:translate-x-0"></span>
              <img className="relative z-10 w-6" src={link_img} />
            </a>
          </div>
        </h6>
        <p className="text-text">
          <HighlightText
            text={description}
          />
        </p>
      </div>
    </div>
  )
}

export default Article
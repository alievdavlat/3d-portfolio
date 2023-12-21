import React from "react";
import { useTranslation } from "react-i18next";








function Pagination({btnTitle, renderData, data}) {
const [t] = useTranslation()


  const [currentPage, setcurrentPage] = React.useState(1);
  const [itemsPerPage, setitemsPerPage] = React.useState(5);

  const [pageNumberLimit, setpageNumberLimit] = React.useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = React.useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = React.useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`${currentPage == number ? "active" : null }
           text-white p-5 h-[50px] w-[50px] flex justify-center items-center rounded-full ml-2 mr-2 bg-black-100
           cursor-pointer  max-xs:h-[10px] max-xs:text-[13px] max-xs:w-[10px] max-xs:p-2
            
           `}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });




  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li className="text-white p-5  max-xs:h-[10px] max-xs:text-[13px] max-xs:w-[10px] max-xs:p-2 h-[50px] w-[50px] flex justify-center items-center rounded-full ml-2 mr-2 bg-black-100
    cursor-pointer" onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="text-white max-xs:h-[10px] max-xs:text-[13px] max-xs:w-[10px] max-xs:p-2 p-5 h-[50px] w-[50px] flex justify-center items-center rounded-full ml-2 mr-2 bg-black-100
    cursor-pointer" onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
      {renderData(currentItems ? currentItems : '')}
      <ul className="pageNumbers w-full  pt-14 flex items-center justify-center">
        <li>
          <button
           className="cursor-pointer  max-xs:text-[13px]"
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            {t('prev')}
          </button>
        </li>
        {pageDecrementBtn ? pageDecrementBtn :''}
        {renderPageNumbers ? renderPageNumbers : ''}
        {pageIncrementBtn ? pageIncrementBtn : ''}

        <li>
          <button
          className="cursor-pointer max-xs:text-[13px]"
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            {t('next')}
          </button>
        </li>
      </ul>
      


      <div className="w-full ml-4 flex  items-center pt-16">
        <button  onClick={handleLoadMore} className="learnMoreBtn learn-more">
        <span aria-hidden="true" className="circle">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">{btnTitle}</span>
        </button>
      </div>
    
 
    </>
  );
}

export default Pagination;

import React from 'react';
import classNames from 'classnames';

export default function Pagination(props) {
    let pageArr = [];

    if (props.maxPage <= 7) {
        // less than 7 pages, show all num
        for (let i = 1; i <= props.maxPage; i++) {
            pageArr = pageArr.concat(i);
        }
    } else {
        // more than 7 pages, change others to "..."

        // 1* 2  3  4  ... 10
        // 1  2* 3  4  ... 
        // ...  7  8  9  10*
        // ...  7  8  9* 10

        // if currP - 2 > 2 , use ..., else use num
        // if currP + 2 < max, use ..., else use num

        let currP = props.currentPage;
        let max = props.maxPage;

        // current page
        pageArr.push(currP);

        // prev page
        if (currP - 1 > 1) {
            pageArr.unshift(currP - 1);

            if (currP - 2 > 1) {
                pageArr.unshift(currP - 2);
                pageArr.unshift("...");
            } else {
                pageArr.unshift(1);
            }
        } else if (currP - 1 === 1) {
            pageArr.unshift(1);
        }

        // next page
        if (currP + 1 < max) {
            pageArr.push(currP + 1);
            
            if (currP + 2 < max) {
                pageArr.push(currP + 2);
                pageArr.push("...");
            } else {
                pageArr.push(max);
            }
        } else if (currP + 1 === max) {
            pageArr.push(max);
        }
    }

    let newArr = new Array().concat(pageArr);


    const backBtnClass = classNames({
        'pg-back': true,
        'pg-disabled': props.currentPage === 1,
    });
    const forthBtnClass = classNames({
        'pg-forth': true,
        'pg-disabled': props.currentPage === props.maxPage,
    });

    return (
        <div className="pagination">
            <a className={backBtnClass}></a>
            <div className="pg-btn-wrapper">
                {
                    newArr.map((data, index) => (
                        <a
                            className={`pg-btn ${data === props.currentPage && "active"}`}
                            key={index}
                        >
                            {data}
                        </a>
                    ))
                }
            </div>
            <a className={forthBtnClass}></a>
        </div>
    )
}

// pg-disabled

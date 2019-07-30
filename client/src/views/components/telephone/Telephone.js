import React from 'react';
import delete_forever from './delete_forever.svg';

const ListNumeric = () => {

  const numbers = ["04148596777","02869524959"];

  const listItems = numbers.map((number) =>
    <li className="li-numeric">
      {number}
      <img src={delete_forever} className="IconDelete" alt="Icon"/>
    </li>
  );

  return (
    <ul className="ul-numeric">{listItems}</ul>
  );
}

export default ListNumeric;
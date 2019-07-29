import React from 'react';
import delete_forever from './delete_forever.svg';

const ListAddress = () => {

  const Address = ["Address","Address"];

  const listItems = Address.map((Address) =>
    <li>
      {Address}
      <img src={delete_forever} className="IconDelete" alt="Icon"/>
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default ListAddress;
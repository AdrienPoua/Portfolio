import React, { useState } from 'react';
import {
  FaRegClipboard,
  FaClipboardCheck,
} from 'react-icons/fa';
import { email } from '../../variables';
import styles from './styles.module.scss';


export default function Clipboard() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) navigator.clipboard.writeText(email);
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  return (
<button
  onClick={handleClick}
  className={`btn btn-dark w-100 d-flex align-items-center justify-content-between p-2 }`}
  >
{ !clicked && <span className={`fs-4 ${styles['fluid-font']}`} > adrien.poua@gmail.com </span> }
    { clicked && <span className='text-success fs-3' > Copié dans le presse-papiers </span> }
  <span>
    { !clicked && <FaRegClipboard className='fs-3' /> }
    { clicked && <FaClipboardCheck className='text-success fs-3' /> }
  </span>
</button>

  );
}

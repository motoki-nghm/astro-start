import style from '@assets/scss/modules/humburgerMenu.module.scss';
import { useState, useEffect } from 'preact/hooks';
import Modal from './Modal.jsx';

export const HamburgerMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('button').style.visibility = 'visible';
    }, 200);
  });
  return (
    <>
      <button className={style.btn} type="button" onClick={() => setIsOpen((prevState) => !prevState)}>
        {!isOpen ? (
          <>
            <span className={`${style.line} ${style.top}`}></span>
            <span className={`${style.line} ${style.center}`}></span>
            <span className={`${style.line} ${style.bottom}`}></span>
            <span className="ol-visuallyHidden">メニューを開く</span>
          </>
        ) : (
          <>
            <span className={`${style.line} ${style.top} ${style.isOpen}`}></span>
            <span className={`${style.line} ${style.center} ${style.isOpen}`}></span>
            <span className={`${style.line} ${style.bottom} ${style.isOpen}`}></span>
            <span className="ol-visuallyHidden">メニューを閉じる</span>
          </>
        )}
      </button>
      {!isOpen ? <Modal links={links} /> : <Modal show links={links} />}
    </>
  );
};

export default HamburgerMenu;

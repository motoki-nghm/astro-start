import style from '@assets/scss/modules/modal.module.scss';

function Modal({ show, links }) {
  return <>{show && <div className={style.modal}>Modal</div>}</>;
}

export default Modal;

import React from 'react';
import ReactDom from 'react-dom';

export default function Modal(open, onClose) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay'/>
      <div className='modal'>
        <h1 className='modal__title'>Delete "warehouse.name" warehouse</h1>
        <p className='modal__text'>Please confirm that you'd like to delete the "warehouse.name" from
        the list of warehouses. You won't be able to undo this action.</p>
        <div className='modal__btnBox'>
          <button className='modal__btn modal__btn--cancel' onClick={onClose}>Cancel</button>
          <button className='modal__btn modal__btn--delete'>Delete onClick={onClose}</button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

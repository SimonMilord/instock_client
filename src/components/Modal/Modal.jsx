import React from 'react';

export default function Modal({deleteHandler, handlePopUp}) {
  // if (!open) return null

  return (
    <>
      <div className='overlay'/>
      <div className='modal'>
        <h1 className='modal__title'>Delete "warehouse.name" warehouse</h1>
        <p className='modal__text'>Please confirm that you'd like to delete the "warehouse.name" from
        the list of warehouses. You won't be able to undo this action.</p>
        <div className='modal__btnBox'>
          <button className='modal__btn modal__btn--cancel' onClick={handlePopUp}>Cancel</button>
          <button className='modal__btn modal__btn--delete'onClick={deleteHandler}>Delete </button>
        </div>
      </div>
    </>
  )
}

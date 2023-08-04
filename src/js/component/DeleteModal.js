import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const DeleteModal = () => {
  const { store, actions } = useContext(Context);

  if (!store.showModal) return null;

  const DeleteContact = () => {
    actions.deleteContact(store.contactToBeDeleted);
    actions.closeModal();
  };

  const Close = () => {
    actions.closeModal();
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm</h5>
            <button type="button" className="btn btn-close" data-dismiss="modal" onClick={Close}>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you wanna remove this contact?</p>
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-danger" onClick={DeleteContact}>
              Yes
            </button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={Close}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
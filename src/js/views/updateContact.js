import React, { useContext, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

function UpdateContact() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const [updatedContact, setUpdatedContact] = useState({
        name: store.contacts[id - 1].name,
        homeAddress: store.contacts[id - 1].homeAddress,
        phone: store.contacts[id - 1].phone,
        email: store.contacts[id - 1].email
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.editContact(parseInt(id), updatedContact);
        // redirects back to the contact list view
        navigate("/");
    };

    return (
        <div className="container my-3">
            <form className="p-3" onSubmit={handleSubmit}>
                <h1 className="text-center mb-4">Edit Contacts</h1>
                <div className="form-group mb-3">
                    <label htmlFor="inputName">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="inputName"
                        value={updatedContact.name}
                        onChange={(e) => setUpdatedContact({ ...updatedContact, name: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="inputEmail"
                        value={updatedContact.email}
                        onChange={(e) => setUpdatedContact({ ...updatedContact, email: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputPhone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        id="inputPhone"
                        value={updatedContact.phone}
                        onChange={(e) => setUpdatedContact({ ...updatedContact, phone: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputAddress">Address</label>
                    <textarea
                        className="form-control"
                        rows="1"
                        placeholder="Address"
                        id="inputAddress"
                        value={updatedContact.homeAddress}
                        onChange={(e) => setUpdatedContact({ ...updatedContact, homeAddress: e.target.value })}
                    ></textarea>
                </div>
                
                    <button type="submit" className="btn btn-success w-50 mx-auto mt-4">Save</button>
                    <Link to="/">
                        <p>get back to contacts</p>
                    </Link>
                
            </form>
        </div>
    )
}

export default UpdateContact;
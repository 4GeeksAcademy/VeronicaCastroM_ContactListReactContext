import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import Modal from '../component/Modal';

function AddContact() {
    const { store, actions } = useContext(Context);

  
    const [newContact, setNewContact] = useState({
        name: "",
        homeAddress: "",
        phone: "",
        email: ""
    });

    const Submit = (e) => {
        e.preventDefault();
        actions.checkEmptyFields(newContact);
     
        setNewContact({
            name: "",
            homeAddress: "",
            phone: "",
            email: ""
        });
    };

    return (
        <div className="container my-3">
            <form className="p-3" onSubmit={Submit}>
                <h1 className="text-center mb-4">Contacts</h1>
                <div className="form-group mb-3">
                    <label htmlFor="inputName">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="inputName"
                        value={newContact.name}
                        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        id="inputEmail"
                        value={newContact.email}
                        onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputPhone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone"
                        id="inputPhone"
                        value={newContact.phone}
                        onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputAddress">Address</label>
                    <textarea
                        className="form-control"
                        rows="1"
                        id="inputAddress"
                        placeholder="Enter Address"
                        value={newContact.homeAddress}
                        onChange={(e) => setNewContact({ ...newContact, homeAddress: e.target.value })}
                    ></textarea>
                </div>
                <div className="row text-center">
                    <button type="submit" className="btn btn-success w-50 mx-auto mt-4">Save</button>
                    <Link to="/">
                        <p>get back to contacts</p>
                    </Link>
                </div>
            </form>
            <Modal />
        </div>
    )
}

export default AddContact;
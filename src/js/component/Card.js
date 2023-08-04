import React, { useContext } from "react";
import profilePicture from "../../img/ProfilePicture.png";
import { Link, useParams } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { Context } from "../store/appContext";


function Card() {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const DeleteClick = (contact) => {
        actions.setContactToBeDeleted(contact);
        actions.toggleModal(true);
    };

    return (
        <div>
            {store.contacts.map((contact) =>
                <div className="card  mx-5 border border-primary mb-4 " key={contact.id} >
                    <div className="row">
                        <div className="col-md-4">
                            <img src={profilePicture} className="img-fluid w-50" alt="Profile Picture" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h2 className="card-title">{contact.name}</h2>
                                <div className="profile-details d-flex">
                                    <p className="card-text"><b>{contact.homeAddress}</b></p>
                                </div>
                                <div className="profile-details d-flex">
                                    <small><b>{contact.phone}</b></small>
                                    <p className="card-text">
                                    </p>
                                   
                                </div>
                                <div className="profile-details d-flex">
                                    <small><b>{contact.email}</b></small>
                                    <p className="card-text">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <button className="card-button fs-3 me-2 mt-4 border-0 btn btn-danger" onClick={() => DeleteClick(contact)}>
                            <i class="fas fa-trash"/>
                            </button>
                            <Link to={`/edit/${contact.id}`}>
                                <button className="card-button fs-3 mt-4 border-0 btn btn-warning" >
                                <i class="fas fa-edit"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <DeleteModal />
        </div>
    );
}


export default Card;
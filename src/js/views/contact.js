import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="py-3">
				<Card />
			</div>
			<div className="ms-5">
				<Link to="/add">
					<button className="btn btn-primary">Add a new contact</button>
				</Link>
			</div>
		</div>
	)
};
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			showModal: false,
			contactToBeDeleted: null,
			contacts: [
				{
					id: 1,
					name: "Jorge",
					homeAddress: "Alajuela, Costa Rica",
					phone: "60235216",
					email: "jorge.veca@gmail.com"
				},
				{
					id: 2,
					name: "Alicia",
					homeAddress: "Alajuela, Costa Rica",
					phone: "60122311",
					email: "aliciacook@gmail.com"
				},
				{
					id: 3,
					name: "Aaron",
					homeAddress: "Alajuela, Costa Rica",
					phone: "83400892",
					email: "aaronalfarozamora@gmail.com"
				}
			]
		},

		actions: {

			
			addAllContact: (contact) => {
			
				let listOfAllContacts = getStore().contacts;
			
				const newContact = {
					id: listOfAllContacts.length + 1,
					...contact
				};
			
				setStore({ contacts: [...listOfAllContacts, newContact] });
			},

			
			editAllContact: (id, updatedContact) => {
			
				let listOfAllContacts = getStore().contacts;
			
				const IndexContact = listOfAllContacts.findIndex(contact => contact.id === id);
				if (IndexContact !== -1) {
					const updatedContacts = [...listOfAllContacts];
					updatedContacts[IndexContact] = { id, ...updatedContact };
				
					setStore({ contacts: updatedContacts });
				}
			},

			
			toggleModal: (show) => {
				setStore({ showModal: show })
			},

			
			checkEmptyFields: (newContact) => {
				const { name, homeAddress, phone, email } = newContact;
				if (name && homeAddress && phone && email) {
					
					getActions().addAllContact(newContact);
				} else {
				
					getActions().toggleModal(true);
				}
			},

			
			closeModal: () => {
				setStore({ showModal: false });
			},

			
			setContactToBeDeleted: (contact) => {
				setStore({ contactToBeDeleted: contact });
			},

			
			closeDeleteModal: () => {
				setStore({ showModal: false, contactToBeDeleted: null });
			},

		
			deleteContact: (contact) => {
				
				let listOfAllContacts = getStore().contacts;
			
				setStore({ contacts: listOfAllContacts.filter((item) => item !== contact) });
				
				getActions().closeDeleteModal();
			},
		}
	};
};

export default getState;

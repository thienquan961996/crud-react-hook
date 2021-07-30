import React from 'react';



const SearchForm = props => {
    const {onChange} = props;
    // const [search, setSearch] = useState(initialFormState)
    // const [contacts, setContacts] = useState([])

    // useEffect(
    //     () => {
    //     setContacts(contacts)
    // },[]
    // )

    // const filterContacts = search.length === 0 ? contacts : 
    // contacts.filter(contact => contact.name.toLowerCase().inclueds(search.toLowerCase()))
    
    return (
        <div>
            <h3 className="title">search</h3>
            <input
                type="text"
                placeholder="Search name"
                
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
    
}

export default SearchForm;
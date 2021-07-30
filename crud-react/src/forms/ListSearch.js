export default function List({contacts}) {
    return (
        <div>  
            <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    Name:
                       <span>{contact.name}</span>
                </li>   
            ))}
            </ul>
        </div>
    )
}
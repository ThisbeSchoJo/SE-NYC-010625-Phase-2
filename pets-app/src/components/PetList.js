import { dog, cat } from '../data/petsData';

function PetList() {
    return (
        <ul className="pet-list">
            <li className="pet">
                <img src={dog.image} alt={dog.name}></img>
                <h4>{dog.name}</h4>
            </li>
            <li className="pet">
                <img src={cat.image} alt={cat.name}></img>
                <h4>{cat.name}</h4> 
            </li>
        </ul>
    )
}

export default PetList;





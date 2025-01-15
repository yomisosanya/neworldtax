import data from '../res/service.json'

export default function PageSidebar(){
    const header = data.services.name;
    const items = data.services.list;

    return(
        <nav>
            <figure>
                <figcaption>
                    {header}
                </figcaption>
                <ul>
                    {items.map((item) => (
                        <li 
                            className='list-group-item'
                            key={item.name}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </figure>
        </nav>
    );
}
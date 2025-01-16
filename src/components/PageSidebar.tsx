import data from '../res/service.json'

export default function PageSidebar(){
    const header = data.services.name;
    const items = data.services.list;

    return(
        <nav>
            <figure
                className='card'
                style={{width: '18rem', margin: '1em'}}
            >
                <figcaption
                    className='card-header'
                >
                    <strong>
                        {header}
                    </strong>
                </figcaption>
                <ul 
                    id='page-side-bar'
                    className='list-group'
                >
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
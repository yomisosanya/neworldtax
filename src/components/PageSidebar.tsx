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
                    <strong
                        className='list-header'
                    >
                        {header}
                    </strong>
                </figcaption>
                <ul 
                    id='page-side-bar'
                    className='list-group'
                >
                    {items.map((item) => (
                        <li 
                            className='list-group-item list-hover sb-list-item'
                            key={item.name}
                        >
                            <span
                                className=''
                            >
                                {item.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </figure>
        </nav>
    );
}
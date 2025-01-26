import data from '../res/service.json'
import { useState } from 'react';

export default function PageSidebar(){
    const header = data.services.name;
    const items = data.services.list;

    const [headerState, setHeaderState] = useState(false);
    const isVisible = (clause: boolean) => (clause) ? 'block' : 'none';

    return(
        <nav>
            <figure
                className='card'
                style={{width: '18rem', margin: '1em'}}
            >
                <figcaption
                    className='card-header'
                >
                    <p>
                        <span
                        className='material-icons icon-hover'
                        onClick={() => setHeaderState(!headerState)}
                        style={{marginRight: '1ex'}}
                        >
                            menu
                        </span>
                        <strong
                            className='list-header'
                        >
                            {header}
                        </strong>
                    </p>
                </figcaption>
                <ul 
                    id='page-side-bar'
                    className='list-group'
                    style={{ display: isVisible(headerState)}}
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
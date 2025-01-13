
import data from  '../res/service.json'
import { MouseEvent } from 'react';


export default function PageNav(){
    const items = data.services.list;
    
    const popup = (evt: MouseEvent) => {
        //
    };

    return (
        <>
        <div id="page-nav" className="d-inline-flex shadow">
            <button 
                className='btn btn-primary' 
                aria-controls='services'
                aria-expanded='false'
                onClick={popup}

            >
                {data.services.name}
            </button>    
            <ul id='services' className='list-group'>
                {/* <li className="list-group-item">{data.services.name}</li> */}
                {items.map((item) => (
                    <li className='list-group-item' key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
        </>
    );

}
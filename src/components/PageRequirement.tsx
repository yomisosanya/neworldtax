import data from '../res/requirement.json'

export default function PageRequirement(){

    const reqList: string = 'req-group'

    return (
        <div
            className='card'
            style={{width: '40rem', height: 'fit-content', backgroundColor: '#e5e7e9'}}
        >
            {/* list of buttons */}
            <div
                className='card-body'
                style={{height: 'fit-content'}}
            >
                {data.map((item, index) => (
                    <button
                        id={`req-btn-${index}`}
                        key={`req-btn-${index}-key`}
                        className='btn btn-warning'
                        type='button'
                        aria-expanded='false'
                        aria-controls={`#${reqList}-${index}`}
                        data-bs-target={`#${reqList}-${index}`}
                        data-bs-toggle='collapse'
                        style={{marginRight: '1ex'}}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            {/* end of list of buttons */}
            {/* list of requirements */}
            <div
                // style={{width: '18rem'}}
                className='card-body'
            >
                {data.map((item, index) => (
                    <ul
                        id={`${reqList}-${index}`}
                        key={`${reqList}-${index}-key`}
                        className='collapse list-group'
                        // style={{width: 'fit-content', backgroundColor: 'lime'}}
                    >
                        {item.list.map((line, i) => (
                            <li
                                key={`line-${i}-key`}
                                className='list-group-item'
                            >
                                {line}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
          {/* end of list of requirements */}
        </div>
    );
}
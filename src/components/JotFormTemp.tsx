import data from '../res/jotform.json'

export default function JotFormTemp(){

    const id: string = 'jot-form'

    const handleClick = () => (window.open(data.src, '_blank'));

    return (
        <button
            id={id}
            key={`${id}-key`}
            className='btn btn-primary'
            style={{marginRight: '1em'}}
            onClick={handleClick}
        >
            {data.label}
        </button>
    );
}
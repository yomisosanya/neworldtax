interface IAddress{
    id: string;
    number: string;
    street: string;
    suite?: string;
    city: string;
    state: string;
    stateAbbr: string;
    zipcode: number;
}

export default function Address(props: IAddress){
    const id: string = props.id;

    return (
        <address
            id={id}
            key={`${id}`}
        >
            <span
                id={`${id}-addr`}
                key={`${id}-addr-key`}
                className='addr'
            >
                <span
                    id={`${id}-street-address`}
                    key={`${id}-street-address-key`}
                    className='street-address'
                >
                    {`${props.number} ${props.street}, `}
                </span>
                {(props.suite != null) && (<span
                >
                    id={`${id}-street-address`}
                    {props.suite}
                </span>)}
                <span>
                    {props.city}
                </span>
                <abbr>
                    {props.stateAbbr}
                </abbr>
                <span>
                    {props.zipcode}
                </span>
            </span>
        </address>
    );
}

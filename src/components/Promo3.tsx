
export default function Promo3(){

    const url: string = 'https://neworldtax-static-webapp-bucket.s3.us-east-2.amazonaws.com/assets/stock/';

    return (
        <div
            className='promo-outer-box'
        >
            <div
                className='promo-inner-box'
            >
                <img
                    className='promo-img'
                    alt='Child-Care Tax Credits Picture'
                    src={`${url}mother-daughter.webp`}
                    role='img'
                />
                <div>
                    <h2
                        className='promo-title'
                    >
                        Child-Care Tax Credits
                    </h2>
                     <p
                       className='content-justify-center'
                     >
                        <strong>
                            Up to:
                        </strong>
                     </p>
                    <ul
                        className='promo-list'
                    >
                        <li
                            className='hover-bold'
                        >
                            $4,213 - 1  Child
                        </li>
                        <li
                            className='hover-bold'
                        >
                            $6,960 - 2 Children
                        </li>
                        <li
                            className='hover-bold'
                        >
                            $7,830 - 3 Children
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
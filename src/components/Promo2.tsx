

export default function Promo2(){

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
                    alt='Income Tax Picture'
                    src={`${url}waitress.webp`}
                    role='img'
                />
                <div>
                    <h2
                        className='promo-title'
                    >
                        Income Tax
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
                            W2
                        </li>
                        <li
                            className='hover-bold'
                        >
                            Self-Employed
                        </li>
                        <li
                            className='hover-bold'
                        >
                            Small Business Taxes
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
    );
}
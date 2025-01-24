

export default function Promo2(){
    
    // const width: string = '600px';
    // const height: string = '400px';

    return (
        <div
            className='promo-outer-box'
        >
            <div
                className='promo-inner-box'
            >
                <img
                    className='promo-img'
                    src='./src/assets/stock/pexels-photo-3801451.webp'
                    // width={width}
                    // height={height}
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
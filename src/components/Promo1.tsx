

export default function Promo1(){
    
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
                    alt='Business Returns Picture'
                    src='./src/assets/stock/pexels-ron-lach-8086357.jpg'
                    // width={width}
                    // height={height}
                    role='img'
                />
                <div>
                    <h2
                        className='promo-title'
                    >
                        Business Returns
                    </h2>
                    <ul
                        className='promo-list'
                    >
                        <li
                            className='hover-bold'
                        >
                            LLC
                        </li>
                        <li
                            className='hover-bold'
                        >
                            Partnerships
                        </li>
                        <li
                            className='hover-bold'
                        >
                            S-Corp
                        </li>
                        <li
                            className='hover-bold'
                        >
                            C-Corp
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
import data from '../res/promotion.json'
import config from '../res/config.json'

export default function Promotion(){

    const origin: string = config['static-site'];
    const path: string = config['stock-path'];
    const url: string = `${origin}${path}`;

    return (
        <>
        {data.map((promo) => (
            <div
                className='promo-outer-box'
            >
                <div
                    className='promo-inner-box'
                >
                    <img 
                        className='promo-img'
                        alt={promo.alt}
                        src={`${url}${promo.src}`}
                        role='img'
                    />
                    <figure>
                        <figcaption>
                            <h2
                                className='promo-title'
                            >
                                {promo.title}
                            </h2>
                        </figcaption>
                        <p
                            className='content-justify-center'
                        >
                            {`${promo.subtitle}:`}
                        </p>
                        <ul
                            className='promo-list'
                        >
                            {promo.list.map((line) => (
                                <li>{line}</li>
                            ))}
                        </ul>
                    </figure>
                </div>
            </div>
        ))}
        </>
    );
}
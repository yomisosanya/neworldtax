import data from '../res/link.json'
import CalendlyButton from './CalendlyButton';
import JotFormButton from './JotFormButton';
// import JotFormTemp from './JotFormTemp';



export default function PageNavBar(){
    // const path: string = './src/assets/';
    const media = data.media;
    const width: string = '32px';
    const height: string = '32px';

    return (
        <nav 
            id='nav-bar'
            key='nav-bar-key'
            className='card'
            // style={{backgroundColor: '#e8f8f5'}}
        >
            <menu
                style={{display: 'flex', justifyContent: 'flex-end'}}
            >
                {/* <JotFormTemp /> */}
                <JotFormButton />
                <CalendlyButton />
                { media.map((item, index) => (
                    <li 
                        className="no-marker"
                        style={{marginLeft: '1em'}}
                        key={`link-item-${index}`}
                    >
                        <a
                            href={item.url}
                            target='_blank'
                        >
                            <img
                                // src={`${path}${item.name.toLowerCase()}.${item.type}`}
                                src={item.src}
                                width={width}
                                // height={height}
                                height='auto'
                                role= 'img'
                                alt= {`${item.name} icon`}
                            />
                        </a>
                    </li>
                ))}
            </menu>
        </nav>
    );
}
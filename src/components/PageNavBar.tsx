import data from '../res/link.json'



export default function PageNavBar(){
    const path: string = './src/assets/';
    const media = data.media;

    return (
        <nav>
            <menu>
                { media.map((item) => (
                    <li>
                        <a>
                            <img
                                src={`${path}${item.name.toLowerCase()}.${item.type}`}
                                width="50"
                                height="50"
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
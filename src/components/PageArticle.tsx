
interface Attr{
    title?: string
};


function PageArticle (props:Attr | null){
    console.log(props);
    return (
    <article>
        <h1>NEWORLDTAX LLc</h1>
        <h2>Remi Okeowo</h2>
    </article>
    );
}

export default PageArticle;
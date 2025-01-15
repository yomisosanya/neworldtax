
interface Attr{
    title?: string
};


function PageArticle (props:Attr | null){
    console.log(props);
    return (
    <article>
        <h1>NEWORLDTAX</h1>
        <h2>Under Construction</h2>
    </article>
    );
}

export default PageArticle;
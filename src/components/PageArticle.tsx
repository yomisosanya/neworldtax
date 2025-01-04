
// import React from 'react';

interface Attr{
    title?: string
};


function PageArticle (props:Attr | null){
    console.log(props);
    return (
    <article>Hello World</article>
    );
}

export default PageArticle;
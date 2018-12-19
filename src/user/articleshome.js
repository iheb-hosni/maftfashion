import React from 'react';

const articles =[
    {
    articleimg:"http://www.pleasemagazine.com/wp-content/uploads/2018/05/Untitled-3-2-300x170.jpg",
    articletxt:"Getting dressed is a way of life , Fashion goes on, the style stays"
    },
    {
    articleimg:"http://www.pleasemagazine.com/wp-content/uploads/2018/04/Bokelber_Copyright-2-300x201.jpg",
    articletxt:"viva azaro"
    },
    {
     articleimg:"http://www.pleasemagazine.com/wp-content/uploads/2018/05/COUV-LOUIS-VUITTON-1-300x182.jpg",
     articletxt:"I do not make clothes. I make dreams "
    },
    {
    articleimg:"https://www.pleasemagazine.com/wp-content/uploads/2018/11/plessse2-e1541595074716-300x184.jpg",
    articletxt:"the funniest fashion instagram accounts"
    },
    {
    articleimg:"http://www.pleasemagazine.com/wp-content/uploads/2018/10/couver-ss19-300x200.jpg",
    articletxt:"the best look from paris"
    },
    {
    articleimg:"http://www.pleasemagazine.com/wp-content/uploads/2018/09/vintage1-1-300x184.jpg",
    articletxt:"Celabrating the Seventies"
    },
]
const Article = props =>{
    const element = props.element;
  return (
    <div className="articles">
      <a href="#">
        <img className="article-img" src={element.articleimg} />
        <div className="article-info">
          <h1 className="article-name">{element.articletxt}</h1>
          
        </div>
      </a>
    </div>
  );
}
const Articles = () => {
    return (
      <div className="articles-info">
        {articles.map(elm => (
          <Article element={elm} />
        ))}
        ;
      </div>
    );
  };
  export default Articles;
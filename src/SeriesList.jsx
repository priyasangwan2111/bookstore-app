const data1={
    title:"let us see",
    author:"denis ritchie",
    imglink:"",
    price:345,


};
const data2={
    title:"THE EVERYDAY AUTHOR",
    author:"denis ritchie",
    imglink:"",
    price:345,
};
const data3={
    title:"THE EVERYDAY AUTHOR",
    author:"denis ritchie",
    imglink:"",
    price:365,
};
const data4={
    title:"THE EVERYDAY AUTHOR",
    author:"denis ritchie",
    imglink:"",
    price:396,
};
const data5={
    title:"THE EVERYDAY AUTHOR",
    author:"denis ritchie",
    imglink:"",
    price:323,
};


function SeriesList(){        
    return (
     <div className="serieslist">
    {/* <h1>best series</h1> */}
    <Series data={data1}/>
    <series
        title={data1.title}
        author={data1.author}
        image={data1.img}
        price={data1.price}
        
        
        />
    <Series data={data2}/>
    <series
        title={data2.title}
        author={data2.author}
        image={data2.img}
        price={data2.price}
        
        
        />
    <Series data={data3}/>
    <series
        title={data3.title}
        author={data3.author}
        image={data3.img}
        price={data3.price}
        
        
        />
    <Series data={data4}/>
    <series
        title={data4.title}
        author={data4.author}
        image={data4.img}
        price={data4.price}
        
        
        />
    <Series data={data5}/>
    <series
        title={data5.title}
        author={data5.author}
        image={data5.img}
        price={data5.price}
        
        
        />
    </div>
    )  
};
function Series({data}){
    return(  
        <div className="series">
            <h2>{data.title}</h2>
            <img src={data.imglink}/>
            <h2>{data.author}</h2>
            <h3>{data.price}</h3>
        </div>                             
        
    );
};
export default SeriesList;
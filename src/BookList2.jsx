// const data1={
//     title:"let us see",
//     author:"denis ritchie",
//     imglink:"",
//     price:345,


// };
// const data2={
//     title:"THE EVERYDAY AUTHOR",
//     author:"denis ritchie",
//     imglink:"",
//     price:345,
// };
// const data3={
//     title:"THE EVERYDAY AUTHOR",
//     author:"denis ritchie",
//     imglink:"",
//     price:365,
// };
// const data4={
//     title:"THE EVERYDAY AUTHOR",
//     author:"denis ritchie",
//     imglink:"",
//     price:396,
// };
// const data5={
//     title:"THE EVERYDAY AUTHOR",
//     author:"denis ritchie",
//     imglink:"",
//     price:323,
// };
// const data6={
//     title:"THE EVERYDAY AUTHOR",
//     author:"denis ritchie",
//     imglink:"",
//     price:323,
// };


// function BookList2(){        //rafce for shortcut
//     return (
//         <>
//         <div>
//         <h1>best selling books</h1>
//         </div>
        
        
    
//     <div className="booklist">
//     {/* <h1>best selling books</h1> */}
    
//     <Book data={data1}/>
//     <book
//         title={data1.title}
//         author={data1.author}
//         image={data1.img}
//         price={data1.price}
        
        
//         />
//     <Book data={data2}/>
//     <book
//         title={data2.title}
//         author={data2.author}
//         image={data2.img}
//         price={data2.price}
        
        
//         />
//     <Book data={data3}/>
//     <book
//         title={data3.title}
//         author={data3.author}
//         image={data3.img}
//         price={data3.price}
        
        
//         />
//     <Book data={data4}/>
//     <book
//         title={data4.title}
//         author={data4.author}
//         image={data4.img}
//         price={data4.price}
        
        
//         />
//     <Book data={data5}/>
//     <book
//         title={data5.title}
//         author={data5.author}
//         image={data5.img}
//         price={data5.price}
        
        
//         />
    


                                     
//     {/* <Book/>;
//     <Book/>;
//     <Book/>; */}
    
//     </div> 
//     </> 
//     )  //to return 2 books add book again using fragement
// };
// function Book({data}){
//     return(  
//         <div className="book">
//             <h2>{data.title}</h2>
//             <img src={data.imglink}/>
//             <h2>{data.author}</h2>
//             <h3>{data.price}</h3>
//         </div>                             //fragment is used....or div can also be used
        
//     );
// };

// // const Title=() => <h1>Title</h1>
// // function Title(){
// //     return <h1>The Everyday Hero</h1>
// // };
// // function Author(){
// //     return <h1>Author</h1>
// // };
// // function Image(){
// //     return <img src="https://m.media-amazon.com/images/I/815tOaVXmHL._SY466_.jpg"></img>
// // };
// // function Price(){
// //     return <h1>$35</h1>
// // };
// // const Image=() =>{           CAN ALSO DONE WITH ARROW FUNCTION
// //     return <h2>image</h2>
// // }
// export default BookList2;



              //METHOD 2
const data=[{
    
    title:"The C Programming Language",
    author:"Dennis Ritchie",
    imglink:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8Dgm-aXLHZXzIMSPDDMxr8_gyE29FfavKUCVNume1Py5YYTLr0jkYHHsYROStmKsDh-NY2ds4DAU72UREG-WDT6h0aysl9Fo1liLBYbkE2o6Np38AFUfc&usqp=CAE",
    price:345,


},
 {  
    title:"IT ENDS WITH US",
    author:"Colleen Hoover",
    imglink:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3yRFcprRj7VwNBTloHp_UtamD1aidNpP4J-Fma8i2W39tDrisETol4r7Xb_gk_ZG6ndyAShF37NQ5LASATiKJJv10K1UjcTUXwAenLkYS&usqp=CAE",
    price:296,
},
{   
    title:"ATOMIC HABITS",
    author:"James Clear",
    imglink:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwCF8bH2ONiYdUzVCLmZ6DZrmdyiHrDSb7KeCtslsO0NGF8F7oA_-cpaMS19_r0MYMe-eSe3KoWukEh3A3Aob81DYHTWJqC9E-CQKyYEnhAUHC9DisKC1U&usqp=CAE",
    price:194,
},
{   
    title:"Happy Place",
    author:"Emily Henry",
    imglink:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSRu_-oN3RjQ3n56jlHkUKdaTpMI0MT7M0NLg8EYyorJ_RFy9fQ1UJp4Pt6FDIS-C2D-9oBaOpvCsQsbMWZEidZqNxELalvnF0VhGKksB4pG_ElwFBPN2gd&usqp=CAE",
    price:222,
},
{   
    title:"Verity",
    author:"Colleen Hoover",
    imglink:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8CiPg7QCfYYnFprzMXAu0v3oBO68d7awP61Eg0nNZwXeo_HUaLf4I6nn6YpSgqaMGT7CaAruu474gcnmjp0izlchyb7RnP9Dlw8Q-8GaW&usqp=CAE",
    price:130,
},
]



// const BookList2 =()=>{
//     return (
//         <div className="booklist2">
            
//             {
//                 bookdata.map((b)=>{
//                   <Book {...b} key={b.id}/>})
//                 }
         
//         </div>
//     );
// };
const BookList2 = () => {
    return (
        <>
        <div>
            <h1>best selling books</h1>
        </div>
        <div className='booklist'>
            <Book 
            title={data[0].title}
            author={data[0].author}
            imglink={data[0].imglink}
            price={data[0].price}
             />
             
             <Book {...data[1]}/>
             <Book {...data[2]}/>
             <Book {...data[3]}/>
             <Book {...data[4]}/>
          
        </div>
        </>
    );
}

//const Book = (props) => {
    //     console.log(props);
    //     return (
    //         <div className='book'>
    //             <h2>{props.title}</h2>
    //             <img src={props.imglink}/>
    //             <h2>{props.author}</h2>
    //             <h3>{props.price}</h3>
                
    //         </div>
    //     );
    // }
    
   const Book=({author,title,price,imglink})=>{ 
    
    return(  
        <div className="book">
            <h2>{title}</h2>
            <img src={imglink}/>
            <h2>{author}</h2>
            <h3>{price}</h3>
        </div>                             //fragment is used....or div can also be used
        
    );
   }

export default BookList2;





//5 SERIES


const dummy = (blogs) => {
    // ...
    return 1;
  }

const totalLikes = (blogs) =>{


    const result = blogs.reduce((sum,obj)=>{
        return sum+obj["likes"]
    },0)

    return result;
}

const favoriteBlog = (blogs) => {
    let maxLikes = 0;
    let favBlog ={
        title:'',
        author:'',
        likes:0
    } ;
    const result = blogs.forEach(obj => {
        
        if (maxLikes < obj["likes"]) {
            maxLikes  = obj["likes"] 
            favBlog = {
                title:obj.title,
                author:obj.author,
                likes:obj.likes
            }
        }
    })
    return favBlog
}

const mostBlogs =(blogs) =>{
    let maxBlog =0;
    let maxAuthor = "";
    
   const authorsWithBlog =   blogs.reduce((allAuthors,blog ) =>{
        if (blog.author in allAuthors)
        {allAuthors[blog.author]++}
        else {
            allAuthors[blog.author]=1
        }
        return allAuthors
    },{})
    //console.log(authorsWithBlog)
    const authorList = Object.keys(authorsWithBlog) 
    
    authorList.forEach(element =>{
        if (maxBlog <authorsWithBlog[element]) {
            maxBlog =authorsWithBlog[element]
            maxAuthor = element
        }
        
    })
    
    const mostBloger = {
        author: maxAuthor,
        blogs: maxBlog
    }
    //console.log(mostBloger)
    
    return mostBloger
}
const mostLikes =(blogs) =>{
    let maxLikes =0;
    let maxAuthor = "";
    
   const authorsWithBlog =   blogs.reduce((allAuthors,blog ) =>{
        if (blog.author in allAuthors)
        {allAuthors[blog.author]=allAuthors[blog.author]+blog.likes}
        else {
            allAuthors[blog.author]=blog.likes
        }
        return allAuthors
    },{})
    //console.log(authorsWithBlog)
    const authorList = Object.keys(authorsWithBlog) 
    
    authorList.forEach(element =>{
        //console.log(element)
      //  console.log(authorsWithBlog[element])
        //if (maxBlog<element[object.keys(element)[0]])
        if (maxLikes <authorsWithBlog[element]) {
            maxLikes =authorsWithBlog[element]
            maxAuthor = element
        }
        
    })
    
    const mostLi = {
        author: maxAuthor,
        likes: maxLikes
    }
    //console.log(mostLi)
    
    return mostLi

}
  
  module.exports = {dummy,totalLikes, favoriteBlog, mostBlogs,mostLikes}
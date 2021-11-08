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
  
  module.exports = {dummy,totalLikes, favoriteBlog}
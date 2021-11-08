const listHelper = require('../utils/list_helper')

test ('dummy returns one', ()=>{
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})


describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]

    const listWithMultipleBlog =[
        {
            "_id": "617714ac00e97086d7d799e8",
            "title": "The Third Man: Life at the Heart of New Labour",
            "url": "https://www.amazon.co.uk/dp/B004PGMXL4/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
            "likes": 25,
            "__v": 0
          },
          {
            "_id": "6177150800e97086d7d799ea",
            "title": "The Third Man: Life at the Heart of New Labour",
            "author": "Peter Mandelson",
            "url": "https://www.amazon.co.uk/dp/B004PGMXL4/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
            "likes": 25,
            "__v": 0
          },
          {
            "_id": "617847d87235ae395c4bc583",
            "title": "En oväntad vänskap",
            "author": "Abdel Sellou",
            "url": "https://www.bokus.com/bok/9789173873864/en-ovantad-vanskap/",
            "likes": 255,
            "__v": 0
          }
    ]

    
    test ('of empty list is zero',()=>{
        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })
  
    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      //console.log(listWithOneBlog[0].likes)
    
   // console.log(listWithOneBlog[0][likes])

      expect(result).toBe(5)
    })

    test('of a bigger list is calculated right', ()=>{
        const result = listHelper.totalLikes(listWithMultipleBlog) 
        expect(result).toBe(305);
    })
  })
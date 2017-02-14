angular.module('app').service('svc', function(){

this.info = [
    {
        page: 1,
        info: 'hey look, a mountain! huzzah!',
        image: 'https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg'
    },
    {
        page: 2,
        info: 'hey look, the beach! huzzah!',
        image: 'http://www.publicdomainpictures.net/pictures/150000/velka/tropical-beach-1454007190ZAK.jpg'
    }
]

this.getInfo = function(page){
    return this.info.filter(function(item){
        return item.page === Number(page);
    })[0];
}

this.test = 'this is a test'
    
})
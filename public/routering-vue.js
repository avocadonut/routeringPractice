(function(){
    
    var routeringVue = new Vue({
    
        el: '#routering',

        methods : {
            page(url){
            window.location.href = url
                }
        }
    })    

    
})();
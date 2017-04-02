// custom filter for reverse order
app.filter('ReverseOrder',function() {
    return function(items){
        return items.slice().reverse()
    }
})

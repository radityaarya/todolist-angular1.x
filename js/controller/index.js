// main controller
app.controller('MainController', function($scope) {
    // GET all data
    $scope.dataList = JSON.parse(localStorage.getItem("todolist")),

    // POST new data
    $scope.addNew = function() {
        if ($scope.addForm !== '') {
            var existingData = JSON.parse(localStorage.getItem("todolist"))

            existingData === null ? existingData = [] : JSON.parse(localStorage.getItem("todolist"))

            existingData.push({index: existingData.length + 1 , subject: $scope.addForm})
            localStorage.setItem("todolist", JSON.stringify(existingData))

            $scope.dataList = JSON.parse(localStorage.getItem("todolist"))
            $scope.addForm = ''
        }
    }

    // DELETE data
    $scope.remove=function(item){
        var existingData = JSON.parse(localStorage.getItem("todolist"))
        var index = $scope.dataList.indexOf(item)

        existingData.splice(index,1);
        localStorage.setItem("todolist", JSON.stringify(existingData))

        $scope.dataList = JSON.parse(localStorage.getItem("todolist"))
   }
})

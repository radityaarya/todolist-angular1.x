app.controller('MainController', function($scope) {
    $scope.dataList = JSON.parse(localStorage.getItem("todolist")),

    $scope.addNew = function() {
        if ($scope.addForm !== '') {
            var existingData = JSON.parse(localStorage.getItem("todolist"))

            existingData === null ? existingData = [] : JSON.parse(localStorage.getItem("todolist"))

            existingData.push({subject: $scope.addForm})
            localStorage.setItem("todolist", JSON.stringify(existingData))

            $scope.dataList = JSON.parse(localStorage.getItem("todolist"))
            $scope.addForm = ''
        }
    }
})

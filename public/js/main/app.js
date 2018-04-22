var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController",['$scope','svTodos',function ( $scope, svTodos) {

    $scope.appName = "To do list";
    $scope.formData= {};
    $scope.loading=true;
    //console.log(svTodos.get());
    // $scope.listtodo = [
    //     {
    //         text:"Khởi tạo",
    //         isDone: true
    //     },{
    //         text :"Cài đặt ",
    //         isDone: true
    //     },{
    //         text:"Tạo services,binding ",
    //         isDone:false
    //     },{
    //         text:"Hoàn thành",
    //         isDone:true
    //     }
    // ];
    // console.log($scope.listtodo.data);
    //     //Load data from api
    $scope.listtodo=[];
    svTodos.get().then(function (data) {
        $scope.loading= false;
        $scope.listtodo=data.data;
    });



    $scope.createTodo = function () {
        $scope.loading=true;
        var todo={
        text: $scope.formData.text,
        isDone: false
    }
        svTodos.create(todo).then(function (data) {
            $scope.listtodo=data.data;
            $scope.formData.text="";
            $scope.loading=false;
        })
        $scope.loading=false;
    }

    $scope.updateTodo= function (todo){
        console.log("Update todo: ",todo);
        $scope.loading = true;

        svTodos.update(todo).then(function (data) {
            $scope.listtodo = data.data;
            $scope.loading = false;
        })
    }

    $scope.deleteTodo= function (todo){
        console.log("Delete todo: ",todo);
        $scope.loading = true;

        svTodos.delete(todo._id).then(function (data) {
            $scope.listtodo=data.data;
            $scope.loading = false;

        })
    }
}]);
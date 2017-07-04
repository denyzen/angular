
//create a module using the Angular objects module() method

var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  $scope.newTodo = '';


  $scope.todos = [
     
    'Do Units 10 and 11',
    'Meeting on 12th Julyl'
  ];

   $scope.add = function(newListItem) {
    if (newListItem.which && newListItem.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  
  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };
  
  
  };
});

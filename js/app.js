var app = angular.module("App", ["firebase"]);


app.controller("Ctrl", function ($scope, $firebaseArray) {
  
  $scope.addFuncionario = function() {
    var ref = new Firebase("https://crud-9011c.firebaseio.com/Funcionario");
    $scope.funcionario = $firebaseArray(ref);
    $scope.funcionario.$add({
      FUNC_CODE: $scope.newCodeFunc,
      FUNC_NOME: $scope.newNome,  
      FUNC_CPF: $scope.newCPF,
      FUNC_DT_NASCIMENTO: $scope.newDTNascimento,
      FUNC_DEPTO: $scope.newFuncDepto,
      FUNC_DT_CONTRATACAO: $scope.newDTContratacao,
      FUNC_SALARIO: $scope.newSalario,
      FUNC_CARGO: $scope.newCargo
    });
  };
    
    $scope.addDepartamento = function(){
     var ref = new Firebase("https://crud-9011c.firebaseio.com/Departamento");
     $scope.departamento = $firebaseArray(ref);
       $scope.departamento.$add({
       DEPTO_CODE: $scope.newDeptoCode,
       DEPTO_DESCRICAO: $scope.newDescricao,
       DEPTO_RAMAL: $scope.newDeptoRamal
       });
    };
    
    $scope.addCargo = function(){
     var ref = new Firebase("https://crud-9011c.firebaseio.com/Cargo");
     $scope.cargo = $firebaseArray(ref);
      $scope.cargo.$add({
      CARGO_COD: $scope.newCargoCod,
      CARGO_DESCRICAO: $scope.newCargoDescricao,
      CARGO_NIVEL: $scope.newCargoNivel
      });
    };

  // click on `index.html` above to see $remove() and $save() in action
});

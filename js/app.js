var app = angular.module("App", ["firebase"]);



app.controller("CtrlFuncionario", function ($scope,$window, $firebaseArray) {
  var ref = new Firebase("https://crud-9011c.firebaseio.com/Funcionarios");
    $scope.funcionarios = $firebaseArray(ref);
    
   $scope.clearPage = function(){
         $scope.newCodeFund = null;
         $scope.newNome = null;
         $scope.newCPF =null;  
         $scope.newDTNascimento = null;
         $scope.newFuncDepto =null;
         $scope.newDTContratacao = null;
         $scope.newSalario = null;
         $scope.newCargo = null
    }
   
  $scope.addFuncionario = function() {
    $scope.funcionarios.$add({
      FUNC_CODE: $scope.newCodeFunc,
      FUNC_NOME: $scope.newNome,  
      FUNC_CPF: $scope.newCPF,
      FUNC_DT_NASCIMENTO: $scope.newDTNascimento,
      FUNC_DEPTO: $scope.newFuncDepto,
      FUNC_DT_CONTRATACAO: $scope.newDTContratacao,
      FUNC_SALARIO: $scope.newSalario,
      FUNC_CARGO: $scope.newCargo
    });
        $window.alert("Funcionário Salvo: "+$scope.newNome); 
        $scope.clearPage();
  };
    
 $scope.editFuncionario = function(funcionario) {
     $scope.funcionarios.$edit({
      FUNC_CODE: $scope.newCodeFunc,
      FUNC_NOME: $scope.newNome,  
      FUNC_CPF: $scope.newCPF,
      FUNC_DT_NASCIMENTO: $scope.newDTNascimento,
      FUNC_DEPTO: $scope.newFuncDepto,
      FUNC_DT_CONTRATACAO: $scope.newDTContratacao,
      FUNC_SALARIO: $scope.newSalario,
      FUNC_CARGO: $scope.newCargo
    });
        $window.alert("Funcionário Salvo: "+$scope.newNome); 
  };
        
$scope.deleteFuncionario = function(funcionario) {
    $window.alert("Funcionario Deletado"+funcionario.FUNC_NOME); 
    $scope.funcionarios.$remove(funcionario);
  };
        
 
 
});

app.controller("CtrlDepto", function ($scope,$window, $firebaseArray) {
 var ref = new Firebase("https://crud-9011c.firebaseio.com/Departamentos");
     $scope.departamentos = $firebaseArray(ref);
    $scope.clearPage = function(){
         $scope.departamento.DEPTO_CODE = null;
         $scope.departamento.DEPTO_DESCRICAO = null;
         $scope.departamento.DEPTO_RAMAL =null;    
    }
    
   $scope.addDepartamento = function(){
       $scope.departamentos.$add({
       DEPTO_CODE: $scope.departamento.DEPTO_CODE,
       DEPTO_DESCRICAO: $scope.departamento.DEPTO_DESCRICAO,
       DEPTO_RAMAL: $scope.departamento.DEPTO_RAMAL
       });
      
        $window.alert("Departamento Salvo: "+$scope.departamento.DEPTO_DESCRICAO);
        $scope.clearPage();
    };
    
        $scope.deleteDepartamento = function(departamento) {
        $scope.departamentos.$remove(departamento);
        $window.alert("Departamento Deletado"+departamento.DEPTO_DESCRICAO); 
    };
    
    $scope.editDepartamento=function(departamento){
    $scope.departamento=departamento
  }
   
});

app.controller("CtrlCargo", function ($scope,$window, $firebaseArray) {   
  var ref = new Firebase("https://crud-9011c.firebaseio.com/Cargos");
     $scope.cargos = $firebaseArray(ref);
     $scope.clearPage = function(){
         $scope.newCargoCod = null;
         $scope.newCargoDescricao = null;
         $scope.newCargoNivel =null;    
     };
    
    $scope.addCargo = function(){
      $scope.cargos.$add({
      CARGO_COD: $scope.newCargoCod,
      CARGO_DESCRICAO: $scope.newCargoDescricao,
      CARGO_NIVEL: $scope.newCargoNivel
      });
      $window.alert("Cargo Salvo: "+$scope.newCargoCod); 
      $scope.clearPage();
    };
        $scope.deleteCargo = function(cargo) {
        $scope.cargos.$remove(cargo);
        $window.alert("Cargo Deletado: "+cargo.CARGO_DESCRICAO); 
        
  };

        
});


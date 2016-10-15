var app = angular.module("App", ["firebase"]);



app.controller("CtrlFuncionario", function ($scope,$window, $firebaseArray) {
  var ref = new Firebase("https://crud-9011c.firebaseio.com/Funcionarios");
    $scope.funcionarios = $firebaseArray(ref);
    
   $scope.clearPage = function(){
         $scope.funcionarioForm =null;
    }
   
  $scope.addFuncionario = function(funcionarioForm) {
    $scope.funcionarios.$add(funcionarioForm);
        $window.alert("Funcionário Salvo: "+funcionarioForm.FUNC_NOME); 
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
$scope.secondClick = false;
$scope.btnEdit = "Editar";

    
 var ref = new Firebase("https://crud-9011c.firebaseio.com/Departamentos");
     $scope.departamentos = $firebaseArray(ref);
    $scope.clearPage = function(){
         $scope.departamentoForm = null;   
    };
   //adiciona departamento no array do firebase 
   $scope.addDepartamento = function(departamentoForm){
       $scope.departamentos.$add(departamentoForm);
      
        $window.alert("Departamento Salvo: "+$scope.departamentoForm.DEPTO_DESCRICAO);
        $scope.clearPage();
    };
    
        $scope.deleteDepartamento = function(departamentoForm) {
        $scope.departamentos.$remove(departamentoForm);
        $window.alert("Departamento Deletado: "+departamentoForm.DEPTO_DESCRICAO); 
    };
  
    
    $scope.editDepartamento= function(departamento,departamentoForm){
        
        if(!$scope.secondClick){
            $scope.departamentoForm = departamento;
            $scope.secondClick = true;
            $scope.btnEdit = "Salvar";
            
           $window.alert("Edite o campo acima");
       
        }else{
        $scope.departamentos.$remove(departamento);
        $scope.departamentos.$add($scope.departamentoForm);
        
       $window.alert("Departamento Atualizado: "+$scope.departamentoForm.DEPTO_DESCRICAO);
       
       $scope.secondClick = false;
       $scope.btnEdit = "Editar";
         $scope.clearPage();
        }

    };
    
    
   
});

app.controller("CtrlCargo", function ($scope,$window, $firebaseArray) {   
  var ref = new Firebase("https://crud-9011c.firebaseio.com/Cargos");
     $scope.cargos = $firebaseArray(ref);
    
     $scope.clearPage = function(){
         $scope.cargoForm= null;   
     };
    
    $scope.addCargo = function(cargoForm){
      $scope.cargos.$add(cargoForm);
      $window.alert("Cargo Salvo: "+cargoForm.CARGO_DESCRICAO); 
      $scope.clearPage();
    };
        $scope.deleteCargo = function(cargo) {
        $scope.cargos.$remove(cargo);
        $window.alert("Cargo Deletado: "+cargo.CARGO_DESCRICAO); 
        
  };

        
});


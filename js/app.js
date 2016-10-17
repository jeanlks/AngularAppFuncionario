var app = angular.module("App", ["firebase"]);
 

app.controller("CtrlFuncionario", function ($scope,$window, $firebaseArray) {
  $scope.btnEdit = "Editar";
  $scope.secondClick = false;
    
  //Conexão com Firebase  
  var ref = new Firebase("https://crud-9011c.firebaseio.com/Funcionarios");
  var refCargos = new Firebase("https://crud-9011c.firebaseio.com/Cargos");
  var refDepartamentos = new Firebase("https://crud-9011c.firebaseio.com/Departamentos");
  $scope.funcionarios = $firebaseArray(ref);
  $scope.departamentos = $firebaseArray(refDepartamentos);
  $scope.cargos = $firebaseArray(refCargos);

  
  $scope.clearPage = function(){
         $scope.funcionarioForm =null;
  }
  $scope.orderByFunction = function(funcionario){
    return parseInt(funcionario.FUNC_COD);
  };
    
  $scope.addFuncionario = function(funcionarioForm) {
    $scope.funcionarios.$add(funcionarioForm);
        $window.alert("Funcionário Salvo: "+funcionarioForm.FUNC_NOME); 
        $scope.clearPage();
  };
             
  $scope.deleteFuncionario = function(funcionario) {
    $scope.funcionarios.$remove(funcionario);
    $window.alert("Funcionario Deletado"+funcionario.FUNC_NOME); 
    
  };
        
  $scope.editFuncionario = function(funcionario,funcionarioForm){
     if(!$scope.secondClick){
        $scope.funcionarioForm = funcionario;
        $scope.secondClick = true;
        $scope.btnEdit = "Salvar";
        $window.alert("Edite os campos acima");
       
        }else{
             $scope.funcionarios.$remove(funcionario);
             $scope.funcionarios.$add($scope.funcionarioForm);
             $window.alert("Funcionario Atualizado: "+$scope.funcionarioForm.FUNC_NOME);
             $scope.secondClick = false;
             $scope.btnEdit = "Editar";
             $scope.clearPage();
        }};
    
 
});

app.controller("CtrlDepto", function ($scope,$window, $firebaseArray) {
    $scope.secondClick = false;
    $scope.btnEdit = "Editar";
    
//Conexão com banco
var ref = new Firebase("https://crud-9011c.firebaseio.com/Departamentos");
    $scope.departamentos = $firebaseArray(ref);
    $scope.clearPage = function(){
         $scope.departamentoForm = null;   
    };
    
$scope.orderByFunction = function(departamento){
    return parseInt(departamento.DEPTO_CODE);
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
            $window.alert("Departamento Atualizado: "+departamentoForm.DEPTO_DESCRICAO);
            $scope.secondClick = false;
            $scope.btnEdit = "Editar";
            $scope.clearPage();
        }

    };
    
    
   
});

app.controller("CtrlCargo", function ($scope,$window, $firebaseArray) {   
    $scope.secondClick = false;
    $scope.btnEdit = "Editar";
    
    var ref = new Firebase("https://crud-9011c.firebaseio.com/Cargos");
    $scope.cargos = $firebaseArray(ref);
    
 $scope.clearPage = function(){
      $scope.cargoForm= null;   
     };
    
 $scope.orderByFunction = function(cargo){
    return parseInt(cargo.CARGO_COD);
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
    
 $scope.editCargo= function(cargo,cargoForm){
    if(!$scope.secondClick){
            $scope.cargoForm = cargo;
            $scope.secondClick = true;
            $scope.btnEdit = "Salvar";
            $window.alert("Edite os campos acima");
       }else{
            $scope.cargos.$remove(cargo);
            $scope.cargos.$add($scope.cargoForm);
            $window.alert("Cargo Atualizado: "+cargoForm.CARGO_DESCRICAO);
            $scope.secondClick = false;
            $scope.btnEdit = "Editar";
            $scope.clearPage();
        }

    };
            
});


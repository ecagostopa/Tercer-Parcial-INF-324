<?php
	/*
		Web Service RESTful en PHP con MySQL (CRUD)
		Marko Robles
		Códigos de Programación
	*/
	include 'conexion.php';
	
	$pdo = new Conexion();
	
	//Listar registros y consultar registro
	if($_SERVER['REQUEST_METHOD'] == 'GET'){

		if (isset($_GET["id"]))
		{
			$sqlp="SELECT * FROM alumno where id=:id";
			$sql = $pdo->prepare($sqlp);
			$sql->bindValue(':id', $_GET["id"]);
			$sql->execute();
			$sql->setFetchMode(PDO::FETCH_ASSOC);
			echo json_encode($sql->fetchAll());
			header("HTTP/1.1 200 hay datos");		
			exit;		
		}
		else
		{
			$sqlp="SELECT * FROM alumno";
			$sql = $pdo->prepare($sqlp);
			$sql->execute();
			$sql->setFetchMode(PDO::FETCH_ASSOC);
			echo json_encode($sql->fetchAll());
			header("HTTP/1.1 200 hay datos");
			exit;		
		}	
	}
	
	//Insertar registro
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
		$sqlp="insert into alumno values(:id,:nombre,:carrera)";
		$sql = $pdo->prepare($sqlp);
		$sql->bindValue(':id', $_GET["id"]);
		$sql->bindValue(':nombre', $_GET["nombre"]);
		$sql->bindValue(':carrera', $_GET["carrera"]);
		$sql->execute();
		echo json_encode('Realizado');
		header("HTTP/1.1 200 ejecucion correcta");
		exit;
	}
	
	//Actualizar registro
	if($_SERVER['REQUEST_METHOD'] == 'PUT')
	{
		$sqlp="update alumno set nombre=:nombre where id=:id";
		$sql = $pdo->prepare($sqlp);
		$sql->bindValue(':id', $_GET["id"]);
		$sql->bindValue(':nombre', $_GET["nombre"]);
		$sql->execute();
		echo json_encode('realizado');
		header("HTTP/1.1 200 ejecucion correcta");
		exit;		
	}
	
	//Eliminar registro
	if($_SERVER['REQUEST_METHOD'] == 'DELETE')
	{
		$sqlp="delete from alumno where id=:id";
		$sql = $pdo->prepare($sqlp);
		$sql->bindValue(':id', $_GET["id"]);
		$sql->execute();
		echo json_encode('realizado');
		header("HTTP/1.1 200 ejecucion correcta");
		exit;
	}
	
	header("HTTP/1.1 400 Bad Request");
?>
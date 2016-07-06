<meta charset="utf-8">
<?php
	include_once('config.php');
	$name=$_POST["name"];
	$pwd=$_POST["pwd"];
	$Rpwd=$_POST["Rpwd"];
	$email=$_POST["email"];
	$tel=$_POST["tel"];
	$sql="INSERT INTO user( uname, upassword, email, phone, Rpwd) VALUES ('$name','$pwd','$email','$tel','$Rpwd') ";
	if(mysql_query($sql)){
		echo "<script>
			alert('注册成功');
			location.href='index.php';
		</script>";
	}
?>
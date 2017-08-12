<?php
 header("Content-type:text/html;charset=gb2312");//防止返回的中文乱码
 $name=$_POST['username'];
 $pwd=$_POST['password'];
 $imagecode=$_POST['code'];
 if(($name == "李姝怡")&&($pwd == "123")){
   echo "{'result':true,'info':'登陆成功!'}"
 }else if($name == "李姝怡"){
   echo "{'result':false,'info':'密码错误!'}";
 }
 
?>
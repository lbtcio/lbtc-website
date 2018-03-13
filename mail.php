  <?php 
  if (isset($_POST['name']))  {
  
  //Email information
  $to = "contact@chainfunder.org";
  $email = $_POST['email'];
  $name = $_POST['name'];
  $company = $_POST['company'];
  $position = $_POST['position'];
  $message = $_POST['message'];
  
  //send email
  if (mail($to, "[千方基金联系我们 - $name]", "公司：$company 职位：$position 消息：$message", "From:" . $email)){
    echo "发送成功！";
  } else{
    echo "发送失败！";
  }
  }

?>
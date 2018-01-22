<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ada's Poetry Engine</title>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link href="styles/style.css" rel="stylesheet" type="text/css">
  </head>
  <body>

    <img src="images/ada_nopipe_5.gif" width="300" height="300" alt="Artistic credit to Sydney Padua, Ada aficionado and author of the graphic novel: The Thrilling Adventures of Lovelace and Babbage.">

    <br>
    <br>
    <br>
    <br>

    <div class="container">
      <div class="text"></div>
    </div> <br>

    <br>
    <br>

<?php
  // Define database settings
  $db_host = "127.0.0.1";
  $db_user = "poetry";
  $db_pass = "136ikx4k3255fin9";
  $db_name = "poetry";
  // Attempt to connect to the database
  $mysqli = new mysqli($db_host,$db_user,$db_pass,$db_name);
  if( $mysqli->connect_errno ) {
    // Connection to local database failed
    // Display warning message in html and cease execution
?>
<center>
  <p> Connection to database failed </p>
  <p> Please contact system administrator for advice </p>
</center>
<?php
    exit;
  }

  // Has the save action been requested in the URL?
  if( isset($_GET['save']) ) {
    // Get the contents of the text box
    $poem=$_GET['PoemTxt'];
    // Is the text box empty?
    if( empty($poem) ) {
      $message="Saving failed \\n\\nYou did not enter a poem!";
    } else {
      // We have a poem....
      // Check that we don't already have this poem saved..
      $result = $mysqli->query("SELECT id FROM poems WHERE poem='".$mysqli->real_escape_string($poem)."'");
      if( $result->num_rows != "0" ) {
        // We have this poem already... tell the user which number it is saved as
        $id=$result->fetch_array(MYSQLI_ASSOC);
        $message="This poem is already saved as poem number ".$id["id"]." \\n\\nPlease rember this number as you will need it to load your poem";
      } else {
        // Sanitize it and drop it into the database;
        $mysql_cmd="INSERT INTO poems (poem) VALUES ('".$mysqli->real_escape_string($poem)."')";
        $result = $mysqli->query($mysql_cmd);
          if ( $mysqli->error ) {
          // An error occurred...
          $message="Saving failed \\n\\nContact the System Administrator for advice";
        } else {
          $message="Your poem has been saved! \\n\\nYour poem number is ".$mysqli->insert_id." \\n\\nPlease rember this number as you will need it to load your poem";
        }
      }
    }
    // Display message using javascript
?>
<script type="text/javascript">
  alert("<?php print $message ?>");
</script>
<?php
    // End of Save conditional
  }

  // Has the save action been requested in the URL?
  if( isset($_GET['load']) ) {
    // Has the user selected a poem?
    if( empty($_GET['poem']) ) {
      // No poem selected.... warn the user using javascript
?>
<script type="text/javascript">
  alert("No poem selected to load");
</script>
<?php
    } else {
      // Get the poem from the database
      $result = $mysqli->query("SELECT poem FROM poems WHERE id='".$_GET['poem']."'");
      $row=$result->fetch_array(MYSQLI_ASSOC);
      $poem=$row["poem"];
    }      
  }
?>

<form id="poem">
  <table>
    <tr>
      <td>Enter your poem here:</td>
    </tr>
    <tr>
      <td colspan="2">
        <textarea name="PoemTxt" cols="80" rows="5" maxlength="10000"><?php if( isset($poem) ) { print $poem; } ?></textarea>
      </td>
    </tr>
    <tr>
      <td>
        <button type="submit" name="save">Save</button>
      </td>
      <td style="text-align:right">
        <button type="submit" name="run">Generate new poem</button>
      </td>
    </tr>
  </table>
</form>

<form id="load">
  <table>
    <tr>
      <td>Retrieve your poem:</td>
    </tr>
    <tr>
      <td>
        <select name="poem" form="load">
          <option value=""><i>Select poem to load from the list</i></option>
<?php
  // Populate dropdown list from entries in the database
  $mysql_cmd="SELECT * FROM poems ORDER BY id";
  $result = $mysqli->query($mysql_cmd);
  while ( $row = $result->fetch_array(MYSQLI_ASSOC) ) {
    print("          <option value=".$row["id"]."> # ".$row["id"]." - ".substr(str_replace("\n"," ",$row["poem"]),0,50)."</option>\n");
  }
?>
        </select>
      </td>
      <td>
        <button type="submit" name="load">Load</button>
      </td>
    </tr>
  </table>
</form>


    <script src="scripts/main.js"></script>
    <script src="scripts/scramble.js"></script>

 </body>
</html>

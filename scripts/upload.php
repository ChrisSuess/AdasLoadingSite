<?php
    flush();
    // Create a temporary working directory
    exec("/bin/mktemp -d --tmpdir=/var/www/coco.pharm.nottingham.ac.uk/work",$output);
    $work_dir=$output[0];
    // Define input and output filenames and their locations
    $inname=basename($_FILES["coordinateFile"]["name"]);
    $outname=str_replace(".pdb", "_CoCo.pdb", $inname);
    $logname=str_replace(".pdb", ".log", $inname);
    $downname=uniqid().".zip";
    $infile=$work_dir."/".$inname;
    $outfile=$work_dir."/".$outname;
    $logfile=$work_dir."/".$logname;
    $repfile=$work_dir."/report.php";
    $downloadfile="/var/www/coco.pharm.nottingham.ac.uk/downloads/".$downname;
    $uploadOk=1;
    // Check if we are uploading a pdf file or something else
    $fileType = pathinfo($infile,PATHINFO_EXTENSION);
    if($fileType != "pdb" ) {
      $message="<p>Sorry, only pdb files are allowed</p>";
      $uploadOk=0;
    }
    // Did the upload pass our tests?a
    if ($uploadOk == 0) {
      // No... update the page accordingly
?>

<?php
      $cmd="/bin/rm -rf ".$work_dir;
      exec($cmd);
      exit;
    } else {
      // Do the upload
      if (move_uploaded_file($_FILES["coordinateFile"]["tmp_name"], $infile)) {
        // Upload successful
?>

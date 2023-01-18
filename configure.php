<?php
     
    $con=mysqli_connect("localhost","root","","ipl");
    
    if(isset($_GET['search']))
    {
        $g=$_GET['search'];
        $q="select * from ipl_team where team_name like '%$g%' ";
        $qr=mysqli_query($con,$q);

        if(mysqli_num_rows($qr)>0)
        {
            echo "<h3>Got Results</h3>";
        } 
        else
        {
            echo "<h3>No Results Found</h3>";
        }
    }

?>
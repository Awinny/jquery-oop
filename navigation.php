            <ul id="navigation">
<?php foreach($pages as $subpage) {
    // Om den eftefrågade sidan inte finns i $pages
    $page = in_array($page, $pages) ? $page : "start";
    
    $class = $subpage==$page ? ' class="active"' : "";
?>
                <li<?= $class ?>><a href="index.php?page=<?= $subpage ?>" title="<?= $subpage ?>"><?= ucfirst($subpage) ?></a></li>
<?php } ?>
            </ul>

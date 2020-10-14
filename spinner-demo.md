
<!doctype html>
<html>

<head>
    <title>Spinner Demo</title>

    <!-- bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="text/javascript">
        $(window).on('load', function() {
            $('#spinner-preloader').delay(1000).fadeOut(1000);
    });
    </script>

    <div class="d-flex justify-content-center p-5" style="height: 100px;">
        <div id="spinner-preloader">
            <div class="spinner-border" style="width: 15rem; height: 15rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>

</body>

</html>

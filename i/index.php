<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>IP</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </head>
    <body>
    <noscript>
        This page needs JavaScript to use the full functionality
    </noscript>
        <container>
            <aside>
                <ul>
                    <li>Technologies</li>
                    <li>Design</li>
                    <li>Asd</li>
                </ul>
            </aside>
            <main>
                <div>tech</div>
                <div>design</div>
                <div>asd</div>
                <button id="makeHoloMoreSus">Make holo more SUS</button>
                <label for="sus">Converting holo to SUS</label>
                <progress id="sus" max="100"></progress>
                <label for="sus"><span id="susOmeter"></span></label>
            </main>
        </container>
        <script>

            // Page load
            $( document ).ready(function() {

                // Initialize susOmeter
                let susOmeter = 0;

                // Display 0 for initial susOmeter value
                $('#susOmeter').html(susOmeter + "% complete");
                $('#sus').val(susOmeter);

                // Create audio element
                const audioElement = document.createElement('audio');
                audioElement.setAttribute('src', 'sounds/amongusSoundtrack.mp3');

                // Autoplay audio
                audioElement.play();
                audioElement.volume = 0;

                // Increase sus progress
                $("#makeHoloMoreSus").click(function () {

                    susOmeter ++;
                    $('#sus').val(susOmeter);

                    // Increase audio volume with sus %
                    audioElement.volume = susOmeter / 100;

                    // Display new sus value
                    if (susOmeter <= $('#sus').attr('max')) {
                        $('#susOmeter').html(susOmeter + "% complete");
                    } else {
                        $('#susOmeter').html("Holo sus maxed out ngl");
                    }
                })


            });


        </script>
    </body>
</html>
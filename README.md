# The Shia Loop!

A handy plugin to throw Shia Labeouf up for a little encouragement.

## Requirements

The only real requirement is jQuery.

## Useage

The most basic barebones useage is to call `Shia.loop(1000)`. That will start the loop with a Shia appearing every second. Each new Shia will appear 100 milliseconds faster.

    $("button").on("click", function() {
        Shia.loop(1000);
    });

### Audio and Image

By default, ShiaLoop will look in the assets folder for `doit_sound.mp3` and `shia.png`. You can override these with the following:

    $("button").on("click", function() {
        Shia.audio = "/path/to/audio.mp3";
        Shia.image = "/path/to/image.png";
        Shia.loop(1000);
    });

I *guess* you could use any audio and image you want to, but why would you?


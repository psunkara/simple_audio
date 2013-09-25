#Simple Audio

A simple audio recorder for the web.

**[Live Demo](https://rawgithub.com/rickcarlino/simple_audio/master/index.html)**

###Credits
This project is based heavily off of the work of [Thibault Imbert](http://typedarray.org/from-microphone-to-wav-with-getusermedia-and-web-audio/) as well as this [great talk by Chris Wilson](https://www.youtube.com/watch?v=hFsCG7v9Y4c).

###Word of Warning
**The current build is not stable**. I would avoid using it in production at the current time as performance has been inconsistent across platforms.

### Up and running

####Adding it to a page
Just download ```src/recorder.js``` to your project and require it via 

```html
<script type="text/javascript" src="src/recorder.js"></script>
```

#### Cloning and Forking
 1. Clone / fork this repo
 2. install static-here via ```npm install static-here```. If you don't have Coffeescript installed, you will need to install it via ```sudo npm install -g coffee-script```.
 3. Run ```cake dev```. This will autocompile coffeescript and serve static files at [http://localhost:8888](http://localhost:8888).
 4. Take a look at [http://localhost:8888/index.html](http://localhost:8888/index.html) and [http://localhost:8888/SpecRunner.html](http://localhost:8888/SpecRunner.html).

###Examples:

####Record a file:

```coffeescript
voice = new Recording()
voice.start()
```

####Stop Recording:

```coffeescript
voice.stop()
```

####Reference the File
returns a [URL Object](https://developer.mozilla.org/en-US/docs/Web/API/window.URL)

```coffeescript
voice.file()
```
The example above makes it possible to pin the return value to a link or post to the server via AJAX.

####Download the File Locally

```coffeescript
voice.download()
```

Optionally, you may specify a filename for the download.

```coffeescript
voice.download('whatdoesthefoxsay.wav')
```

# TailsMusicServer
The server and client code for Tails1154 Music (Originally Tails2012tim Music)
I revived the server lol
## Server Setup
Make sure you have `npm` and `node` installed.
Next, clone the git repo using `git clone https://github.com/tails1154/tailsmusicserver`
Now, run `cd tailsmusicserver`
Almost done! now run `npm install`
Finally, run `npm start`
You don't have to run all of this after you run the `npm install`. just use `npm start`
## Client Setup
This is horribly set up. I was not that good at api nonsense, same thing with the api. I just removed "login" all together from the server and made it think it was logged in.
First, go to `https://ai2.appinventor.mit.edu`
Then sign in blah blah blah
Now when you get to the home screen, click "Projects" then "Import project (.aia) from my computer ..." and select the aia file
And now for the annoying part. You have to change EVERY SINGLE API ENDPOINT CALL URL to YOUR IP. I know. Annoying.
Then, you can build it, install it on a phone, and your done.
## Adding songs
only .mp3 files are supported but ok.
go to this spot in the code:
```
    else if (pathName === "/catalog") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("test,retro");
    }
```
where you see "`res.end("test,retro");`", put a comma after "`retro`" and put your mp3 name WITHOUT THE .MP3 EXTENSION
and now add your mp3 into the root directory of the project.
Done! :D

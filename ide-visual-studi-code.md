# VS Code (Visual Studio Code)

VS Code is a free ide ([integrated development environment](https://en.wikipedia.org/wiki/Integrated_development_environment)) by microsoft.
It is very well suited for web development (development of html, css and js files).

## install/setup VS Code

1. install from the official website ([windows](https://code.visualstudio.com/docs/setup/windows) / [mac](https://code.visualstudio.com/docs/setup/mac))
1. add extension "HTMLHint" (validate your html-syntax): extension symbol (left) > search "HTMLHint" > install "HTMLHint"
1. add extension "prettier" (auto-format your files): extension symbol (left) > search "prettier" > install "Prettier - Code formatter"
1. add extension "Live Server" (reload browser on save): extension symbol (left) > search "Live Server" > install "Live Server"

### open a project with VS Code

1. create a new folder (whereever you want, name of the folder is not imprtant)
1. inside the folder create a new file called `index.html` (name is important!)
1. open VS Code
1. open the created folder (File > open Folder)

### setup pretter-extension

After you have installed the extension, you can format the code with `Shift` + `Alt` + `F` (try it out!).

For auto-formatting your code on saving the file (recommended!), you have to edit your settings: File > Preferences > Settings > search "format on save" > enable it

If you want, you can also enable auto saving (File > Preferences > Settings > search "auto save" > change to onFocusChange (or whatever you want).

### use Live Server (VS Code Extension)

Open your `index.html`-file in vs code and on the bottom of the window (inside the blue bar), click "Go Live". The browser automatically opens the url [http://127.0.0.1:5500/index.html](http://127.0.0.1:5500/index.html).

> http://127.0.0.1:5500/index.html is an url, where `127.0.0.1` is your local machine (also called "localhost") and `5500` is a custom [port-number](https://en.wikipedia.org/wiki/Port_(computer_networking))

Live Server creates a so called "development server" on your local machine, which behaves like a webserver and automatically reloads, when you change a file.

## VS Code Shortcuts

The ide was built so that it can be operated completely without a mouse!
You spend 4-12 hours a day with your ide as a programmer, on average at least 30 hours a week. With 35 working weeks per year this is **over 1000 hours**! Not working perfectly with your ide is an incredible waste of time.

When you program, time is money (literally!), every time you use the mouse to navigate / look up something /... you get out of the flow, so always try to use the ide to its full potential and learn to use shortcuts!

[Windows keyboard shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) / [macOS keyboard shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

> pro tip: Try using "Multi-cursor" and "Multi-cursor-selection" (really, try it, now!)

## VS Code Tips and Tricks

**!HOMEWORK!**

According to what I wrote above, the following article is a MUST-READ (not in the lessons, check it out on your own at home): [Visual Studio Code Tips and Tricks by the VS Code Team](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

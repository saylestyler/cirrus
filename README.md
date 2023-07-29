# wip

uploads screenshot to cloudinary, copies url to img to clipboard then deletes the file

# how to use

1. clone the repo, install deps

```
git clone https://github.com/saylestyler/cirrus; cd cirrus; nvm use 14.20.1; npm i
```

2. add keyboard shortcut binding in your shell rc with location to script

bind shortcut to execute script, assuming it's cloned in `$HOME`, this uses f5

```zsh
bindkey -s "\e[15~" "node $HOME/cirrus/upload-and-delete.js"
```

3. source the rc file

4. add a .env file with cloudinary key values and tmp directory

```
CLOUD_NAME=
API_KEY=
API_SECRET=
MEDIA_LIBRARY_FOLDER=
SCREENSHOT_TEMP_DIR=
```

4. cd to the dir, hit your shortcut, hit enter (lol it's a wip!), drag what you want to screenshot. the file url will be in your clipboard.

# todo

- [ ] add instructions for bash/fish
- [ ] execute without any terminal output / having to be in dir
- [ ] interpolate date string into file names in event it exists
- [ ] temrminal notifier for errors
- [ ] async modularize fns vs sync behemoth
- [ ] add defaults and mkdir if dir doesn't exist
- [ ] reduce n of dependencies
- [ ] watch mode
- [ ] globally installed npm pkg with github action workflow https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages
- [ ] cute lil 3d image in readme and a trillion fire emojis
- [ ] flags for
  - [ ] not deleting
  - [ ] img transformations

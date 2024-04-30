# Sean's Portfolio

Built with Ruby on Rails and React

## Setup

#### Homebrew

1. To install our tools, run the following command

   ```sh
   brew install tmux overmind postgresql rbenv yarn
   ```

> [!IMPORTANT]  
> Our ruby version is `3.3.0`. If you do not have this, do the following setup
>
> ```sh
> # run this and follow the printed instructions
> rbenv init
>
> # then run the following and restart your terminal window
> rbenv install 3.3.0
> rbenv global 3.3.0
> ```

2. Initialize our database
   ```sh
   # in the root directory of this project
   rails db:create
   rails db:migrate
   ```
3. Start the development server
   ```sh
   # in the root directory of this project
   bin/dev
   ```

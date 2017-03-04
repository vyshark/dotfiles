set nocompatible              " be iMproved, required
filetype off                  " required
" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'kien/ctrlp.vim'
Plugin 'vim-airline/vim-airline'
Plugin 'mileszs/ack.vim'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'vim-scripts/bash-support.vim'
call vundle#end()            " required
filetype plugin indent on    " required

" color scheme of the moment:
syntax on
let g:airline_theme='powerlineish'
let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1
set number
set encoding=utf-8
set relativenumber 
set ruler
set hidden
set laststatus=2

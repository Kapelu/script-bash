#!/usr/bin/env bash

set -e

MARKER=$(basename "${BASH_SOURCE%.*}")

###############################################################################
# ThoughtBot RCM Dotfile Management
###############################################################################
# URL: https://github.com/thoughtbot/rcm
###############################################################################

NAME="RCM"

###############################################################################

# DOTFILES_REPO
# There is no default value!

###############################################################################

print_banner "$NAME" "DOTFILES_REPO=$DOTFILES_REPO"

if [ ! -f "$MARKER_DIRECTORY"/"$MARKER" ]; then
    sudo add-apt-repository universe \
    && sudo add-apt-repository multiverse \
    && sudo apt-get update \
    && sudo apt-get install -y rcm \
    && git clone "$DOTFILES_REPO" "$HOME"/.dotfiles \
    && rcup \
    && finish_install "$MARKER" "DOTFILES_REPO=$DOTFILES_REPO"
else
    already_installed "$MARKER"
fi

#!/usr/bin/env bash

set -e

MARKER=$(basename "${BASH_SOURCE%.*}")

###############################################################################
# Fix Swapfile size
###############################################################################

NAME="Swapfile"

###############################################################################

# Retrieve actual bytes of RAM
RAM_SIZE_B=$(free -b | grep -i Mem | tr -s ' ' | cut -d' ' -f 2)

# Calculate "marketing" amount of ram, e.g. 16 GB
RAM_SIZE_GB=$(echo "$RAM_SIZE_B / 1000 / 1000 / 1000" | bc)

# Ubuntu recommends RAM size plus square root of RAM size if you hibernate
NEW_SWAP_SIZE_MB=$(echo "($RAM_SIZE_GB + sqrt($RAM_SIZE_GB)) * 1024" | bc)

###############################################################################

print_banner "$NAME" "NEW_SWAP_SIZE_MB=$NEW_SWAP_SIZE_MB"

if [ ! -f "$MARKER_DIRECTORY"/"$MARKER" ]; then
    sudo swapoff /swapfile \
    && sudo rm /swapfile \
    && sudo dd if=/dev/zero of=/swapfile bs=1M count="$NEW_SWAP_SIZE_MB" \
    && sudo chmod 600 /swapfile \
    && sudo mkswap /swapfile \
    && sudo swapon /swapfile \
    && finish_install "$MARKER" "NEW_SWAP_SIZE_MB=$NEW_SWAP_SIZE_MB"
else
    already_installed "$MARKER"
fi

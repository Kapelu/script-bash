#!/bin/bash

# Log File Path
LOGFILE=/var/log/systemload.log
HOSTNAME=$(hostname)
DATE=$(date "+%d-%m-%Y")
HOUR=$(date "+%H:%M:%S")
clear
echo
echo "Hola $HOSTNAME !!!" 
echo "fecha: $DATE"
echo "hora: $HOUR"
echo
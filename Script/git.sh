#!/bin/bash
clear
FECHA=$(date "+%d-%m-%Y")
HOSTNAME=$(hostname)
n='\033[1m'
i='\033[3m'
verde='\033[32m'
amarillo='\033[33m'
azul='\033[34m'
reset='\033[0m'
clear
echo -e "$i$n$amarillo Hola $HOSTNAME !!!$reset"
git add .
estado=$(git status -s)
if [ -z "$estado" ]; then
    echo ""
    echo -e "$i$verde No hay cambios pendientes en el repositorio !!!$reset"
    echo ""
else
    git status
    echo -e "$azul Developer:$reset \c "
    read developer
    echo -e "$azul Ingresa Etiqueta:$reset \c "
    read tag
    echo -e "$azul Ingresar Commit:$reset \c "
    read commit
    echo ''
    echo ''
    git commit -m "$tag: $FECHA / $developer: $commit"
    git push
fi

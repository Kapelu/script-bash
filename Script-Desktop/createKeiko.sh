#! /bin/bash
clear
cd 
mkdir .ssh
cd .ssh
# Creacion de tadashi2023
clear
echo '                                       '
echo '     Crear usuario "keiko"            '
echo '                                       '
sleep 2

ssh-keygen -t ed25519 -C “keikotadashi.developer@gmail.com”
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '
echo '***************************************'
echo '     Creación de llave exitosa !!!     '
echo '                                       '
echo '     >>  Key Name: Keiko  <<          '
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '


# Comprobación
echo '***************************************'
echo '     Realizando Comprobación...        '
echo '                                       '
sleep 3
ls -al ~/.ssh
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '


# Evaluar si esta corriendo el servidor
echo '***************************************'
echo '     Servidor corriendo                '
echo '                                       '
eval $(ssh-agent -s)
sleep 3
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '

# Agregando la llave privada a Git
echo '***************************************'
echo '     Agregando la llave a Git          '
echo '                                       '
sleep 3
ssh-add ~/.ssh/keiko
sleep 5
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '

# Ver y copiar contenido de la llave Pública
echo '***************************************'
echo '                                       '
echo '                                       '
echo '     Copiar el contenido de la llave   '
echo '     en el archivo kapelu_rsa.pub  '
echo '          y agregarlo a Github         '
echo '                                       '
echo '                                       '
echo '                                       '
sleep 5
gedit keiko.pub
cd

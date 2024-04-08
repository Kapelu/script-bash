#! /bin/bash
clear
git config --global user.name kapelu
git config --global user.email ddaniel_calderon@hotmail.com
clear
echo '                                           '
echo '*******************************************'
echo '                                           '
echo '         Bienvenido Kapelu!!!              '
echo '                                           '
echo '*******************************************'
echo '                                           '
git config --global user.name 
git config --global user.email
echo '                                           '
echo 
sleep 5
clear
cd 
mkdir .ssh
cd .ssh
# Creacion de belero
clear
echo '                                       '
echo '     Crear usuario "kapelu"            '
echo '                                       '
sleep 2

ssh-keygen -t ed25519 -C “ddaniel_calderon@hotmail.com”
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '
echo '                                       '
echo '***************************************'
echo '     Creación de llave exitosa !!!     '
echo '                                       '
echo '     >>  Key Name: kapelu  <<          '
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
ssh-add ~/.ssh/kapelu
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
gedit kapelu.pub
cd

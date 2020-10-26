# Com emprar ESLINT per validar js

[ESLint](https://eslint.org/) statically analyzes your code to quickly find problems.

## Install eslint in VScode

Install the extension **eslint** in Vscode. Basta amb buscar-la i instal·lar-la.

## Instal·la ESLINT en el teu projecte

1. Instal·la ESLINT en la carpeta arrel del teu projecte amb 

    npm install eslint

Se crearà un fitxer package.json amb les dependències i una carpeta `node_modules`. **ATENCIÓ!**: El teu projecte ha de tenir un fitxer .gitignore on estigui indicat que la carpeta anterior no se carrega a remot.

    ./node_modules/.bin/eslint --init

Després, inicialitza el teu fitxer amb

    npm init 



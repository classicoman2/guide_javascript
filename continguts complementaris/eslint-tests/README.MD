# Com emprar ESLINT per validar js

[ESLint](https://eslint.org/) statically analyzes your code to quickly find problems.

## Install eslint in VScode

Install the extension **eslint** in Vscode. Basta amb buscar-la i instal·lar-la.

## Instal·la ESLINT en el teu projecte

He seguit les [instruccions oficials](https://github.com/eslint/eslint#installation-and-usage).

Instal·la ESLINT en la carpeta arrel del teu projecte amb 

    npm install eslint --save-dev

Se crearà un fitxer package.json amb les dependències i una carpeta `node_modules`. **ATENCIÓ!**: El teu projecte ha de tenir un fitxer .gitignore on estigui indicat que la carpeta anterior no se carrega a remot.

Després, crea un fitxer de config amb:

    ./node_modules/.bin/eslint --init

Després, hauríes d'executar això per inicialitzar un fitxer `package.json`,

    npm init 

## Prova Eslint

Després, en el directori anterior o en un subdirectori d'aquell, pots executar `eslint` amb:

    ./node_modules/.bin/eslint yourfile.js

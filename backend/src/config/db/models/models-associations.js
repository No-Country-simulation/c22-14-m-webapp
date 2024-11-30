import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { sequelize } from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const models = {};

const moduleFolders = fs.readdirSync(path.join(__dirname, '../../../modules'));

const importPromises = moduleFolders.map(async (moduleName) => {
    const modulePath = path.join(__dirname, '../../../modules', moduleName);
    const modelFilePath = path.join(modulePath, `${moduleName}.model.js`);

    if (fs.existsSync(modelFilePath)) {
        const modelURL = pathToFileURL(modelFilePath).href;
        try {
            const modelModule = await import(modelURL);
            const model = Object.values(modelModule)[0];

            if (model) {
                const modelNamePascal = moduleName[0].toUpperCase() + moduleName.slice(1)
                models[modelNamePascal] = model;
            } else {
                console.error(`El modelo ${moduleName} no es una instancia válida de Sequelize.Model`);
            }
        } catch (error) {
            console.error(`Error al importar el modelo del módulo ${moduleName}:`, error);
        }
    }
});

await Promise.all(importPromises);
console.log(models)
Object.keys(models).forEach((modelName) => {
    if (models[modelName]?.associate) {
        models[modelName].associate(models);
    }
});

export { models, sequelize };

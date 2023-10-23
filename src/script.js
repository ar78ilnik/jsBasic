// Большие проекты состоят из большого количества модулей. Отдельных файлов js. Также, к примеру, некоторые могут зависеть друг от друга. Чтобы собрать все в один файл, мы может делать это двумя способами: commonjs и AMD. AMD делает это асинхронно. Рассмотрим настройку с помощью commonjs, чтобы создавать модули автоматически.

function myModule() {
    this.hello = function () {
        return 'Hello';
    }

    this.goodbye = function () {
        return 'Goodbye';
    }
}

module.exports = myModule;

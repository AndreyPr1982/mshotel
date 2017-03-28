var mshotelControllers = angular.module('mshotelControllers', []);

mshotelControllers.controller('NavCtrl', function ($scope, $location) {
    $scope.menuItems = [
        { route: '/about', text: 'О программе' },
        { route: '/functions', text: 'Основные функции' },
        { route: '/docs', text: 'Примеры документов' },
        { route: '/demo', text: 'Демо-версия' },
        { route: '/sale', text: 'Как приобрести' },
        { route: '/contacts', text: 'Контакты' }
    ];

    $scope.isActive = function (route) {
        return route === $location.path();
    };
});

mshotelControllers.controller('AboutCtrl', function () {});

mshotelControllers.controller('FunctionsCtrl', function () {});

mshotelControllers.controller('DocsCtrl', function ($scope) {
    $scope.files = [
        'Счет для физического лица.doc',
        'Счет для юридического лица.doc',
        'Договор с ФЛ (для апарт-отелей).doc',
        'Договор с ЮЛ.doc',
        'Акт.doc',
        'Приходный кассовый ордер.doc',
        'Подтверждение бронирования.doc'
    ];
});

mshotelControllers.controller('DemoCtrl', function () {});

mshotelControllers.controller('SaleCtrl', function () {});

mshotelControllers.controller('ContactsCtrl', function () {});

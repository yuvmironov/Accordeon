Element.prototype.Accordeon = function (option) {
    //Значения опций по умолчанию
    var opt = {
        autoClose: false //Закртие при клике по другому элементу
    };
    //Получем коллекцию всех ссылок для аккордеона
    var accordLinks = this.getElementsByClassName('Accord-Link');
    //Проверяем опции
    if (option) {
        for (var key in option) {
            opt[key] = option[key];
        }
    }

    var elements = this.children;
    for (var i = 0; i < elements.length; i++) {
        var accLink = elements[i].getElementsByClassName('Accord-Link');
        accLink[0].classList.add('Accord-Link_NotActive');
        accLink[0].addEventListener('click', function (e) {
            e.preventDefault();
            if (opt.autoClose) {
                for (var i = 0; i < accordLinks.length; i++) {
                    accordLinks[i].classList.replace('Accord-Link_Active', 'Accord-Link_NotActive');
                    this.classList.replace('Accord-Link_NotActive', 'Accord-Link_Active');
                }
            } else {
                if (this.classList.contains('Accord-Link_NotActive')) {
                    this.classList.replace('Accord-Link_NotActive', 'Accord-Link_Active');
                } else {
                    this.classList.replace('Accord-Link_Active', 'Accord-Link_NotActive');
                }
            }
        });
    }
};

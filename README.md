# Accordeon
Плагин для создания аккордеона
Простейший аккордеон для вашего сайта.

## Как использовать
Для использования создайте структуру вашего аккордиона как показано ниже:
**HTML**
```
    <div id="Accord" class="Accord">
        <div class="Accord-Element">
            <a href="#" class="Accord-Link">Элемент 1</a>
            <div class="Accord-Content">Содержимое 1</div>
        </div>
        <div class="Accord-Element">
            <a href="#" class="Accord-Link">Элемент 2</a>
            <div class="Accord-Content">Содержимое 2</div>
        </div>
        <div class="Accord-Element">
            <a href="#" class="Accord-Link">Элемент 3</a>
            <div class="Accord-Content">Содержимое 3</div>
        </div>
        <div class="Accord-Element">
            <a href="#" class="Accord-Link">Элемент 4</a>
            <div class="Accord-Content">Содержимое 4</div>
        </div>
    </div>
```
**Java Script**
```
<script src="index.js"></script>
<script>
    document.getElementById('Accord').Accordeon();
</script>
```
## Используемые опции
`autoClose` - Используется для автозакрытия предыдущего открытого пункта

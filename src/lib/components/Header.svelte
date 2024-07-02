<script>
    import Logo from '$lib/source/images/logo.png'
    import { browser } from '$app/environment';

    let cartNum = undefined

    const localValue = browser && JSON.parse(localStorage.getItem("num"))

    if(localValue === null) {
        cartNum = undefined
    } else {
        cartNum = localValue
    }
</script>

<header class="header">
    <div class="header__container _container">
        <div class="header__body">
            <div class="header__logo">
                <img src="{Logo}">
            </div>
            <ul class="header__btn-wrapper">
                <li><a href="/shop">Shop</a></li>
                <li><a href="#">Виды</a></li>
                <li><a href="#">Как получить?</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <div class="header__search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <div class="header__search-panel">Поиск</div>
            </div>
            <div class="header__wrapper">
                <div class="header__profile-icon">
                    <i class="fa-solid fa-user"></i>
                </div>
                <a href="/cart" class="header__cart-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div class="{cartNum === undefined ? 'header__cart-num' : 'header__cart-num active'}">{cartNum}</div>
                </a>
            </div>
        </div>
    </div>
</header>
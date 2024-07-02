<script>
    import Logo from '$lib/source/images/logo.png'
    import { writable } from 'svelte/store';
    import { browser } from '$app/environment';

    export const Num = writable({
        id: Number
    })

    export const Cart = writable({
        name: String,
        price: String,
        url: String,
        id: 0,
    })
    
    const maxindex = browser && JSON.parse(localStorage.getItem("num"))
    let maxindexNum = parseInt(maxindex)

    let keyprefix = 'cart'
    let keyindex = 'num'

    let carts = []

    for(let i = 1; i <= maxindexNum; i++) {
        const cart = browser && JSON.parse(localStorage.getItem(keyprefix + i))

        if (cart !== null) {
            carts.push(cart);
        }
    }

    /**
     * @type {number[]}
     */
    let cartPrice = []

    carts.forEach(cart => {
        const result = parseInt(cart.price)
        cartPrice.push(result)
    });

    const resultPrice = cartPrice.reduce((acc, number) => acc + number, 0);

    let id = '';

    /**
     * @type {any[]}
     */
    const maxNum = []

    carts.forEach(cart => {
        const resultId = cart.id
        maxNum.push(resultId)
    });

    let maxId = Math.max.apply(null, maxNum)
    console.log(maxNum)

    function removeCart(id) {
        carts.forEach(cart => {
            if (cart.id === id) {
                Num.subscribe((val) => browser && localStorage.setItem(keyindex, maxindex - 1))
                Cart.subscribe((val) => browser && JSON.parse(localStorage.removeItem(keyprefix + id)))
                if (maxindexNum > maxId) {
                    maxindexNum = maxId
                } else {
                    return
                }
                location.reload();
            }  
        })
    }

</script>
<section class="cart">
    <div class="cart__container _container">
        <div class="cart__body">
            <div class="cart__heading">Корзина</div>
                <div class="cart__item-wrapper">
                    {#each carts as cart}
                        <div class="cart__item" on:click={() => (removeCart(cart.id))}>
                            <div class="cart__block">
                                <div class="cart__item-img">
                                    <img src="{cart.url}" alt="">
                                </div>
                                <div class="cart__item-name">{cart.name}</div>
                                <div class="cart__item-price">{cart.price}</div>
                            </div>
                        </div>
                    {/each}
                </div>
            <div class="cart__info">Итог: <span>{resultPrice}$</span></div>
        </div>
    </div>
</section>
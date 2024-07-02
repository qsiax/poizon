<script>
    export let data
    import { writable } from 'svelte/store';
    import { browser } from '$app/environment';

    export const cart = writable({
        name: String,
        price: String,
        url: String,
        id: 0,
    })

    export const Num = writable({
        id: Number
    })

    const updateCart = {
        name: '',
        price: '',
        url: '',
        id: 0,
    }

    let id = 0

    let keyindex = 'num'
    let keyprefix = 'cart'

    function numCartCheck(nameCart, priceCart, urlCart) {
        const index = 1 + Number(browser && localStorage.getItem(keyindex));

        updateCart.name = nameCart
        updateCart.price = priceCart
        updateCart.url = urlCart
        updateCart.id = index

        cart.subscribe((val) => browser && localStorage.setItem(keyprefix + index, JSON.stringify(updateCart)))
        Num.subscribe((val) => browser && localStorage.setItem(keyindex, index))
        location.reload();
    }
</script>

<section class="shop">
    <div class="shop__container _container">
        <div class="shop__body">
            <div class="shop__item-wrapper">
                {#each data?.records as record}
                    <div class="shop__item" on:click={() => (numCartCheck(record.name,record.price,`http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${record.image}?token=`))} >
                        <div class="shop__item-block"> 
                            <div class="shop__item-image">
                                <img src="http://127.0.0.1:8090/api/files/{record.collectionId}/{record.id}/{record.image}?token=" alt="">
                            </div>
                            <div class="shop__item-name">{record.name}</div>
                            <div class="shop__item-price">{record.price}</div>
                            <div class="shop__button"></div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
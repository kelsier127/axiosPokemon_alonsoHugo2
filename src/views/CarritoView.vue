<script setup>
import useGetData from "@/composables/fakeApiStore/UseGetData";
import { ref, computed } from "vue";

let { data } = useGetData();

let carrito = ref([]);

const addCarrito = (item) => {
    console.log(item)
    let itemAnyadido = { ...item, quantity: 1 }

    if (carrito.value.length == 0) {
        carrito.value.push(itemAnyadido);
    } else {
        for (let i in carrito.value) {
            if (carrito.value[i].id == itemAnyadido.id) {
                carrito.value[i].quantity++;
                carrito.value[i].price+=itemAnyadido.price
                break;
            } else if (i == carrito.value.length - 1) {
                carrito.value.push(itemAnyadido);
            }
        }
    }

    console.log(carrito.value);
};

const mostrarCarrito = () => {
    let carritoElement = document.querySelector(".carrito");
    carritoElement.style.display = carritoElement.style.display === "none" ? "flex" : "none";
};

const isCarritoVacio = computed(() => carrito.value.length === 0);

const quitarUno=(item)=>{
    console.log(item)
    if(item.quantity>1){
        item.price = Math.round(item.price-(item.price/item.quantity),2)
        item.quantity-=1
    }else{
        carrito.value=carrito.value.filter((element)=>element.id!=item.id)
    }
}
</script>

<template>
    <div>
        <h1>Tienda épica</h1>
        <button id="carritoDeLaCompra" class="carritoButton" @click="mostrarCarrito">Ver Carrito</button>
        <div class="carrito" style="display: none">

            <h2>Carrito</h2>
            <div>

                <div v-if="isCarritoVacio">
                    <p>El carrito está vacío</p>
                </div>
                <div class="itemContainer" v-else>
                    <div @click="quitarUno(item)" class="itemCard" v-for="item in carrito" :key="item.id">
                        <p><span>{{ item.title }}</span></p>
                        <img class="itemImage" :src="item.image" alt="Imagen del producto" />
                        <p>{{ item.price }} €</p>
                        <p>ID: {{ item.id }}</p>
                        <p>Cantidad: {{item.quantity}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="itemContainer">
            <div class="itemCard" v-for="(item, index) in data" :key="index">
                <p>
                    <span>{{ item.title }}</span>
                </p>
                <img class="itemImage" :src="item.image" alt="Imagen del producto" />
                <p>{{ item.description }}</p>
                <p>{{ item.price }} €</p>
                <p>ID: {{ item.id }}</p>
                <button @click="addCarrito(item)">Añadir al carrito</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.carrito {
    border-radius: 10px;
    background-color: rgb(55, 238, 255);
    padding: 1rem;
    margin: 1rem;
    justify-content: center;
    flex-direction: column;
    width: auto;
    align-items: center;
}

.itemContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.itemCard {
    border-radius: 10px;
    background-color: rgb(146, 246, 246);
    padding: 1rem;
    margin: 1rem;
    width: 250px;
}

.itemImage {
    width: 100%;
    height: auto;
}

span {
    font-weight: bold;
}

.carritoButton {
    all: unset;
    background-color: rgb(146, 246, 246);
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.6s;
}

.carritoButton:hover {
    background-color: rgb(0, 176, 176);
}

.carritoButton:active {
    background-color: rgb(0, 151, 151);
}
</style>

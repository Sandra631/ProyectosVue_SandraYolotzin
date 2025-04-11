<script>
export default {
    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0,
        };
    },
    methods: {
        sumar() {
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        },
        resta(){
            this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        },
        dividir(){
            if (this.numero2 == 0) {
                this.resultado = "Error: División por 0";
            } else {
            this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
          }
        },
        multiplicar(){
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);

        }
    }
};
</script>

<template>
    <div class="container mt-5">
        <div class="card shadow p-4">
            <h1 class="text-center">Calculadora V1</h1>
            <h2 class="resultado text-center mt-4">Resultado: {{ resultado }}</h2>
            <div class="mb-3">
                <label for="numero1">Número 1</label>
                <input type="number" id="numero1" class="form-control" v-model="numero1">
            </div>
            <div class="mb-3">
                <label for="numero2">Número 2</label>
                <input type="number" id="numero2" class="form-control" v-model="numero2">
            </div>
            <div class="d-flex justify-content-center gap-2">
                <button @click="sumar" class="btn btn-danger">Sumar</button>
                <button @click="resta" class="btn btn-warning">Restar</button>
                <button @click="dividir" class="btn btn-dark">Dividir</button>
                <button @click="multiplicar" class="btn btn-success">Multiplicar</button>
            </div>
            
        </div>
        
    </div>
</template>

<style>
.resultado {
    color: rgb(255, 255, 255);
    background-color: rgb(231, 55, 155);
    border-radius: 30px;
    padding: 10px;
    text-align: center;
}
</style>
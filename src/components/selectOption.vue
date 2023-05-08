<template>
    <div  class="select mt-4">
        <h6>Lütfen Bir Kategori Seçiniz</h6>
        <select v-model="categoryList.categoryId" class="form-select" aria-label="Default select example">
            <option :item="kategori" v-for="kategori in category" :key="kategori.id" :value="kategori.id">{{ kategori.name }}</option>
        </select>
    </div>
</template>

<script>
    export default{
        props:{
            category:{
                type: Object,
                required: true
            }
        },
        data(){
            return{
                categoryList:{
                    categoryId:null
                }
            }
        },
        created(){
            console.log('this.category[0] :>> ', this.category[1]);
        }
    }
</script>
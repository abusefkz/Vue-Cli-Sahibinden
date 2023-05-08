<template>
    <navbarTag />
    <v-table class="table-select">
        <div  class="select mt-4">
        <h6>Lütfen Bir Kategori Seçiniz</h6>
        <select v-model="categoryList.categoryId"  class="form-select" aria-label="Default select example">
            <option   v-for="kategori in category" :key="kategori.id" :value="kategori.id">{{ kategori.name }}</option>
        </select>
    </div>
                
    <v-sheet v-if="categoryList.categoryId == 1" width="300" class="mx-auto mt-4">
      <v-form  validate-on="submit" >
        <v-text-field v-model="categoryList.marka" label="Arabanın Markası"></v-text-field>
        <v-text-field v-model="categoryList.model" label="Arabanın Modeli"></v-text-field>
        <v-text-field v-model="categoryList.title" label="İlan Başlığı"></v-text-field>
        <v-text-field v-model="categoryList.year" label="Kaç Model"></v-text-field>
        <v-text-field v-model="categoryList.km" label="Arabanın Km"></v-text-field>
        <v-select v-model="categoryList.color" label="Arabanın Rengi" :items="['Siyah','Beyaz','Kırmızı','Gri','Turuncu','Mavi','Bordo']"></v-select>
        <v-text-field v-model="categoryList.price" label="Arabanın Fiyatı"></v-text-field>
        <v-btn @click="addPush()" type="submit" block class="mt-2">İlanı Ekle</v-btn>
      </v-form>
    </v-sheet>
        <evCategory :items="category[3]" v-if="categoryList.categoryId == 4" />
        <gemiCategory  v-if="categoryList.categoryId == 5"/>
    
        
</v-table>
  </template>

  <script>
    import axios from "axios"
    import evCategory from "@/CATEGORY/evCategoryTag.vue"
    import gemiCategory from "@/CATEGORY/gemiCategory.vue"
    export default{
       
        components:{
           evCategory,
           gemiCategory
            
        },
        data(){
            return{
                
                category:[],
                categoryList:{
                    categoryId: null,
                    marka:null,
                    model: null,
                    title: null,
                    year: null,
                    km: null,
                    color: null,
                    price: null
                },
                
            }
        },
        methods:{
            addPush(){
                axios.post('http://localhost:3000/car', this.categoryList).then(go_car => {
                    console.log('go_Car :>> ', go_car);
                    // this.$router.push('/')
                })
            },
            
        },
        created(){ 
                axios.get('http://localhost:3000/categories').then(category_response => {
                    this.category = category_response?.data
                })
            },
            
        
        
            
        
        
    }
</script>
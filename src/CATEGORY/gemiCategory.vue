<template>
        
        <v-sheet width="300" class="mx-auto mt-4">
      <v-form validate-on="submit" >
        <v-text-field v-model="categoryGemi.il" label="İl"></v-text-field>
        <v-text-field v-model="categoryGemi.ilce" label="İlçe"></v-text-field>
        <v-text-field v-model="categoryGemi.title" label="Başlık"></v-text-field>
        <v-select v-model="categoryGemi.color" label="Geminin Rengi" :items="['Siyah','Beyaz','Kırmızı','Gri','Turuncu','Mavi','Bordo']"></v-select>
        <v-text-field v-model="categoryGemi.price" label="Geminin Fiyatı"></v-text-field>
        <v-btn @click="addGemi()" type="submit" block class="mt-2">İlanı Ekle</v-btn>
      </v-form>
    </v-sheet>
    
</template>

<script>
    import axios from "axios"

    export default{
        data(){
            return{
                categoryGemi:{
                    il:null,
                    ilce:null,
                    title: null,
                    color: null,
                    price: null
                }
            }
        },
        methods:{
            addGemi(){
            axios.post('http://localhost:3000/gemi', this.categoryGemi).then(gemi_response => {
                console.log('gemi_response :>> ', gemi_response);
            })
        }
        }
        
    }
</script>
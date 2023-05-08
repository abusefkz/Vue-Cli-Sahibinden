<template>
    
    <v-sheet  width="300" class="mx-auto mt-4">
      <v-form validate-on="submit" >
        <p>{{ items }}</p>
        <v-text-field v-model="categoryHome.il" label="İl"></v-text-field>
        <v-text-field v-model="categoryHome.ilce" label="İlçe"></v-text-field>
        <v-text-field v-model="categoryHome.title" label="Başlık"></v-text-field>
        <v-text-field v-model="categoryHome.room" label="Oda Sayısı"></v-text-field>
        <v-text-field v-model="categoryHome.year" label="Kaç Yılında Kuruldu"></v-text-field>
        <v-text-field v-model="categoryHome.price" label="Evin Fiyatı"></v-text-field>
        
        <v-btn @click="addHome()" type="submit" block class="mt-2">İlanı Ekle</v-btn>
      </v-form>
    </v-sheet>
</template>

<script>
    import axios from "axios"

    export default{
        props:['items'],
        data(){
            return{
                categoryHome:{
                   categoryId:this.items.id,
                   il:null,
                   ilce:null,
                   title: null,
                   room: null,
                   year:null,
                   price: null
               }
            }
        },
        methods:{
            addHome(){
                axios.post('http://localhost:3000/home', this.categoryHome).then(go_home => {
                    console.log('go_home :>> ', go_home);
                    
                    // this.$router.push('/')
                })
            }
        }
        
       
    }
</script>
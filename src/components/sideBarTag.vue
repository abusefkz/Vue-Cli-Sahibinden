<template>
    <v-table
      fixed-header>
      <thead>
        <tr>
          <th class="text-left text-brown-lighten-2">
            Kategoriler
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr @click.prevent="$emit('category-changed', kategori.id)"  v-for="kategori in categoryList" :key="kategori.id">
            <th>
              <button  style="text-decoration: none; color: black;" href="">{{ kategori.name }}</button>
             
            </th>
           
        </tr>
      </tbody>
    </v-table>
  </template>

<script>
   import axios from 'axios';

   export default{
    emits:['category-changed'],
    data(){
      return{
        categoryList: []
      }
    },
      created(){
        axios.get('http://localhost:3000/categories').then(ctgry_response => {
          this.categoryList = ctgry_response?.data || []
        })
      },
   }
</script>

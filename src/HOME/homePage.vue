<template>
   <navbarTag />
   <v-container>
    <v-row>
        <v-col class="col-2">
            <sideBarTag @category-changed="categoryChoose"/>

                <div class="fiyatList"> <!-- div Başlangıç-->

            <h5>Fiyat</h5>
            <input  v-model="filterPrice.minTl" min="1" type="number" id="minTl" placeholder="min TL">
            <label for="minTl"></label>
            -
            <input v-model="filterPrice.maxTl" min="1" type="number"  id="maxTl" placeholder="max TL">
            <label for="maxTl"></label>
            <button @click="fiyatFilter(filterPrice)" class="btn btn-danger mt-3 btn-sm w-100">Ara</button>

        </div>                      <!-- Div Bitiş-->
            
        </v-col>
        <v-col   class="col-10">
            <tableCar  v-if="carCategory.length > 0"  :cars="carCategory"/>
               
            <tableHome v-else :home="homeCategory"/>
            
           
        </v-col>
    </v-row>
   </v-container>
</template>

<script>
    import axios from "axios"
    import tableCar from "@/HOME/tableCar.vue"
    import tableHome from "@/CATEGORY/TableHome.vue"

    export default{
        components:{
            tableCar,
            tableHome,
            
        },
        data(){
            return{
                filterPrice:{
                    minTl: null,
                    maxTl: null,
                },
                carCategory:[],
                homeCategory:[],
                choose: []    
            }
        },
        created(){
            axios.get('http://localhost:3000/car?_expand=category').then(car_response => {
                this.carCategory = car_response?.data || []  
            }),
            axios.get('http://localhost:3000/home?_expand=category').then(home_response => {
                this.homeCategory = home_response?.data || []
            })
        },
        methods:{
            categoryChoose(categoryId){
        const url = (categoryId) ? `http://localhost:3000/car?_expand=category&categoryId=${categoryId}` : 
        (categoryId) ? `http://localhost:3000/home?_expand=category&categoryId=${categoryId}` : []
        axios.get(url).then(choose => {
            console.log('choose :>> ', choose);
            this.carCategory = choose?.data || []
        })
        },
        fiyatFilter(item){
        //  const min = this.carCategory.filter(a => a.price >= item.minTl)
        //  console.log('min :>> ', min);
         
        //  const max = this.carCategory.filter(b => b.price <= item.maxTl)
        //  console.log('max :>> ', max);
            if(item){
               const min = this.carCategory.filter(a => a.price >= item.minTl)
               const max = this.carCategory.filter(b => b.price <= item.maxTl)
               this.carCategory = max.concat(min)
            }   
        
            
        }
        }
            
    }
</script>

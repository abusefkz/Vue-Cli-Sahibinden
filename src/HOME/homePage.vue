<template>
   <navbarTag />
   <v-container>
    <v-row>
        <v-col class="col-2">
            <sideBarTag @category-changed="categoryChoose"/>
        </v-col>
        <v-col   class="col-10">
            <tableCar v-if="carCategory.length > 0"  :cars="carCategory"/>

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
            tableHome
        },
        data(){
            return{
                carCategory:[],
                homeCategory:[],
                choose: []    
            }
        },
        created(){
            axios.get('http://localhost:3000/car?_expand=category').then(car_response => {
                console.log('car_response :>> ', car_response);
                this.carCategory = car_response?.data || []
                
            }),
            axios.get('http://localhost:3000/home?_expand=category').then(home_response => {
                console.log('home_response :>> ', home_response);
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
        }
        }
            
    }
</script>

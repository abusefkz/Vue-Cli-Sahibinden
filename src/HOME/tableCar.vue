<template>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Marka</th>
      <th scope="col">Model</th>
      <th scope="col">İlan Başlığı</th>
      <th scope="col">Yıl</th>
      <th scope="col">KM</th>
      <th scope="col">Renk</th>
      <th scope="col">Fiyat</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="car in cars" :key="car.id" >
      <th scope="row">{{ car.id }}</th>
      <td>{{ car.marka }}</td>
      <td>{{ car.model }}</td>
      <td>{{ car.title }}</td>
      <td>{{ car.year }}</td>
      <td>{{ car.km }}</td>
      <td>{{ car.color }}</td>
      <td>{{ car.price }}</td>
    </tr>
    </tbody>
    </table>
</template>

<script>
    
    export default{
        props:{
            cars:{
                type: Object,
                required: true
            }
        },
        data(){
            return{}
        }
    }
</script>
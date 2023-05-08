<template>
 
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">İl</th>
      <th scope="col">İlçe</th>
      <th scope="col">İlan Başlığı</th>
      <th scope="col">Oda Sayısı</th>
      <th scope="col">Yıl</th>
      <th scope="col">Fiyat</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="ev in home" :key="ev.id" >
      <th scope="row">{{ ev.id }}</th>
      <td>{{ ev.il }}</td>
      <td>{{ ev.ilce }}</td>
      <td>{{ ev.title }}</td>
      <td>{{ ev.room }}</td>
      <td>{{ ev.year }}</td>
      <td>{{ ev.price }}</td>
    </tr>
    </tbody>
    </table>

</template>

<script>
    export default{
        props:{
            home:{
                type: Object,
                required: true
            }
        }
    }
</script>
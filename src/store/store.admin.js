import { defineStore } from 'pinia';

import {API, API_URL} from '@/http/index';

const AdminStore = defineStore('AdminStore',{

  state:()=>({

    categories: [],
    variants: [],
    creating_product: false

  }),

  getters:{
    GETCATEGORIES: (state) => state.categories,
    GETVARIANTS: (state) => state.variants,
  },

  actions:{

    // Get Categories and Variants
    async getCategoriesAndVariants () {
      await API.get('/admin/categoriesvariants')
      .then((respond)=>{
        this.categories = respond.data.categories;
        this.variants = respond.data.variants;
        console.log('respond is ', this.categories, ' : ',this.variants);
      })
      .catch((err)=>{
        console.log('Fetch Categories Error : ', err);
      })
    },

    async createProduct(data) {

      await API.post('/admin/createproduct', data)
      .then((respond)=>{
        console.log('create product respond : ', respond.data);
        this.creating_product = respond.data
      })
      .catch((err)=>{
        console.log('Create product Error : ', err);
      })

    },

    // Create Category
    async createCategory (data) {
      const sending_data = {
        category_name: data
      }
      await API.post('/admin/createcategory', sending_data)
      .then((respond)=>{
        console.log('respond is ', respond.data);
      })
      .catch((err)=>{
        console.log('Create Categories Error : ', err);
      })

    },

    // Create Variant
    async createVariant (data) {
      const sending_data = {
        variant_name: data
      }
      await API.post('/admin/createvariant', sending_data)
      .then((respond)=>{
      })
      .catch((err)=>{
        console.log('Create Categories Error : ', err);
      })

    }


  }


})


export default AdminStore;
import { defineStore } from 'pinia';

import {API, API_URL} from '@/http/index';

const AdminStore = defineStore('AdminStore',{

  state:()=>({

    // Fetch Products
    products: [],
    product_headers: [],
    // Fetch Categories
    categories: [],
    // Fetch Variants
    variants: [],
    // After Creating New Product
    creating_product: false

  }),

  getters:{
    GETCATEGORIES: (state) => state.categories,
    GETVARIANTS: (state) => state.variants,
    GETPRODUCTS: (state) => state.products
  },

  actions:{

    // Fetch All Products 
    async fetchProducts(){
      await API.get('/admin/products')
      .then((respond)=>{
        this.products = respond.data
        this.product_headers = [];
        if(this.products.length){
          for(let [key, value] of Object.entries(this.products[0]) ){
            if(key !== "CategoryModel" ){
              this.product_headers.push(key);
            }
            else{
              console.log('key is : ', this.products[0][key]);
              for(let [catkey, catvalue] of Object.entries(this.products[0][key]) ){
                this.product_headers.push(catkey);
              }
            }
          }
        }
        console.log('heades : ', this.product_headers);
      })
      .catch((err)=>{
        console.log('Fetch Categories Error : ', err);
      })
    } ,

    // Get Categories and Variants
    async getCategoriesAndVariants () {
      await API.get('/admin/categoriesvariants')
      .then((respond)=>{
        this.categories = respond.data.categories;
        this.variants = respond.data.variants;
      })
      .catch((err)=>{
        console.log('Fetch Categories Error : ', err);
      })
    },

    async createProduct(data) {
      await API.post('/admin/createproduct', data)
      .then((respond)=>{
        this.creating_product = respond.data
      })
      // .catch((err)=>{
      //   console.log('Create product Error : ', err);
      // })
    },

    // Create Category
    async createCategory (data) {
      const sending_data = {
        category_name: data
      }
      await API.post('/admin/createcategory', sending_data)
      .then((respond)=>{
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
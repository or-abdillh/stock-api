<h3 align="center">Stock API</h3>
<p align="center">Aplication Backend For Stock App</p>

### About
This application is used to serve data requests from the Stock-App client application to the server. 
Built with Node JS, Express JS and MySql

### Dependencies
- body parser v.1.19.0
- cors v.2.8.5
- express v.4.17.1
- express fileupload v.1.2.1
- md5 v.2.3.0
- mysql v.2.18.1
- random token v.0.0.8
- nodemon 2.0.13

### Run server
This application running on PORT 3000
- <code>cd stock-api && npm start</code>

### Hostname & Endpoint API
- HOSTNAME : <code>http://localhost:3000/</code>

##### endpoint
- <code>/auth</code> <br/> 
purpose : login validation <br/> 
request method <code>POST </code> <br/> 
request body : <code>{ TOKEN: xxx, username: xxx, p <br/> assword: xxx }</code>

- <code>/token</code> <br/> 
purpose : Token validation <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx }</code>

- <code>/logout</code> <br/> 
purpose : Remove TOKEN and create new TOKEN to table User <br/> 
request method <code>GET</code>

- <code>/profile</code> <br/> 
purpose : Get fullname, amounts of category and products user have <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx }</code>

- <code>/products</code> <br/> 
purpose : Get all products from table Products <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx }</code>

- <code>/upload</code> <br/> 
purpose : Upload image to server, path uploaded file <code>/public</code> <br/> 
request method <code>POST</code> <br/> 
request formdata : <code>{ file: the file }</code>

- <code>/createProduct</code> <br/> 
purpose : Create new product <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, name_product, price_product, stock_product, stock_unit, image_product, category_product }</code>

- <code>/removeFile</code> <br/> 
purpose : Remove file image from server <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, image_product }</code>

- <code>/deleteProduct</code> <br/> 
purpose : remove product from table Products <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, id_product, name_product, price_product, stock_product, stock_unit, image_product, category_product }</code>


- <code>/updateProduct</code> <br/> 
purpose : update product from table Products <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, id_product,  }</code>

- <code>/categorys</code> <br/> 
purpose : Get all categorys from table Categorys <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx }</code>

- <code>/createCategory</code> <br/> 
purpose : Create new category <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, name_category }</code>

- <code>/deleteCategory</code> <br/> 
purpose : Remove category from table Categorys <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, id_category }</code>

- <code>/setUncategorys</code> <br/> 
purpose : Set name category product to uncategorys <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, name_category }</code>

- <code>/updateCategory</code> <br/> 
purpose : Update the category <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, id_category, category }</code>

- <code>/search</code> <br/> 
purpose : Get products by keyword and category product <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, keyword, category_product }</code>

- <code>/changeName</code> <br/> 
purpose : Update name user <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, newName }</code>

- <code>/changePassword</code> <br/> 
purpose : Change password user <br/> 
request method <code>POST</code> <br/> 
request body : <code>{ TOKEN: xxx, newPassword }</code>

### Example response 
<code>
'''json
    {
      "status": 200, 
      "message": "success",
      "results": {
         "fullname": "Sandhika Galih",
         "products": "45"
         "categorys": "5"
      }
   }
'''   
</code>

### Structure Tables

[Oka R Abdillah ](http://github.com/or-abdillh) <br/> 
Last edited on : 01/9/2021

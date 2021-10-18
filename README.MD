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
- HOSTNAME : <code>http://localhost:3000/endpoint</code>

##### endpoint
- <code>/auth</code>
purpose : login validation
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, username: xxx, password: xxx }</code>

- <code>/token</code>
purpose : Token validation
request method <code>POST</code>
request body : <code>{ TOKEN: xxx }</code>

- <code>/logout</code>
purpose : Remove TOKEN and create new TOKEN to table User
request method <code>GET</code>

- <code>/profile</code>
purpose : Get fullname, amounts of category and products user have
request method <code>POST</code>
request body : <code>{ TOKEN: xxx }</code>

- <code>/products</code>
purpose : Get all products from table Products
request method <code>POST</code>
request body : <code>{ TOKEN: xxx }</code>

- <code>/upload</code>
purpose : Upload image to server, path uploaded file <code>/public</code>
request method <code>POST</code>
request formdata : <code>{ file: the file }</code>

- <code>/createProduct</code>
purpose : Create new product
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, name_product, price_product, stock_product, stock_unit, image_product, category_product }</code>

- <code>/removeFile</code>
purpose : Remove file image from server
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, image_product }</code>

- <code>/deleteProduct</code>
purpose : remove product from table Products
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, id_product, name_product, price_product, stock_product, stock_unit, image_product, category_product }</code>


- <code>/updateProduct</code>
purpose : update product from table Products
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, id_product,  }</code>

- <code>/categorys</code>
purpose : Get all categorys from table Categorys
request method <code>POST</code>
request body : <code>{ TOKEN: xxx }</code>

- <code>/createCategory</code>
purpose : Create new category
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, name_category }</code>

- <code>/deleteCategory</code>
purpose : Remove category from table Categorys
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, id_category }</code>

- <code>/setUncategorys</code>
purpose : Set name category product to uncategorys
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, name_category }</code>

- <code>/updateCategory</code>
purpose : Update the category
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, id_category, category }</code>

- <code>/search</code>
purpose : Get products by keyword and category product
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, keyword, category_product }</code>

- <code>/changeName</code>
purpose : Update name user
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, newName }</code>

- <code>/changePassword</code>
purpose : Change password user
request method <code>POST</code>
request body : <code>{ TOKEN: xxx, newPassword }</code>

### Example response 
<code>
   {
      "status": 200,
      "message": "success",
      "results": {
         "fullname": "Sandhika Galih",
         "products": "45"
         "categorys": "5"
      }
   }
</code>

### Structure Tables

[Oka R Abdillah ](http://github.com/or-abdillh)
<br>
Last edited on : 01/9/2021

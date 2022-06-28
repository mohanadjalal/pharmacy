# pharmacy

# POST /auth/signup:

---

send body {  
 email: string  
password: string
name:string
address: string
phoneNumber:string
isPharmacy: boolean
}
return user json

# POST /auth/signin

send body {  
 email: string  
password: string
isPharmacy: boolean
}
return user json

---

# GET /user/Pharmacy

headers: {
x-access-token :jwt
}
list of user

# GET /user/customer

headers: {
x-access-token :jwt
}
list of customer

# GET /user/:name

headers: {
x-access-token :jwt
}
return pharmacy with name

# PUT /user/:id

edit user info

headers: {
x-access-token :jwt
}
return user

# DELETE /user/:id

=>delete user account

# POST /product

add product jsut for pharmacy

# GET /product

=> return all product in db

# PUT /product

=>eddit product info

# DELETE /product/:id

=>delete product

# GET /cart

=>retrive =>the product in customer cart

# PUT /cart/:pId

=>add product to cart

# DELETE /cart/:pId

=>remove product from cart

# GET /delivery

=>return move product from cart to delivery

# GET /delivery/info

=>return delivery info

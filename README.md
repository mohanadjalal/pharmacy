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

# GET /user

headers: {
x-access-token :jwt
}
list of user

# GET /user/:name

headers: {
x-access-token :jwt
}
return user

# PUT /user/:id

headers: {
x-access-token :jwt
}
return user

# DELETE /user/:id

# POST /product

# PUT /product

# DELETE /product/:id

# GET /cart

# PUT /cart/:pId

# DELETE /cart/:pId

# GET /delivery

# GET /delivery/info

# Json webToken auth with node and mongo ✈

### How to use it
- Running Docker 🐋

```shell
docker-compose up
```

- By default an admin user is created

🎟
```json
username: "admin",
password: "admin",
email: "admin@gmail.com",
roles: ["admin"]
```


Are implemented the routes of products, and auth. In this case products is develop as a Fulrestapi implementing a complete CRUD operations. Using node full as backend with express and mongo as database.ℹ

```shell
http://localhost:5000/api/products
http://localhost:5000/api/auth/signing
http://localhost:5000/api/auth/signup
```

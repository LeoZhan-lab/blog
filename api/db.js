import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  // password: process.env.DB_KEY,
  password: "123456",
  port: '3306',
  database:"blog"
})

db.connect(err=>{
  console.log(err, '如果为null, 就是链接成功');
})
package main

import (
    "github.com/gin-gonic/gin"
    "blog-full/db"
    "blog-full/router"
)

func main() {
    db.Init()
    r := gin.Default()
    routes.SetupRoutes(r)
    r.Run(":8080")
}
package main

import (
    "github.com/gin-gonic/gin"
    "blog-full/db"
    "blog-full/router"
)

func main() {
    db.Init()
    r := gin.Default()
    router.SetupRoutes(r)
    r.Run(":8080")
}
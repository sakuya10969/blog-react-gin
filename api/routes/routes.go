package routes

import (
    "github.com/gin-gonic/gin"
    "blog-full/controllers"
)

func SetupRoutes(router *gin.Engine) {
    router.GET("/posts", controllers.GetAllPosts)
    router.POST("/posts", controllers.CreatePost)
}
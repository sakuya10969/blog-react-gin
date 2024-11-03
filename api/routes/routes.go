package routes

import (
    "github.com/gin-gonic/gin"
    "blog-full/controllers"
)

func SetupRoutes(router *gin.Engine) {
    router.POST("/posts", controllers.CreatePost)
    router.GET("/posts", controllers.GetPosts)
}
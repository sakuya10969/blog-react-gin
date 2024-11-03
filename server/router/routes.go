package routes

import (
    "github.com/gin-gonic/gin"
    "blog-full/api"
)

func SetupRoutes(router *gin.Engine) {
    router.GET("/posts", api.GetAllPosts)
    router.POST("/posts", api.CreatePost)
}
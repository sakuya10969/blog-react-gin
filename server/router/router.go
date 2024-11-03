package router

import (
    "github.com/gin-gonic/gin"
    "blog-full/api"
)

func SetupRoutes(router *gin.Engine) {
    router.GET("/posts", api.GetAllPosts)
    router.POST("/posts", api.CreatePost)
    router.GET("/posts/:id", api.GetPostById)
    router.PATCH("/posts/:id", api.UpdatePost)
    router.DELETE("/posts/:id", api.DeletePost)
}
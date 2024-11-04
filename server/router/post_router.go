package router

import (
    "github.com/gin-gonic/gin"
    "blog-full/handler"
)

func SetupRoutes(router *gin.Engine, handler *handler.Handler) {
    router.GET("/posts", handler.GetAllPosts)
    router.POST("/posts", handler.CreatePost)
    router.GET("/posts/:id", handler.GetPostById)
    router.PATCH("/posts/:id", handler.UpdatePost)
    router.DELETE("/posts/:id", handler.DeletePost)
}
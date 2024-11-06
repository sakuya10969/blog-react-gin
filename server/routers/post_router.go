package router

import (
    "github.com/gin-gonic/gin"
    "server/handlers"
)

func SetupRoutes(router *gin.Engine, handler *handlers.PostHandler) {
    router.GET("/posts", handler.GetAllPosts)
    router.POST("/posts", handler.CreatePost)
    router.GET("/posts/:id", handler.GetPostById)
    router.PATCH("/posts/:id", handler.UpdatePost)
    router.DELETE("/posts/:id", handler.DeletePost)
}
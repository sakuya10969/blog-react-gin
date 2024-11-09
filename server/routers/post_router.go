package router

import (
    "github.com/gin-gonic/gin"
    "server/handlers"
)

func SetupRoutes(router *gin.Engine, handler *handlers.PostHandler) {
    router.GET("/", handler.GetAllPosts)
    router.POST("/post/create", handler.CreatePost)
    router.GET("/post/:id", handler.GetPostById)
    router.PATCH("/post/update/:id", handler.UpdatePost)
    router.DELETE("/post/delete/:id", handler.DeletePost)
}
package routes

import (
    "github.com/gin-gonic/gin"
    "server/handlers"
    "github.com/gin-contrib/cors"
    "time"
)

func SetupRoutes(router *gin.Engine, handler *handlers.PostHandler) {
    router.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"},
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization",  "X-Requested-With"},
        ExposeHeaders:    []string{"Content-Length", "Authorization"},
        AllowCredentials: true,
        MaxAge: 12 * time.Hour,
    }))

    router.GET("/", handler.GetAllPosts)
    router.POST("/post/create", handler.CreatePost)
    router.GET("/post/:id", handler.GetPostById)
    router.PATCH("/post/update/:id", handler.UpdatePost)
    router.DELETE("/post/delete/:id", handler.DeletePost)
}
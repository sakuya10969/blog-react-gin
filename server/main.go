package main

import (
	"log"
	"github.com/gin-gonic/gin"
	"blog-full/db"
	"blog-full/handler"
	"blog-full/repository"
	"blog-full/router"
	"blog-full/service"
)

func main() {
	db.Init()
	database := db.GetDB()

	repo := repository.NewRepository(database)
	svc := service.NewService(repo)
	handler := handler.NewHandler(svc)

	r := gin.Default()

	router.SetupRoutes(r, handler)

	if err := r.Run(":8080"); err != nil {
		log.Fatal("failed to start server:", err)
	}
}

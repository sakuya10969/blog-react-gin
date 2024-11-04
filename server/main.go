package main

import (
	"log"
	"github.com/gin-gonic/gin"
	"server/db"
	"server/handlers"
	"server/repositories"
	"server/routers"
	"server/services"
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

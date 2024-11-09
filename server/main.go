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

	repo := repositories.NewRepository(database)
	svc := services.NewService(repo)
	postHandler := handlers.NewHandler(svc)

	r := gin.Default()

	routers.SetupRoutes(r, postHandler)

	if err := r.Run(":8080"); err != nil {
		log.Fatal("failed to start server:", err)
	}
}

package db

import (
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
    "log"
    "server/models"
)

var DB *gorm.DB

func Init() {
    dsn := "user:password@tcp(db:3306)/blog_db?charset=utf8mb4&parseTime=True&loc=Local"
    var err error
    
    DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }

    if err := DB.AutoMigrate(&models.Post{}); err != nil {
        log.Fatal("Failed to migrate database:", err)
    }
}

func GetDB() *gorm.DB {
    return DB
}

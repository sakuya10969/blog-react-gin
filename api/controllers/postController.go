package controllers

import (
    "github.com/gin-gonic/gin"
    "blog-full/models"
    "blog-full/db"
    "net/http"
)

func CreatePost(c *gin.Context) {
    var post models.Post
    if err := c.ShouldBindJSON(&post); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    db.DB.Create(&post)
    c.JSON(http.StatusOK, post)
}

func GetPosts(c *gin.Context) {
    var posts []models.Post
    db.DB.Find(&posts)
    c.JSON(http.StatusOK, posts)
}
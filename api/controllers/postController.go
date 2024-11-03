package controllers

import (
    "github.com/gin-gonic/gin"
    "blog-full/models"
    "blog-full/services"
    "net/http"
    "strconv"
)

func GetAllPosts(c *gin.Context) {
    posts, err := services.GetAllPosts()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error":
    "ポストの取得に失敗しました"})
    return
    }
    c.JSON(http.StatusOK, posts)
}

func CreatePost(c *gin.Context) {
    var post models.Post
    if err := c.ShouldBindJSON(&post); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    createdPost, err := services.CreatePost(post) 
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error":"ポストの作成に失敗しました"})
        return
    }
    c.JSON(http.StatusCreated, createdPost)
}

func GetPostById(c *gin.Context) {
    idParam := c.Param("id")
    id, err := strconv.Atoi(idParam)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error":"IDの形式が正しくありません"})
        return
    }

    post, err := services.GetPostById(uint(id))
    if err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error":"ポストが見つかりません"})
        return
    }
    c.JSON(http.StatusOK, post)
}
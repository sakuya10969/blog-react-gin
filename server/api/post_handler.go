package api

import (
    "github.com/gin-gonic/gin"
    "blog-full/model"
    "blog-full/service"
    "net/http"
    "strconv"
)

func GetAllPosts(c *gin.Context) {
    posts, err := service.GetAllPosts()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error":
    "ポストの取得に失敗しました"})
    return
    }
    c.JSON(http.StatusOK, posts)
}

func CreatePost(c *gin.Context) {
    var post model.Post
    if err := c.ShouldBindJSON(&post); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    createdPost, err := service.CreatePost(post) 
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

    post, err := service.GetPostById(uint(id))
    if err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error":"ポストが見つかりません"})
        return
    }
    c.JSON(http.StatusOK, post)
}

func UpdatePost(c *gin.Context) {
    idParam := c.Param("id")
    id, err := strconv.Atoi(idParam)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error":"IDの形式が正しくありません"})
        return
    }

    var updatedData model.Post
    if err := c.ShouldBindJSON(&updatedData); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    updatedPost, err := service.UpdatePost(uint(id), updatedData)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error":err.Error()})
        return
    }
    c.JSON(http.StatusOK, updatedPost)
}

func DeletePost(c *gin.Context) {
    idParam := c.Param("id")
    id, err := strconv.Atoi(idParam)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error":"IDの形式が正しくありません"})
        return
    }

    if err := service.DeletePost(uint(id)); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error":err.Error()})
        return
    }
    c.JSON(http.StatusOK, gin.H{"message":"ポストが削除されました"})
}
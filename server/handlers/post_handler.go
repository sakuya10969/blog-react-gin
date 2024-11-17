package handlers

import (
    "github.com/gin-gonic/gin"
    "server/models"
    "server/services"
    "gorm.io/gorm"
    "net/http"
    "strconv"
    "log"
)

type PostHandler struct {
    service *services.PostService
}

func NewHandler(service *services.PostService) *PostHandler {
    return &PostHandler{service: service}
}

func (h *PostHandler) getIDParam(c *gin.Context) (uint, bool) {
    idParam := c.Param("id")
    id, err := strconv.Atoi(idParam)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "IDの形式が正しくありません"})
        return 0, false
    }
    return uint(id), true
}

func (h *PostHandler) GetAllPosts(c *gin.Context) {
    posts, err := h.service.GetAllPosts()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "ポストの取得に失敗しました"})
        return
    }
    c.JSON(http.StatusOK, posts)
}

func (h *PostHandler) CreatePost(c *gin.Context) {
    var post models.Post
    if err := c.ShouldBindJSON(&post); err != nil {
        log.Println(err)
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    createdPost, err := h.service.CreatePost(post)
    if err != nil {
        log.Println(err)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "ポストの作成に失敗しました"})
        return
    }
    c.JSON(http.StatusCreated, createdPost)
}

func (h *PostHandler) GetPostById(c *gin.Context) {
    id, valid := h.getIDParam(c)
    if !valid {
        return
    }

    post, err := h.service.GetPostById(id)
    if err != nil {
        if err == gorm.ErrRecordNotFound {
            c.JSON(http.StatusNotFound, gin.H{"error": "ポストが見つかりません"})
        } else {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "ポストの取得に失敗しました"})
        }
        return
    }
    c.JSON(http.StatusOK, post)
}

func (h *PostHandler) UpdatePost(c *gin.Context) {
    id, valid := h.getIDParam(c)
    if !valid {
        return
    }

    var updatedPost models.Post
    if err := c.ShouldBindJSON(&updatedPost); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "リクエストデータの形式が正しくありません: " + err.Error()})
        return
    }

    updatedPost, err := h.service.UpdatePost(id, updatedPost)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "ポストの更新に失敗しました: " + err.Error()})
        return
    }
    c.JSON(http.StatusOK, updatedPost)
}

func (h *PostHandler) DeletePost(c *gin.Context) {
    id, valid := h.getIDParam(c)
    if !valid {
        return
    }

    if err := h.service.DeletePost(id); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "ポストの削除に失敗しました: " + err.Error()})
        return
    }
    c.JSON(http.StatusOK, gin.H{"message": "ポストが削除されました"})
}

package middlewares

import (
    "net/http"
    "server/utils"
    "github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        tokenString := c.GetHeader("Authorization")
        if tokenString == "" {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "入力必須です"})
            c.Abort()
            return
        }

        username, err := utils.VerifyJWT(tokenString)
        if err != nil {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "無効なトークンです"})
            c.Abort()
            return
        }

        c.Set("username", username)
        c.Next()
    }
}

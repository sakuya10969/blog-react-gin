package utils

import (
    "time"
    "github.com/dgrijalva/jwt-go"
)

var jwtSecret = []byte("your-secret-key")

func GenerateJWT(username string) (string, error) {
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
        "username": username,
        "exp":      time.Now().Add(time.Hour * 24).Unix(),
    })
    return token.SignedString(jwtSecret)
}

func VerifyJWT(tokenString string) (string, error) {
    token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
        return jwtSecret, nil
    })

    if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
        return claims["username"].(string), nil
    }
    return "", err
}

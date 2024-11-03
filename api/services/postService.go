package services

import (
	"blog-full/models"
	"blog-full/repositories"
)

func GetAllPosts() ([]models.Post, error) {
	return repositories.GetAllPosts()
}

func CreatePost(post models.Post) (models.Post, error) {
	return repositories.CreatePost(post)
}

func GetPostById(id uint) (models.Post, error) {
	return repositories.GetPostById(id)
}
package service

import (
	"blog-full/model"
	"blog-full/repository"
)

func GetAllPosts() ([]model.Post, error) {
	return repository.GetAllPosts()
}

func CreatePost(post model.Post) (model.Post, error) {
	return repository.CreatePost(post)
}

func GetPostById(id uint) (model.Post, error) {
	return repository.GetPostById(id)
}
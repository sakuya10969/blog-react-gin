package service

import (
	"blog-full/model"
	"blog-full/repository"
)

type PostService struct {
	repo *repository.PostRepository
}

func NewService(repo *repository.PostRepository) *PostService {
	return &PostService{repo: repo}
}

func (s *PostService) GetAllPosts() ([]model.Post, error) {
	return s.repo.GetAllPosts()
}

func (s *PostService) CreatePost(post model.Post) (model.Post, error) {
	return s.repo.CreatePost(post)
}

func (s *PostService) GetPostById(id uint) (model.Post, error) {
	return s.repo.GetPostById(id)
}

func (s *PostService) UpdatePost(id uint, updatedData model.Post) (model.Post, error) {
	return s.repo.UpdatePost(id, updatedData)
}

func (s *PostService) DeletePost(id uint) error {
	return s.repo.DeletePost(id)
}
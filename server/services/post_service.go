package services

import (
	"server/models"
	"server/repositories"
)

type PostService struct {
	repo *repositories.PostRepository
}

func NewService(repo *repositories.PostRepository) *PostService {
	return &PostService{repo: repo}
}

func (s *PostService) GetAllPosts() ([]models.Post, error) {
	return s.repo.GetAllPosts()
}

func (s *PostService) CreatePost(post models.Post) (models.Post, error) {
	return s.repo.CreatePost(post)
}

func (s *PostService) GetPostById(id uint) (models.Post, error) {
	return s.repo.GetPostById(id)
}

func (s *PostService) UpdatePost(id uint, updatedData models.Post) (models.Post, error) {
	return s.repo.UpdatePost(id, updatedData)
}

func (s *PostService) DeletePost(id uint) error {
	return s.repo.DeletePost(id)
}
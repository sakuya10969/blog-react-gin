package service

import (
	"blog-full/model"
	"blog-full/repository"
)

type Service struct {
	repo *repository.Repository
}

func NewService(repo *repository.Repository) *Service {
	return &Service{repo: repo}
}

func (s *Service) GetAllPosts() ([]model.Post, error) {
	return s.repo.GetAllPosts()
}

func (s *Service) CreatePost(post model.Post) (model.Post, error) {
	return s.repo.CreatePost(post)
}

func (s *Service) GetPostById(id uint) (model.Post, error) {
	return s.repo.GetPostById(id)
}

func (s *Service) UpdatePost(id uint, updatedData model.Post) (model.Post, error) {
	return s.repo.UpdatePost(id, updatedData)
}

func (s *Service) DeletePost(id uint) error {
	return s.repo.DeletePost(id)
}
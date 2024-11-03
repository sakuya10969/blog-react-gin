package repository

import (
	"blog-full/model"
	"errors"
	"gorm.io/gorm"
)

type Repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db: db}
}

func (r *Repository) GetAllPosts() ([]model.Post, error) {
	var posts []model.Post
	if err := r.db.Find(&posts).Error; err != nil {
		return nil, err
	}
	return posts, nil
}

func (r *Repository) CreatePost(post model.Post) (model.Post, error) {
	if err := r.db.Create(&post).Error; err != nil {
		return model.Post{}, err
	}
	return post, nil
}

func (r *Repository) GetPostById(id uint) (model.Post, error) {
	var post model.Post
	if err := r.db.First(&post, id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return model.Post{}, errors.New("ポストが見つかりません")
		}
		return model.Post{}, err
	}
	return post, nil
}

func (r *Repository) UpdatePost(id uint, updatedData model.Post) (model.Post, error) {
	var post model.Post
	if err := r.db.First(&post, id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return model.Post{}, errors.New("ポストが見つかりません")
		}
		return model.Post{}, err
	}

	if err := r.db.Model(&post).Updates(updatedData).Error; err != nil {
		return model.Post{}, err
	}
	return post, nil
}

func (r *Repository) DeletePost(id uint) error {
	if err := r.db.Delete(&model.Post{}, id).Error; err != nil {
		return err
	}
	return nil
}

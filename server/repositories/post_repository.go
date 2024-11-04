package repository

import (
	"server/models"
	"errors"
	"gorm.io/gorm"
)

type PostRepository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *PostRepository {
	return &PostRepository{db: db}
}

func (r *PostRepository) GetAllPosts() ([]model.Post, error) {
	var posts []model.Post
	if err := r.db.Find(&posts).Error; err != nil {
		return nil, err
	}
	return posts, nil
}

func (r *PostRepository) CreatePost(post model.Post) (model.Post, error) {
	if err := r.db.Create(&post).Error; err != nil {
		return model.Post{}, err
	}
	return post, nil
}

func (r *PostRepository) GetPostById(id uint) (model.Post, error) {
	var post model.Post
	if err := r.db.First(&post, id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return model.Post{}, errors.New("ポストが見つかりません")
		}
		return model.Post{}, err
	}
	return post, nil
}

func (r *PostRepository) UpdatePost(id uint, updatedData model.Post) (model.Post, error) {
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

func (r *PostRepository) DeletePost(id uint) error {
	if err := r.db.Delete(&model.Post{}, id).Error; err != nil {
		return err
	}
	return nil
}

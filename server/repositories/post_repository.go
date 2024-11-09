package repositories

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

func (r *PostRepository) GetAllPosts() ([]models.Post, error) {
	var posts []models.Post
	if err := r.db.Find(&posts).Error; err != nil {
		return nil, err
	}
	return posts, nil
}

func (r *PostRepository) CreatePost(post models.Post) (models.Post, error) {
	if err := r.db.Create(&post).Error; err != nil {
		return models.Post{}, err
	}
	return post, nil
}

func (r *PostRepository) GetPostById(id uint) (models.Post, error) {
	var post models.Post
	if err := r.db.First(&post, id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return models.Post{}, errors.New("ポストが見つかりません")
		}
		return models.Post{}, err
	}
	return post, nil
}

func (r *PostRepository) UpdatePost(id uint, updatedPost models.Post) (models.Post, error) {
	var post models.Post
	if err := r.db.First(&post, id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return models.Post{}, errors.New("ポストが見つかりません")
		}
		return models.Post{}, err
	}

	if err := r.db.Model(&post).Updates(updatedPost).Error; err != nil {
		return models.Post{}, err
	}
	return post, nil
}

func (r *PostRepository) DeletePost(id uint) error {
	if err := r.db.Delete(&models.Post{}, id).Error; err != nil {
		return err
	}
	return nil
}

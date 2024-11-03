package repository

import (
	"blog-full/model"
	"errors"
	"gorm.io/gorm"
)

var posts []model.Post
var db *gorm.DB

func GetAllPosts() ([]model.Post, error) {
	return posts, nil
}

func CreatePost(post model.Post) (model.Post, error) {
	post.ID = uint(len(posts) + 1)
	posts = append(posts, post)
	return post, nil
}

func GetPostById(id uint) (model.Post, error) {
	for _, post := range posts {
		if post.ID == id {
			return post, nil
		}
	}
	return model.Post{}, errors.New("ポストが見つかりません")
}

func UpdatePost(id uint, updatedData model.Post) (model.Post, error) {
	var post model.Post
	if err := db.First(&post, id).Error; err != nil {
		return model.Post{}, err
	}

	if err := db.Model(&post).Updates(updatedData).Error; err != nil {
		return model.Post{}, err
	}
	return post, nil
}

func DeletePost(id uint) error {
	if err := db.Delete(&model.Post{}, id).Error; err != nil {
		return err
	}
	return nil
}
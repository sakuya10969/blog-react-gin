package repositories

import (
	"blog-full/models"
	"errors"
)

var posts []models.Post

func GetAllPosts() ([]models.Post, error) {
	return posts, nil
}

func CreatePost(post models.Post) (models.Post, error) {
	post.ID = uint(len(posts) + 1)
	posts = append(posts, post)
	return post, nil
}

func GetPostById(id uint) (models.Post, error) {
	for _, post := range posts {
		if post.ID == id {
			return post, nil
		}
	}
	return models.Post{}, errors.New("ポストが見つかりません")
}
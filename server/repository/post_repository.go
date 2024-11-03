package repository

import (
	"blog-full/model"
	"errors"
)

var posts []model.Post

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
package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func helloWorld(c *gin.Context) {
	c.JSON(200, gin.H{"message": "Hello from Go!"})
}

func main() {
	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/", helloWorld)
	router.Run("localhost:8080")
}

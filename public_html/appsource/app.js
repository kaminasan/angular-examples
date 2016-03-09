/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
     angular.module('app', []);
            angular.module('app').controller('postRepeater', function ($scope) {
                var self = this;
                $scope.editing = false;
                $scope.newPost = {postTitle: "empty",
                    postSummary: "empty",
                    postImageUrl: "empty"
                };
                $scope.postList = [];
                $scope.addPost = function () {
                    var newPostToAdd = {
                        postTitle: $scope.newPost.postTitle,
                        postSummary: $scope.newPost.postSummary,
                        postImageUrl: $scope.newPost.postImageUrl
                    };
                    
                    $scope.postList.push(newPostToAdd);
                    self.clearForm();

                }
                
                $scope.editPost = function(index){
                    if(!$scope.editing){
                      $scope.newPost = $scope.postList[index];  
                    $scope.editing = true;
                    }
                    else{
                        $scope.newPost = {};
                        $scope.editing = false;
                        
                    }
                    
                    
                      
                }
        
                $scope.deletePost = function (index) {
                    $scope.postList.splice(index,1);
                }
              self.clearForm = function(){
                    for(var propkey in $scope.newPost){
                        $scope.newPost[propkey] = "";
                        
                    }
                }
            });
class PostsController < ApplicationController
    before_action :authenticate_user!
    load_and_authorize_resource  :only => [:destroy, :update]

    def index
        @posts = Post.all

        render json: @posts
    end

    def show
        @post = Post.find(params[:id])

        render json: @post
    end

    def create
        @user = current_user
        @post = @user.posts.build(post_params)

        if @user.save
        render json: @post, status: :created, location: @post
        else
        render json: @post.errors, status: :unprocessable_entity
        end
    end

    def update
        @user = current_user
        @post = Post.find(params[:id])
        @posts = Post.all


        if @post.update(post_params)
        render json: @posts
        else
        render json: @post.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @user = current_user
        @post = Post.find(params[:id]).delete

        render status: :ok
    end

    private

    def post_params
        params.require(:post).permit(:title, :content)
    end
end

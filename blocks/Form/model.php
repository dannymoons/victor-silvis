<?php

namespace themes\theme4\blocks\blogs;

use PHPageBuilder\Modules\GrapesJS\Block\BaseModel;
use App\BlogPost;

class Model extends BaseModel
{
    protected $blogs;

    /**
     * Initialize the model.
     */
    public function init()
    {
        $this->blogs = BlogPost::with('user','blog_categories')->where('published_by','!=', null)->get();
    }

    /**
     * Return users from the database.
     */
    public function getBlogs()
    {
        return $this->blogs;
    }
}
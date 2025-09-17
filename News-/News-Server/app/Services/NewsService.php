<?php

namespace App\Services;
use App\Models\News;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class NewsService
{
    static function getNews($id){

        if ($id){
            return News::find($id);
        }else{
            return News::all();
        }
    }

    static function addNews($news , $data){

        $validator = Validator::make($data, [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'author' => 'required|string|max:255',
            'image' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $news->title = $data["title"];
        $news->content = $data["content"];
        $news->author = $data["author"];
        $news->image = $data["image"] ?? null;
        $news->category = $data["category"] ?? null;

        $news->save();
        return $news;
    }
    
    static function deleteNews($id){

        $news = News::find($id);
        if ($news) {
            $news->delete();
            return $news;
        }
        return null;
    }
}

<?php

namespace App\Http\Controllers;
use App\Services\NewsService;
use App\Models\News;
use Illuminate\Validation\ValidationException;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    function getNews($id = null)
    {
        $news = NewsService::getNews($id);
        return $news?  $this->responseJSON($news):
                       $this ->responseJSON (null , "Not found", 404);
    }

    function addNews(Request $request){

        try {
            $news = new News;
            $news = NewsService::addNews($news, $request->all());
            return $this->responseJSON($news);
        } 
        catch (ValidationException $e) {
            return $this->responseJSON(null, $e->errors(), 422);
        }
    }

    function deleteNews ($id){
        $news = NewsService::deleteNews($id);
        if ($news) {
            return $this->responseJSON($news);
        } else {
            return $this->responseJSON(null, "News not found", 404);
        }
    }
}

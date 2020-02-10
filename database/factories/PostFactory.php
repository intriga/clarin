<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    $title = $faker->sentence(4);
    return [
        'title' => $title,
        'slug' => str_slug($title),
        'description' => $faker->text(400),
        'content' => $faker->text(900),
        'file' => $faker->imageUrl($width = 1200, $height = 400),
    ];
});

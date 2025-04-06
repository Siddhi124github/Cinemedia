const app = angular.module('cineMediaApp', []);

app.controller('MainController', function ($scope, $timeout, $window) {
    // Theme handling
    $scope.theme = 'dark';
    document.body.classList.add('dark-theme');

    $scope.toggleTheme = function () {
        if ($scope.theme === 'dark') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            $scope.theme = 'light';
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            $scope.theme = 'dark';
        }
    };

    $scope.currentPage = 'home';
    $scope.currentImageIndex = 0;
    $scope.carouselImages = [
       "C:/Users/kruti/Desktop/cinemedia/images/Munjya.jpg",
       "C:/Users/kruti/Desktop/cinemedia/images/melting.jpg",
        "images/Squid_Game_-_Poster.webp",
    
       
    ];

    function changeCarouselImage() {
        $scope.currentImageIndex = ($scope.currentImageIndex + 1) % $scope.carouselImages.length;
        $timeout(changeCarouselImage, 3000);
    }

    changeCarouselImage();

    $scope.categories = [
        {
            title: "Recently Added",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "Vincenzo Cassano, a Korean-Italian mafia consigliere, returns to South Korea after a betrayal in Italy. He plans to retrieve hidden gold stashed under a building, but gets entangled in a fight against a powerful corrupt corporation. With a mix of brutal tactics and unexpected wit, he partners with a sharp-tongued lawyer, Hong Cha-young, to bring justice the mafia way.",
                    cast: "Song Joong-ki, Jeon Yeo-been",
                    episodes: [
                        {
                            title: "Episode 1",
                            description: "Vincenzo arrives in Korea and gets into trouble.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        },
                        {
                            title: "Episode 2",
                            description: "Conflict begins at the Plaza.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        }
                    ]
                },
                {
                    title: "Business Proposal",
                    image: "images/bussiness prop.jpg",
                    description: "A romantic comedy about an office worker who goes on a blind date in place of her friend, only to discover that her boss is the one she's meeting. This leads to an unexpected romance and hilarious misunderstandings as they navigate their work and personal lives."
                   , cast: "Ahn Hyo-seop,Kim Se-jeong,Kim Min-kyu",
                    episodes: [
                        {
                            title: "Episode 1",
                            description: "Vincenzo arrives in Korea and gets into trouble.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        },
                        {
                            title: "Episode 2",
                            description: "Conflict begins at the Plaza.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        }
                    ]
                },
                {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                },
                {
                    title: "Mismatched",
                    image: "C:/Users/kruti/Desktop/cinemedia/images/mismatched.jpg",
                    description: "Mismatched follows Dimple, a tech-savvy and ambitious coder, and Rishi, a romantic who believes in arranged marriage. They meet at a summer app development course, where sparks fly — but not always the romantic kind. As their worlds collide, friendships form, hearts break, and everyone’s figuring out who they are and what they want."
,                }, {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                }, {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                },
            ]
        },
        {
            title: "Top 5 Series in CineMedia today",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer.",
                    cast: "Song Joong-ki, Jeon Yeo-been",
                    episodes: [
                        {
                            title: "Episode 1",
                            description: "Vincenzo arrives in Korea and gets into trouble.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        },
                        {
                            title: "Episode 2",
                            description: "Conflict begins at the Plaza.",
                            video: "videos/vincenzo_ep2.mp4"
                        }
                    ]
                },
                {
                    title: "Business Proposal",
                    image: "images/bussiness prop.jpg",
                    description: "A romantic comedy about an office worker who goes on a blind date in place of her friend, only to discover that her boss is the one she's meeting. This leads to an unexpected romance and hilarious misunderstandings as they navigate their work and personal lives."
                },
                {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                },
               
            ]
        }, {
            title: "Binge-Worthy Shows",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer.",
                    cast: "Song Joong-ki, Jeon Yeo-been",
                    episodes: [
                        {
                            title: "Episode 1",
                            description: "Vincenzo arrives in Korea and gets into trouble.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        },
                        {
                            title: "Episode 2",
                            description: "Conflict begins at the Plaza.",
                            video: "videos/vincenzo_ep2.mp4"
                        }
                    ]
                },
                {
                    title: "Business Proposal",
                    image: "images/bussiness prop.jpg",
                    description: "A romantic comedy about an office worker who goes on a blind date in place of her friend, only to discover that her boss is the one she's meeting. This leads to an unexpected romance and hilarious misunderstandings as they navigate their work and personal lives."
                },
                {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                },
                
            ]
        }
    ];

    $scope.movieCategories = [
        {
            title: "Thriller & Mystery",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer.",
                    cast: "Song Joong-ki, Jeon Yeo-been",
                    episodes: [
                        {
                            title: "Episode 1",
                            description: "Vincenzo arrives in Korea and gets into trouble.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        },
                        {
                            title: "Episode 2",
                            description: "Conflict begins at the Plaza.",
                            video: "videos/vincenzo_ep2.mp4"
                        }
                    ]
                },
                {
                    title: "Business Proposal",
                    image: "images/bussiness prop.jpg",
                    description: "A romantic comedy about an office worker who goes on a blind date in place of her friend, only to discover that her boss is the one she's meeting. This leads to an unexpected romance and hilarious misunderstandings as they navigate their work and personal lives."
                },
                {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                },
                
            ]
        },{
            title: "International Films",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer.",
                    cast: "Song Joong-ki, Jeon Yeo-been",
                    episodes: [
                        {
                            title: "Episode 1",
                            description: "Vincenzo arrives in Korea and gets into trouble.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        },
                        {
                            title: "Episode 2",
                            description: "Conflict begins at the Plaza.",
                            video: "videos/vincenzo_ep2.mp4"
                        }
                    ]
                },
                {
                    title: "Business Proposal",
                    image: "images/bussiness prop.jpg",
                    description: "A romantic comedy about an office worker who goes on a blind date in place of her friend, only to discover that her boss is the one she's meeting. This leads to an unexpected romance and hilarious misunderstandings as they navigate their work and personal lives."
                },
                {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                },
               
            ]
        }, {
            title: "Action-Packed",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer."
                },
                {
                    title: "Squid Game",
                    image: "images/squid-game.jpg",
                    description: "A deadly game with high stakes."
                },
                
            ]
        },   {
            title: "top 5 on cinemedia",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer."
                },
                {
                    title: "Squid Game",
                    image: "images/squid-game.jpg",
                    description: "A deadly game with high stakes."
                },
               
            ]
        }
    ];

    $scope.tvDramaCategories = [
        {
            title: "Romantic Dramas",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer.",
                    cast: "Song Joong-ki, Jeon Yeo-been",
                    episodes: [
                        {
                            title: "Episode 1",
                            description: "Vincenzo arrives in Korea and gets into trouble.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        },
                        {
                            title: "Episode 2",
                            description: "Conflict begins at the Plaza.",
                            video: "videos/vincenzo_ep2.mp4"
                        }
                    ]
                },
                {
                    title: "Business Proposal",
                    image: "images/bussiness prop.jpg",
                    description: "A romantic comedy about an office worker who goes on a blind date in place of her friend, only to discover that her boss is the one she's meeting. This leads to an unexpected romance and hilarious misunderstandings as they navigate their work and personal lives."
                },
                {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                },
               
            ]
        },{
            title: "K-Dramas ",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer.",
                    cast: "Song Joong-ki, Jeon Yeo-been",
                    episodes: [
                        {
                            title: "Episode 1",
                            description: "Vincenzo arrives in Korea and gets into trouble.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        },
                        {
                            title: "Episode 2",
                            description: "Conflict begins at the Plaza.",
                            video: "videos/vincenzo_ep2.mp4"
                        }
                    ]
                },
                {
                    title: "Business Proposal",
                    image: "images/bussiness prop.jpg",
                    description: "A romantic comedy about an office worker who goes on a blind date in place of her friend, only to discover that her boss is the one she's meeting. This leads to an unexpected romance and hilarious misunderstandings as they navigate their work and personal lives."
                },
                {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                },
               
            ]
        },{
            title: "Crime & Thriller Series",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer.",
                    cast: "Song Joong-ki, Jeon Yeo-been",
                    episodes: [
                        {
                            title: "Episode 1",
                            description: "Vincenzo arrives in Korea and gets into trouble.",
                            video: "C:/Users/kruti/Desktop/cinemedia/Vincenzo _ Official Trailer _ Netflix [ENG SUB].mp4"
                        },
                        {
                            title: "Episode 2",
                            description: "Conflict begins at the Plaza.",
                            video: "videos/vincenzo_ep2.mp4"
                        }
                    ]
                },
                {
                    title: "Business Proposal",
                    image: "images/bussiness prop.jpg",
                    description: "A romantic comedy about an office worker who goes on a blind date in place of her friend, only to discover that her boss is the one she's meeting. This leads to an unexpected romance and hilarious misunderstandings as they navigate their work and personal lives."
                },
                {
                    title: "Squid Game",
                    image: "images/Squid_Game_-_Poster.webp",
                    description: "A deadly game with high stakes."
                },
               
            ]
        },   {
            title: "New on Cine Media",
            movies: [
                {
                    title: "Vincenzo",
                    image: "images/vincenzo 1.jpg",
                    description: "A dark comedy about a lawyer."
                },
                {
                    title: "Squid Game",
                    image: "images/squid-game.jpg",
                    description: "A deadly game with high stakes."
                }
            ]
        }
    ];

    $scope.setPage = function (page) {
        $scope.currentPage = page;
    };

    $scope.openMovieDetail = function (movie) {
        const movieWindow = window.open('', '_self', 'width=1200,height=1200');

        let episodeHTML = '';
        if (movie.episodes && movie.episodes.length > 0) {
            episodeHTML = `<div class="episode-section">
                <h3>Episodes:</h3>`;
            movie.episodes.forEach((ep, index) => {
                episodeHTML += `
                    <div class="episode">
                        <div>
                            <h4>${ep.title}</h4>
                            <p>${ep.description}</p>
                            ${ep.video ? `<video width="640" height="360" controls>
                                <source src="${ep.video}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>` : ''}
                        </div>
                    </div>`;
            });
            episodeHTML += `</div>`;
        }

        movieWindow.document.write(`
            <html>
            <head>
                <title>${movie.title}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #141414;
                        color: white;
                        margin: 0;
                        padding: 0;
                    }
                    .movie-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 20px;
                        margin-top: 40px;
                    }
                    .movie-container img {
                        width: 1000px;
                        height: 650px;
                        object-fit: cover;
                        border-radius: 10px;
                        border: 5px solid #333;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
                    }
                    .movie-details {
                        text-align: center;
                        max-width: 800px;
                        margin: 30px auto;
                        padding: 20px;
                        background-color: rgba(0, 0, 0, 0.8);
                        border-radius: 10px;
                    }
                    .movie-details h1 {
                        font-size: 3em;
                        margin-bottom: 20px;
                    }
                    .movie-details p {
                        font-size: 1.5em;
                        color: #ccc;
                    }
                    .episode-section {
                        margin-top: 30px;
                        text-align: center;
                        padding: 20px;
                        background-color: rgba(0, 0, 0, 0.8);
                        border-radius: 10px;
                    }
                    .episode {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-top: 20px;
                    }
                    .episode h4 {
                        font-size: 1.8em;
                        color: #fff;
                    }
                    .episode p {
                        font-size: 1.2em;
                        color: #ccc;
                    }
                </style>
            </head>
            <body>
                <div class="movie-container">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="movie-details">
                        <h1>${movie.title}</h1>
                        <p>${movie.description}</p>
                        <h3>Cast:</h3>
                        <p>${movie.cast || 'Cast not available'}</p>
                    </div>
                    ${episodeHTML}
                </div>
            </body>
            </html>
        `);
    };
});

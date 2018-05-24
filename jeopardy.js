$(document).ready(function () {
    console.log("connected")

    let total = 0

    const genres10 = {
        description: "This camera is hey",
        rightAnswer: "What is a making lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 10

    };
    $('#five').click(function () {
        $(this).html(genres10.description).append($('<br>'), $('<br>'))
        $('#five').append('<button id="a">A</button>').append(genres10.rightAnswer, $('<br>'))
        $('#five').append('<button id="b">B</button>').append(genres10.wrongAnswer1, $('<br>'))
        $('#five').append('<button id="c">C</button>').append(genres10.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#a').one('click', function () {

            //if correct answer
            if (genres10.rightAnswer = "CORRECT!") {
                $("#five").css('background-color', 'darkgreen');

                // }
                // add points
                total += 10
            }

            console.log(total)

            //else
            //remove points

        })


        $('#b').one('click', function () {
            //if correct answer
            if (genres10.wrongAnswer1 = "INCORRECT!") {
                $("#five").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })

        $('#c').one('click', function () {
            //if correct answer
            if (genres10.wrongAnswer2 = "INCORRECT!") {
                $("#five").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })


    })
    // $('#five').click(function(){
    //     $(this).html(genres10.wrongAnswer1)

    // $('#five').click(function(){
    //  $(this).html(genres10.wrongAnswer2)








    //   let timeClock = 30;
    //    let gameTimer = document.getElementById('#five')

    //    let timer = setInterval (countdown, 1000);
    //    function countdown(){
    //        if (timeClock === 0){
    //            clearTimeout(timeClock);
    //        } else{
    //          gameTimer.innerHTML = timeClock +'seconds remaining';
    //        timeClock--;
    //         }
    //        }


    // })



    const settings10 = {
        description: "This camera is kasa",
        rightAnswer: "What is a maki time :)",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 10

    };

    $('#six').click(function () {
        $(this).html(settings10.description).append($('<br>'), $('<br>'))

        $('#six').append('<button id= "d">A</button>').append(settings10.rightAnswer, $('<br>'))
        $('#six').append('<button id= "e">B</button>').append(settings10.wrongAnswer1, $('<br>'))
        $('#six').append('<button id= "f">C</button>').append(settings10.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);
        $('#d').one('click', function () {

            //if correct answer
            if (settings10.rightAnswer = "CORRECT!") {
                $("#six").css('background-color', 'darkgreen');

                // }
                // add points
                total += 10
            }

            console.log(total)

            //else
            //remove points

        })
        $('#e').one('click', function () {
            //if correct answer
            if (settings10.wrongAnswer1 = "INCORRECT!") {
                $("#six").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })
        $('#f').one('click', function () {
            //if correct answer
            if (settings10.wrongAnswer2 = "INCORRECT!") {
                $("#six").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })





    })
    const equipment10 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 10

    };

    // $('#seven').click(function () {
    //     $(this).html(equipment10.description).append($('<br>'), $('<br>'))

    //     $('#seven').append('<button id="g">A</button>').append(equipment10.rightAnswer, $('<br>'))
    //     $('#seven').append('<button id="h">B</button>').append(equipment10.wrongAnswer1, $('<br>'))
    //     $('#seven').append('<button id="i">C</button>').append(equipment10.wrongAnswer2, $('<br>'))
    //     $('.totalDisplay').text(total);
    //     $('#g').one('click', function () {

    //         //if correct answer
    //         if (equipment10.rightAnswer = "CORRECT!") {
    //             $("#seven").css('background-color', 'darkgreen');

    //             // }
    //             // add points
    //             total += 10
    //         }

    //         console.log(total)

    //         //else
    //         //remove points

    //     })
    //     $('#h').one('click', function () {
    //         //if correct answer
    //         if (equipment10.wrongAnswer1 = "INCORRECT!") {
    //             $("#seven").css('background-color', 'darkred');

    //             // }
    //             // add points
    //             total -= 10
    //         }
    //         console.log(total)
    //     })
    //     $('#i').one('click', function () {
    //         //if correct answer
    //         if (equipment10.wrongAnswer2 = "INCORRECT!") {
    //             $("#seven").css('background-color', 'darkred');

    //             // }
    //             // add points
    //             total -= 10
    //         }
    //         console.log(total)

    //     })





    // })
    // const lenses10 = {
    //     description: "This camera is",
    //     rightAnswer: "What is a makiiu lens",
    //     wrongAnswer1: "ajsdkfjdskl",
    //     wrongAnswer2: "fjkfdjkfdfjk",
    //     points: 10

    // };
    // $('#eight').click(function () {
    //     $(this).html(lenses10.description).append($('<br>'), $('<br>'))

    //     $('#eight').append('<button id="j">A</button>').append(lenses10.rightAnswer, $('<br>'))
    //     $('#eight').append('<button id="k">B</button>').append(lenses10.wrongAnswer1, $('<br>'))
    //     $('#eight').append('<button id="l">C</button>').append(lenses10.wrongAnswer2, $('<br>'))
    //     $('.totalDisplay').text(total);

    //     $('#j').one('click', function () {

    //         //if correct answer
    //         if (lenses10.rightAnswer = "CORRECT!") {
    //             $("#eight").css('background-color', 'darkgreen');

    //             // }
    //             // add points
    //             total += 10
    //         }

    //         console.log(total)

    //         //else
    //         //remove points

    //     })
    //     $('#k').one('click', function () {
    //         //if correct answer
    //         if (lenses10.wrongAnswer1 = "INCORRECT!") {
    //             $("#eight").css('background-color', 'darkred');

    //             // }
    //             // add points
    //             total -= 10
    //         }
    //         console.log(total)
    //     })
    //     $('#l').one('click', function () {
    //         //if correct answer
    //         if (lenses10.wrongAnswer2 = "INCORRECT!") {
    //             $("#eight").css('background-color', 'darkred');

    //             // }
    //             // add points
    //             total -= 10
    //         }
    //         console.log(total)
    //     })
    // })

    // const genres20 = {
    //     description: "This camera is",
    //     rightAnswer: "What is a making lens",
    //     wrongAnswer1: "ajsdkfjdskl",
    //     wrongAnswer2: "fjkfdjkfdfjk",
    //     points: 20

    // };
    // $('#nine').click(function () {
    //     $(this).html(genres20.description).append($('<br>'), $('<br>'))

    //     $('#nine').append('<button id="m">A</button>').append(genres20.rightAnswer, $('<br>'))
    //     $('#nine').append('<button id="n">B</button>').append(genres20.wrongAnswer1, $('<br>'))
    //     $('#nine').append('<button id="o">C</button>').append(genres20.wrongAnswer2, $('<br>'))

    //     $('.totalDisplay').text(total);

    //     $('#m').one('click', function () {

    //         //if correct answer
    //         if (genres20.rightAnswer = "CORRECT!") {
    //             $("#nine").css('background-color', 'darkgreen');

    //             // }
    //             // add points
    //             total += 20
    //         }

    //         console.log(total)

    //         //else
    //         //remove points

    //     })
    //     $('#n').one('click', function () {
    //         //if correct answer
    //         if (genres20.wrongAnswer1 = "INCORRECT!") {
    //             $("#nine").css('background-color', 'darkred');

    //             // }
    //             // add points
    //             total -= 20
    //         }
    //         console.log(total)
    //     })
    //     $('#o').one('click', function () {
    //         //if correct answer
    //         if (genres20.wrongAnswer2 = "INCORRECT!") {
    //             $("#nine").css('background-color', 'darkred');

    //             // }
    //             // add points
    //             total -= 20
    //         }
    //         console.log(total)
    //     })


    // })
    const settings20 = {
        description: "This camera is kasa",
        rightAnswer: "What is a maki time :)",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 20

    };


    $('#ten').click(function () {
        $(this).html(settings20.description).append($('<br>'), $('<br>'))

        $('#ten').append('<button id="p">A</button>').append(settings20.rightAnswer, $('<br>'))
        $('#ten').append('<button id="q">B</button>').append(settings20.wrongAnswer1, $('<br>'))
        $('#ten').append('<button id="r">C</button>').append(settings20.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#p').one('click', function () {

            //if correct answer
            if (settings20.rightAnswer = "CORRECT!") {
                $("#ten").css('background-color', 'darkgreen');

                // }
                // add points
                total += 20
            }

            console.log(total)

            //else
            //remove points

        })
        $('#q').one('click', function () {
            //if correct answer
            if (settings20.wrongAnswer1 = "INCORRECT!") {
                $("#ten").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })
        $('#r').one('click', function () {
            //if correct answer
            if (settings20.wrongAnswer2 = "INCORRECT!") {
                $("#ten").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })




    })

    const equipment20 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 20

    };

    $('#eleven').click(function () {
        $(this).html(equipment20.description).append($('<br>'), $('<br>'))

        $('#eleven').append('<button id="s">A</button>').append(equipment20.rightAnswer, $('<br>'))
        $('#eleven').append('<button id="t">B</button>').append(equipment20.wrongAnswer1, $('<br>'))
        $('#eleven').append('<button id="u">C</button>').append(equipment20.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#s').one('click', function () {

            //if correct answer
            if (equipment20.rightAnswer = "CORRECT!") {
                $("#eleven").css('background-color', 'darkgreen');

                // }
                // add points
                total += 20
            }

            console.log(total)

            //else
            //remove points

        })
        $('#t').one('click', function () {
            //if correct answer
            if (equipment20.wrongAnswer1 = "INCORRECT!") {
                $("#eleven").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
         })
        $('#u').one('click', function () {
            //if correct answer
            if (equipment20.wrongAnswer2 = "INCORRECT!") {
                $("#eleven").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })

    })
    const lenses20 = {
        description: "This camera is",
        rightAnswer: "What is a makiiu lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 20

    };
    $('#twelve').click(function () {
        $(this).html(lenses20.description).append($('<br>'), $('<br>'))

        $('#twelve').append('<button id ="v">A</button>').append(lenses20.rightAnswer, $('<br>'))
        $('#twelve').append('<button id ="w">B</button>').append(lenses20.wrongAnswer1, $('<br>'))
        $('#twelve').append('<button id ="x">C</button>').append(lenses20.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#v').one('click', function () {

            //if correct answer
            if (lenses20.rightAnswer = "CORRECT!") {
                $("#twelve").css('background-color', 'darkgreen');

                // }
                // add points
                total += 20
            }

            console.log(total)

            //else
            //remove points

        })
        $('#w').one('click', function () {
            //if correct answer
            if (lenses20.wrongAnswer1 = "INCORRECT!") {
                $("#twelve").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })
        $('#x').one('click', function () {
            //if correct answer
            if (lenses20.wrongAnswer2 = "INCORRECT!") {
                $("#twelve").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })
    })
    const genres30 = {
        description: "This camera is",
        rightAnswer: "What is a making lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 30

    };

    
    $('#thirteen').click(function () {
        $(this).html(genres30.description).append($('<br>'), $('<br>'))

        $('#thirteen').append('<button id= "x">A</button>').append(genres30.rightAnswer, $('<br>'))
        $('#thirteen').append('<button id= "y">B</button>').append(genres30.wrongAnswer1, $('<br>'))
        $('#thirteen').append('<button id= "zz">C</button>').append(genres30.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#x').one('click', function () {

            //if correct answer
            if (genres30.rightAnswer = "CORRECT!") {
                $("#thirteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 30
            }

            console.log(total)

            //else
            //remove points

        })
        $('#y').one('click', function () {
            //if correct answer
            if (genres30.wrongAnswer1 = "INCORRECT!") {
                $("#thirteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })
        $('#zz').one('click', function () {
            //if correct answer
            if (genres30.wrongAnswer2 = "INCORRECT!") {
                $("#thirteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })


    })
    const settings30 = {
        description: "This camera is",
        rightAnswer: "What is a maki time :)",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 30

    };

    $('#fourteen').click(function () {
        $(this).html(settings30.description).append($('<br>'), $('<br>'))

        $('#fourteen').append('<button id="aa">A</button>').append(settings30.rightAnswer, $('<br>'))
        $('#fourteen').append('<button id="bb">B</button>').append(settings30.wrongAnswer1, $('<br>'))
        $('#fourteen').append('<button id="cc">C</button>').append(settings30.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#aa').one('click', function () {

            //if correct answer
            if (settings30.rightAnswer = "CORRECT!") {
                $("#fourteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 30
            }

            console.log(total)

            //else
            //remove points

        })
        $('#bb').one('click', function () {
            //if correct answer
            if (settings30.wrongAnswer1 = "INCORRECT!") {
                $("#fourteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })
        $('#cc').one('click', function () {
            //if correct answer
            if (settings30.wrongAnswer2 = "INCORRECT!") {
                $("#fourteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })





    })
    const equipment30 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkffunny",
        points: 30

    };

    $('#fifteen').click(function () {
        $(this).html(equipment30.description).append($('<br>'), $('<br>'))

        $('#fifteen').append('<button id= dd>A</button>').append(equipment30.rightAnswer, $('<br>'))
        $('#fifteen').append('<button id= ee>B</button>').append(equipment30.wrongAnswer1, $('<br>'))
        $('#fifteen').append('<button id= ff>C</button>').append(equipment30.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#dd').one('click', function () {

            //if correct answer
            if (equipment30.rightAnswer = "CORRECT!") {
                $("#fifteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 30
            }

            console.log(total)

            //else
            //remove points

        })
    
        $('#ee').one('click', function () {
            //if correct answer
            if (equipment30.wrongAnswer1 = "INCORRECT!") {
                $("#fifteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })
        $('#ff').one('click', function () {
            //if correct answer
            if (equipment30.wrongAnswer2 = "INCORRECT!") {
                $("#fifteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })

    })

    const lenses30 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 30

    };
    $('#sixteen').click(function () {
        $(this).html(lenses30.description).append($('<br>'), $('<br>'))

        $('#sixteen').append('<button id= gg>A</button>').append(lenses30.rightAnswer, $('<br>'))
        $('#sixteen').append('<button id= hh>B</button>').append(lenses30.wrongAnswer1, $('<br>'))
        $('#sixteen').append('<button id= ii>C</button>').append(lenses30.wrongAnswer2, $('<br>'))


        $('.totalDisplay').text(total);

        $('#gg').one('click', function () {

            //if correct answer
            if (lenses30.rightAnswer = "CORRECT!") {
                $("#sixteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 30
            }

            console.log(total)

            //else
            //remove points

        })
        $('#hh').one('click', function () {
            //if correct answer
            if (lenses30.wrongAnswer1 = "INCORRECT!") {
                $("#sixteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })
        $('#ii').one('click', function () {
            //if correct answer
            if (lenses30.wrongAnswer2 = "INCORRECT!") {
                $("#sixteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })


    })
    const genres40 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk ::",
        points: 40

    };
    $('#seventeen').click(function () {
        $(this).html(genres40.description).append($('<br>'), $('<br>'))

        $('#seventeen').append('<button id= "gg">A</button>').append(genres40.rightAnswer, $('<br>'))
        $('#seventeen').append('<button id= "hh">B</button>').append(genres40.wrongAnswer1, $('<br>'))
        $('#seventeen').append('<button id= "ii">C</button>').append(genres40.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#gg').one('click', function () {

            //if correct answer
            if (genres40.rightAnswer = "CORRECT!") {
                $("#seventeen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 40
            }

            console.log(total)

            //else
            //remove points

        })
        $('#hh').one('click', function () {
            //if correct answer
            if (genres40.wrongAnswer1 = "INCORRECT!") {
                $("#seventeen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })
        $('#ii').one('click', function () {
            //if correct answer
            if (genres40.wrongAnswer2 = "INCORRECT!") {
                $("seventeen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })




    })
    const settings40 = {
        description: "This camera is",
        rightAnswer: "What is a maki :)",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 40

    };

    $('#eighteen').click(function () {
        $(this).html(settings40.description).append($('<br>'), $('<br>'))

        $('#eighteen').append('<button id="mm">A</button>').append(settings40.rightAnswer, $('<br>'))
        $('#eighteen').append('<button id="nn">B</button>').append(settings40.wrongAnswer1, $('<br>'))
        $('#eighteen').append('<button id="oo">C</button>').append(settings40.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#mm').one('click', function () {

            //if correct answer
            if (settings40.rightAnswer = "CORRECT!") {
                $("#eighteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 40
            }

            console.log(total)

            //else
            //remove points

        })
        $('#nn').one('click', function () {
            //if correct answer
            if (settings40.wrongAnswer1 = "INCORRECT!") {
                $("#eighteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })
        $('#oo').one('click', function () {
            //if correct answer
            if (settings40.wrongAnswer2 = "INCORRECT!") {
                $("#eighteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })





    })
    const equipment40 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 10

    };

    $('#nineteen').click(function () {
        $(this).html(equipment40.description).append($('<br>'), $('<br>'))

        $('#nineteen').append('<button>A</button>').append(equipment40.rightAnswer, $('<br>'))
        $('#nineteen').append('<button>B</button>').append(equipment40.wrongAnswer1, $('<br>'))
        $('#nineteen').append('<button>C</button>').append(equipment40.wrongAnswer2, $('<br>'))




    })
    const lenses40 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 10

    };
    $('#twenty').click(function () {
        $(this).html(genres10.description).append($('<br>'), $('<br>'))

        $('#twenty').append('<button>A</button>').append(lenses40.rightAnswer, $('<br>'))
        $('#twenty').append('<button>B</button>').append(lenses40.wrongAnswer1, $('<br>'))
        $('#twenty').append('<button>C</button>').append(lenses40.wrongAnswer2, $('<br>'))




    })

    const genres50 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 10

    };
    $('#twentyone').click(function () {
        $(this).html(genres50.description).append($('<br>'), $('<br>'))

        $('#twentyone').append('<button>A</button>').append(genres50.rightAnswer, $('<br>'))
        $('#twentyone').append('<button>B</button>').append(genres50.wrongAnswer1, $('<br>'))
        $('#twentyone').append('<button>C</button>').append(genres50.wrongAnswer2, $('<br>'))




    })
    const settings50 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 10

    };

    $('#twentytwo').click(function () {
        $(this).html(genres10.description).append($('<br>'), $('<br>'))

        $('#twentytwo').append('<button>A</button>').append(settings50.rightAnswer, $('<br>'))
        $('#twentytwo').append('<button>B</button>').append(settings50.wrongAnswer1, $('<br>'))
        $('#twentytwo').append('<button>C</button>').append(settings50.wrongAnswer2, $('<br>'))





    })
    const equipment50 = {
        description: "This camera is",
        rightAnswer: "What is a maki lens",
        wrongAnswer1: "ajsdkfjdskl",
        wrongAnswer2: "fjkfdjkfdfjk",
        points: 10

    };

    $('#twentythree').click(function () {
        $(this).html(equipment50.description).append($('<br>'), $('<br>'))

        $('#twentythree').append('<button>A</button>').append(equipment50.rightAnswer, $('<br>'))
        $('#twentythree').append('<button>B</button>').append(equipment50.wrongAnswer1, $('<br>'))
        $('#twentythree').append('<button>C</button>').append(equipment50.wrongAnswer2, $('<br>'))




    })
    const lenses50 = {
        description: "This lens captures details",
        rightAnswer: "What is a macro lens?",
        wrongAnswer1: "What is a telephoto lens?",
        wrongAnswer2: "What is a prime lens?",
        points: 10

    };
    $('#twentyfour').click(function () {
        $(this).html(lenses50.description).append($('<br>'), $('<br>'))

        $('#twentyfour').append('<button>A</button>').append(lenses50.rightAnswer, $('<br>'))
        $('#twentyfour').append('<button>B</button>').append(lenses50.wrongAnswer1, $('<br>'))
        $('#twentyfour').append('<button>C</button>').append(lenses50.wrongAnswer2, $('<br>'))



    })
















});


